import styled from "styled-components";

const CartListContainer = styled.section`
    .cart-list-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
    }

    .cart-list-empty-cart-message {
        font-size: 22px;
        margin-top: 20px;
        text-align: center;
        font-style: italic;
    }

    @media only screen and (min-width: 750px) {
        max-width: 750px;

        .cart-list-container {
            max-width: 750px;
            align-items: flex-start;
            margin-left: 30px;
        }

        .cart-list-empty-cart-message {
            text-align: left;
            padding-left: 30px;   
        }
    }
`;

export default CartListContainer;