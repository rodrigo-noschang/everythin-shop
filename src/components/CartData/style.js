import styled from 'styled-components';

const CartDataContainer = styled.section`
    background-color: #ccc;
    padding: 5px;
    max-width: 350px;
    margin: 0 auto;

    .cart-data-item-container {
        margin: 10px 0;
    }

    .cart-data-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .cart-data-item-name {
        font-weight: bold;
    }

    .cart-data-item-amount {
        color: var(--grey);
        font-size: 13px;
    }

    .cart-data-item-price {
        color: var(--purple);
        font-weight: bold;
    }

    .cart-data-total {
        text-align: center;
        font-size: 18px;
    }

    .cart-data-total-text {
        font-weight: bold;
    }

    .cart-data-total-value {
        font-size: 16px;
    }
`;

export default CartDataContainer;