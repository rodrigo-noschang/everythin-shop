import styled, {keyframes} from "styled-components";

const appearSlowly = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${appearSlowly} .4s;

    &::before {
        content: '';
        width: 100vw;
        height: 100vh;
        background-color: #ccc;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0.6;
    }

    .modal-content-wrapper { 
        position: absolute;
        background-color: #fff;
        padding: 10px;
        margin: 0 10px;
        opacity: 1;
        z-index: 3;
    }

    .modal-item-description-container {
        font-size: 14px;
        color: var(--grey);
    }

    .modal-item-add-to-cart-container {
        text-align: center;
    }

    .modal-item-add-to-cart {
        border: none;
        background-color: var(--purple);
        padding: 7px 20px;
        color: var(--yellow);
        cursor: pointer;
    }
`;

export default ModalContainer;