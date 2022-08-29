import { useState } from 'react';
import CartListItemContainer from './style';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs';

const CartListItem = ({ cartItem }) => {
    const [itemAmount, setItemAmount] = useState(cartItem.amountInCart);

    
    const increaseAmount = () => {
        setItemAmount(itemAmount + 1);
        cartItem.amountInCart = itemAmount + 1;
    }

    const decreaseAmount = () => {
        if(itemAmount > 0) {
            setItemAmount(itemAmount - 1);
            cartItem.amountInCart = itemAmount - 1;
        }
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

                        <p className = 'cart-item-remove-container'>
                            <BsFillTrashFill />
                            <span className = 'cart-item-remove'> Remove from Cart </span>
                        </p>
                    </div>
                </CartListItemContainer>
    )

}

export default CartListItem;