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
`;

export default CartPageContainer;