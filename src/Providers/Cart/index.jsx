import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = newItem => {
        const itemInCart = cart.find(item => item.id === newItem.id);
        if (!itemInCart) {
            setCart([...cart, newItem]);
        } else {
            itemInCart.amountInCart = newItem.amountInCart;
            setCart([...cart]);
        }
    }

    const removeFromCart = itemToRemove => {
        const updatedCart = cart.filter(item => {
            return item.id !== itemToRemove.id
        })

        setCart(updatedCart);
    }

    const updateItemAmount = (newAmount, cartItem) => {
        cartItem.amountInCart = newAmount;
        setCart([...cart]);
    }

    return(
        <CartContext.Provider value = {{cart, addToCart, removeFromCart, updateItemAmount}}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);