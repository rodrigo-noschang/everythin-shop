import styled from 'styled-components';

const CartDataContainer = styled.section`
    background-color: #ccc;
    padding: 5px;
    width: 100%;
    max-width: 350px;
    margin: 0 auto 20px;

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

    .cart-data-item-price-discount {
        color: var(--discount-green);
    }

    .cart-data-total {
        text-align: center;
        font-size: 18px;
        margin: 20px auto 0;
        padding-top: 5px;
        border-top: 2px solid var(--purple);
    }

    .cart-data-total-text {
        font-weight: bold;
    }

    .cart-data-total-value {
        font-size: 16px;
    }

    .cart-data-total-value-discount {
        color: var(--discount-green);
    }
`;

export default CartDataContainer;