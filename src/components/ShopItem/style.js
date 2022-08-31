import styled from "styled-components";

const ShopItemContainer = styled.li`
    width: 100%;
    max-width: 260px;
    height: 345px;
    box-shadow: 0 0 10px 0 var(--purple);
    margin: 15px 10px;
    display: flex;
    flex-direction: column;

    .shop-item-figure, .shop-item-image {
        width: 100%;
        height: 160px;
        object-fit: cover;
    }

    .shop-item-info-container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 1;
    }

    .shop-item-name {
        font-size: 18px;
    }

    .shop-item-description {
        margin: 8px 0;
        font-size: 13px;
        color: var(--grey);
        max-height: 60px; 
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .shop-item-price {
        color: var(--purple);
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 5px;
    }

    .shop-item-add-to-cart {
        border: none;
        display: block;
        padding: 5px 30px;
        background-color: var(--purple);
        color: var(--yellow);
        margin: 0 auto;
        cursor: pointer;
    }
`;

export default ShopItemContainer;