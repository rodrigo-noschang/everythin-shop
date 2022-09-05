import styled from "styled-components";

const CartPageContainer = styled.div`
    .cart-content-limiter {
        margin: 30px auto 0;
        padding: 0 10px;
        max-width: 1500px;
    }
    
    .cart-section-header {
        text-align: center;
    }

    .cart-section-title {
        font-size: 25px;
        text-align: center;
        margin-bottom: 10px;
    }

    .cart-section-close-order {
        border: none;
        background-color: var(--purple);
        color: var(--yellow);
        padding: 5px 25px;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
    }

    .cart-data-container {
        width: 100%;
        max-width: 350px;
        margin: 15px auto 0;
    }

    .cart-discount-container {
        margin: 0 0 20px;
    }

    .cart-discount-ask {
        font-weight: bold;
        font-size: 18px;
    }

    .cart-discount-insert-coupon-container {
        margin: 10px 0;
        border: 1px solid black;
        padding: 5px;
        display: flex;
        align-items: center;
    }

    .cart-discount-insert-coupon-container > svg {
        color: var(--grey);
    }

    .cart-discount-insert-coupon {
        border: none;
        margin-left: 5px;
        outline: none;
        flex-grow: 1;
    }

    .cart-discount-invalid-coupon-message {
        font-size: 11px;
        color: red;
        font-style: italic;
        margin-bottom: 5px;
    }

    .cart-discount-generate-button {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 10px 15px;
        font-size: 15px;
        cursor: pointer;
        background-color: var(--purple);
        color: var(--yellow);
        border: none;
    }

    .cart-discount-generate-button > svg {
        color: var(--yellow);
    }

    .cart-discount-hint {
        font-size: 11px;
        margin-top: 10px;
    }

    .cart-discount-hint-highlight {
        font-weight: bold;
    }

    .cart-discount-coupon-value {
        font-style: italic;
        font-weight: bold;
        color: var(--grey);
    }

    .cart-section-close-order-bottom {
        display: block;
        margin: 0 auto;
    }

    .cart-section-close-order-empty-cart {
        color: red;
        font-size: 12px;
        margin-top: 10px;
        text-align: center;
    }

    @media only screen and (min-width: 550px) {
        .cart-section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 30px;
        }

        .cart-section-title {
            margin-bottom: 0;
        }
    }

    @media only screen and (min-width: 1100px) {
        .cart-list-and-data-container {
            display: flex;
            justify-content: space-between;
            padding: 0 30px;
            margin-top: 30px;
        }

        .cart-list-container {
            margin-left: 0;
            margin-top: 0;
        }

        .cart-data-container {
            margin: 0;
        }
    }
`;

export default CartPageContainer;