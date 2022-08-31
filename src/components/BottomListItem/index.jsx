import BottomListItemContainer from "./style";
import Modal from "../Modal";
import ModalItem from "../ModalItem";
import { useState } from "react";

const BottomListItem = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    return (
        <BottomListItemContainer>
            <figure className = 'bottom-list-figure'>
                <img className = 'bottom-list-image' 
                    src = {item.thumbnail} 
                    alt = {item.title} />
            </figure>

            <div className = 'bottom-list-info-container'>
                <h3 className = 'bottom-list-item-name'> {item.title} </h3>
                <button className = 'bottom-list-item-see'
                    onClick = {openModal} > 
                    See Product 
                </button>
            </div>

            { isModalOpen &&
                <Modal setIsModalOpen = {setIsModalOpen} >
                    <ModalItem setIsModalOpen = {setIsModalOpen} item = {item}/>    
                </Modal>
            }
        </BottomListItemContainer>
    )
}

export default BottomListItem;