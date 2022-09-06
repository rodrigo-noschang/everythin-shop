import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('everythin-shop:cart')) || []
    );

    const addCartToLocalStorage = cart => {
        localStorage.setItem('everythin-shop:cart', JSON.stringify(cart));
    }

    const addToCart = newItem => {
        const itemInCart = cart.find(item => item.id === newItem.id);
        if (!itemInCart) {
            setCart([...cart, newItem]);
            addCartToLocalStorage([...cart, newItem]);
        } else {
            itemInCart.amountInCart = newItem.amountInCart;
            setCart([...cart]);
            addCartToLocalStorage([...cart])
        }

    }

    const removeFromCart = itemToRemove => {
        const updatedCart = cart.filter(item => {
            return item.id !== itemToRemove.id
        })

        setCart(updatedCart);
        addCartToLocalStorage(updatedCart);
    }

    const updateItemAmount = (newAmount, cartItem) => {
        cartItem.amountInCart = newAmount;
        setCart([...cart]);
        addCartToLocalStorage([...cart]);
    }

    const resetCart = () => {
        setCart([]);
        addCartToLocalStorage([]);
    }

    return(
        <CartContext.Provider value = {{cart, addToCart, removeFromCart, updateItemAmount, resetCart}}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);