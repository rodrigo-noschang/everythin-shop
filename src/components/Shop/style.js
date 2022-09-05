import styled from "styled-components";

const ShopContainer = styled.main`
    padding: 10px;
    margin: 30px auto 0;

    .shop-list-limiter {
        width: 100%;
        max-width: 1500px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
    }

    .shop-list-nothing-found {
        font-size: 26px;
        font-style: italic;
    }
`;

export default ShopContainer;