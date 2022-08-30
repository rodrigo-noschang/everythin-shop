import { useCart } from "../../Providers/Cart";
import CartDataContainer from "./style";

const CartData = ({ discount }) => {
    const { cart } = useCart();
    
    return (
        <CartDataContainer>
            <h3 className = 'cart-data-title'> Your Order </h3>
            <ul className = 'cart-data-list-container'>
                {cart.map(cartItem => 
                    <p className = 'cart-data-item-container' key = {`cart-data-${cartItem.id}`}>
                        <span className = 'cart-data-item-name'> {cartItem.title} </span>
                        <span className = 'cart-data-item-amount'> ({cartItem.amountInCart}) </span> -
                        <span className = 'cart-data-item-price'> US$ {(cartItem.amountInCart * cartItem.price).toFixed(2)} </span>
                    </p>    
                )}
            </ul>
            <p className = 'cart-data-total'>
                <span className = 'cart-data-total-text'> Total: </span>
                <span className = 'cart-data-total-value'> US$ { cart.reduce((acc, curr) => {
                    return acc + (curr.amountInCart * curr.price)
                }, 0).toFixed(2) } </span>
            </p>
        </CartDataContainer>
    )

}

export default CartData;