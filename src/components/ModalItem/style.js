import styled from "styled-components";

const ModalItemContainer = styled.div`
    width: 100vw;
    max-width: 450px;
    padding: 10px;
    max-height: 85vh;
    overflow-y: scroll;

    .modal-item-images-container {
        margin: 10px 0;
    }

    .modal-item-figure, .modal-item-image {
        width: 100%;
        max-width: 250px;
        object-fit: cover;
        margin: 0 auto;
    }

    .modal-item-images-list-container {
        display: flex;
        overflow-x: scroll;
        margin-top: 10px;
        background-color: #ccc;
        padding: 5px 0;
    }

    .modal-item-secondary-figure, .modal-item-secondary-image {
        width: 80px;
        height: 90px;
        object-fit: cover;
    }

    .modal-item-secondary-figure {
        margin: 0 10px;
        cursor: pointer;
    }

    .modal-item-amount-container {
        display: flex;
        align-items: center;
    }

    .modal-item-amount-info-container {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .modal-item-amount-change {
        font-size: 12px;
        cursor: pointer;
        border: 2px solid var(--grey);
        padding: 2px 6px;
        box-sizing: content-box;
        border-radius: 20px;
        cursor: pointer;
    }

    .modal-item-amount-value {
        margin: 0 10px;
        font-size: 18px;
    }

    .modal-item-price-stock {
        margin: 10px 0;
        font-weight: bold;
        color: var(--purple);
    }

    .modal-item-star-container {
        color: var(--yellow);
    }

    .modal-item-rating-value {
        color: green;
    }

    .modal-item-description-container {
        margin: 10px 0;
    }

    .modal-item-blocked-button {
        border: none;
        padding: 5px 15px;
        background-color: #ccc;
        font-weight: bold;
        cursor: not-allowed;
        display: block;
        margin: 0 auto;
    }

    @media only screen and (min-width: 525px) {
        height: auto;
        overflow-y: initial;

        .modal-item-images-container {
            display: flex;
            justify-content: space-between;
            height: 220px;
        }

        .modal-item-images-list-container {
            flex-direction: column;
            overflow-y: scroll;
            padding: 0 5px;
        }

        .modal-item-figure, .modal-item-image {
            height: 220px;
        }

        .modal-item-secondary-figure {
            margin: 5px 0px;
        }
    }

`;

export default ModalItemContainer;