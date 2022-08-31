import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import ModalItemContainer from "./style";
import { useCart } from '../../Providers/Cart';
import { toast } from 'react-toastify';

const ModalItem = ({ setIsModalOpen, item }) => {
    const [itemAmount, setItemAmount] = useState(1);
    const [currentImage, setCurrentImage] = useState(item.thumbnail)
    const { addToCart } = useCart();

    const increaseAmount = () => {
        setItemAmount(itemAmount + 1);
    }

    const decreaseAmount = () => {
        if(itemAmount > 0) setItemAmount(itemAmount - 1);
    }

    const getAmountAndAddToCart = () => {
        const itemToCart = {...item, 'amountInCart': itemAmount};
        addToCart(itemToCart);
        setIsModalOpen(false);
        toast.success("Item added to Cart!");
    }

    return (
        <ModalItemContainer>
            <h2 className = 'modal-item-name'> {item.title} </h2>
            <div className = 'modal-item-images-container'>
                <figure className = 'modal-item-figure'>
                    <img className = 'modal-item-image' 
                        src = {currentImage} 
                        alt = {item.description} />
                </figure>
                <ul className = 'modal-item-images-list-container'>
                    {item.images.map(image => {
                        return (
                            <figure key = {image} className = 'modal-item-secondary-figure'>
                                <img className = 'modal-item-secondary-image' 
                                    src = {image} 
                                    alt = 'product images list'
                                    onClick = {() => setCurrentImage(image)}/>
                            </figure>
                        )
                    })}
                </ul>
            </div>

            <div className = 'modal-item-amount-container'>
                <p className = 'modal-item-amount-pre'> Amount </p>
                <p className = 'modal-item-amount-info-container'>
                    <AiOutlineMinus 
                        className = 'modal-item-amount-change modal-item-amount-minus'
                        onClick = {decreaseAmount}/>
                    <span className = 'modal-item-amount-value'> {itemAmount} </span>
                    <AiOutlinePlus 
                        className = 'modal-item-amount-change modal-item-amount-plus'
                        onClick = {increaseAmount}/>
                </p>
            </div>

            <div className = 'modal-item-price-stock'>
                US$ {item.price.toFixed(2)} ({item.stock} available - stock)
            </div>

            <div className = 'modal-item-rating-container'> 
                <span className = 'modal-item-star-container'>
                    <BsStarFill className = 'modal-item-star'/>   
                    <BsStarFill className = 'modal-item-star'/>   
                    <BsStarFill className = 'modal-item-star'/>   
                    <BsStarFill className = 'modal-item-star'/>
                    <BsStarHalf className = 'modal-item-star modal-item-star-half'/>   
                </span>
                <span className = 'modal-item-rating-value'> - {item.rating.toFixed(2)} </span>
            </div>

            <div className = 'modal-item-description-container'>
                {item.description}
            </div>

            <div className = 'modal-item-add-to-cart-container'>
                <button className = 'modal-item-add-to-cart'
                    onClick = {getAmountAndAddToCart} > 
                    Add to Cart 
                </button>
            </div>

        </ModalItemContainer>
    )
}

export default ModalItem;