import styled from "styled-components";

const CartListItemContainer = styled.li`
    border-top: 2px solid var(--purple);
    padding: 10px 0;
    margin: 10px 0;
    max-width: 260px;

    .cart-item-figure, .cart-item-image {
        width: 200px;
        margin: 0 auto 5px;
        object-fit: cover;
        height: 120px;
    }

    .cart-item-name {
        font-size: 20px;
    }

    .cart-item-description {
        margin: 10px 0;
        color: var(--grey);
        font-size: 14px;
    }

    .cart-item-price {
        color: var(--purple);
        font-weight: bold;
        font-size: 16px;
    }

    .cart-item-amount-container {
        display: flex;
        align-items: center;
        margin: 10px 0;
    }
 
    .cart-item-amount-info-container {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .cart-item-amount-change {
        font-size: 12px;
        cursor: pointer;
        border: 2px solid var(--grey);
        padding: 2px 6px;
        box-sizing: content-box;
        border-radius: 20px;
        cursor: pointer;
    }

    .cart-item-amount-value {
        margin: 0 10px;
        font-size: 18px;
    }

    .cart-item-remove-container {
        display: flex;
        align-items: center;
        width: fit-content;
        border-bottom: 2px solid transparent;
    }

    
    .cart-item-remove-container:hover {
        border-bottom-color: var(--purple);
        transition: .3s;
        cursor: pointer;
    }

    .cart-item-remove {
        margin-left: 8px;
    }

    @media only screen and (min-width: 751px) {
        display: flex;
        max-width: 80%;

        .cart-item-figure {
            display: flex;
            align-items: center;
            height: 150px;
        }
    }

`;

export default CartListItemContainer;