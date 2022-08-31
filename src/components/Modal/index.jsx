import ModalContainer from "./style";

const Modal = ({ children, setIsModalOpen }) => {

    const hideModal = (evt) => {
        const clickedClasses = evt.target.classList.value;

        if (clickedClasses.includes('modal-container')) {
            setIsModalOpen(false);
        }
    }

    return (
        <ModalContainer className = 'modal-container' onClick={hideModal}>
            <div className = 'modal-content-wrapper'>
                {children }
            </div>
        </ModalContainer>
    )

}

export default Modal;