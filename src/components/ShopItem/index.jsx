import Modal from "../Modal";
import ModalItem from "../ModalItem";
import ShopItemContainer from "./style";
import { useState } from "react";

const ShopItem = ({ setAreImagesLoaded, item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    
    const allowRendering = () => {
        setAreImagesLoaded(true);
    }

    return (
        <ShopItemContainer>
            <figure className = 'shop-item-figure'>
                <img className = 'shop-item-image' 
                    src = {item.thumbnail} 
                    alt = {item.description} 
                    onLoad = {allowRendering}/>
            </figure>

            <div className = 'shop-item-info-container'>
                <h3 className = 'shop-item-name'> {item.title} </h3>
                <p className = 'shop-item-description'> {item.description} </p>
                <p className = 'shop-item-price'> {`US$ ${item.price.toFixed(2)}`} </p>
                <button className = 'shop-item-add-to-cart'
                    onClick = {openModal}> 
                    View product
                </button>
            </div>

            { isModalOpen &&
                <Modal setIsModalOpen = {setIsModalOpen} >
                    <ModalItem setIsModalOpen = {setIsModalOpen} item = {item}/>    
                </Modal>
            }
        </ShopItemContainer>
    )

}

export default ShopItem;