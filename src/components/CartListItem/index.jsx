import { useState } from 'react';
import CartListItemContainer from './style';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs';
import { useCart } from '../../Providers/Cart';

const CartListItem = ({ cartItem }) => {
    const [itemAmount, setItemAmount] = useState(cartItem.amountInCart);
    const { updateItemAmount, removeFromCart } = useCart();

    const increaseAmount = () => {
        setItemAmount(itemAmount + 1);
        cartItem.amountInCart = itemAmount + 1;
        updateItemAmount(itemAmount + 1, cartItem);
    }

    const decreaseAmount = () => {
        if(itemAmount > 1) {
            setItemAmount(itemAmount - 1);
            cartItem.amountInCart = itemAmount - 1;
            updateItemAmount(itemAmount - 1, cartItem);
        }
    }

    const removeItem = () => {
        removeFromCart(cartItem);
    }

    return(
        <CartListItemContainer>
                    <figure className = 'cart-item-figure'>
                        <img className = 'cart-item-image' 
                            src = {cartItem.thumbnail} 
                            alt = {cartItem.description} />
                    </figure>

                    <div className = 'cart-item-info-container'>
                        <h3 className = 'cart-item-name'> {cartItem.title} </h3>
                        <p className = 'cart-item-description'> {cartItem.description} </p>
                        <p className = 'cart-item-price'> US$ {cartItem.price.toFixed(2)} </p>

                        <div className = 'cart-item-amount-container'>
                            <p className = 'cart-item-amount-pre'> Amount </p>
                            <p className = 'cart-item-amount-info-container'>
                                <AiOutlineMinus 
                                    className = 'cart-item-amount-change cart-item-amount-minus'
                                    onClick = {decreaseAmount}/>
                                <span className = 'cart-item-amount-value'> {itemAmount} </span>
                                <AiOutlinePlus 
                                    className = 'cart-item-amount-change cart-item-amount-plus'
                                    onClick = {increaseAmount}/>
                            </p>
                        </div>

                        <p onClick = { removeItem } className = 'cart-item-remove-container'>
                            <BsFillTrashFill />
                            <span className = 'cart-item-remove'> Remove from Cart </span>
                        </p>
                    </div>
                </CartListItemContainer>
    )

}

export default CartListItem;