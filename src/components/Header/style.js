import styled from "styled-components";


const HeaderContainer = styled.header`
    background-color: var(--purple);
    color: #fff;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 0 auto;

    .header-title {
        font-family: 'Stick', sans-serif;
        text-transform: uppercase;
        color: var(--yellow);
        text-decoration: underline;
        font-size: 24px;
        order: 1;
    }

    .header-input-container {
        display: flex;
        order: 3;
        margin-top: 20px;
        width: 90vw;
        max-width: 550px;
        position: relative;
    }

    .header-search-filter {
        background-color: var(--grey);
        display: flex;
        align-items: center;
        padding: 5px 10px;
        font-size: 14px;
        cursor: pointer;
    }

    .header-search-filter-arrow {
        margin-left: 10px;
        padding-top: 5px;
    }

    .header-search-input {
        border: none;
        outline: none;
        padding: 5px 10px;
        flex-grow: 1;
    }

    .header-search-search {
        border: none;
        background-color: var(--yellow);
        font-size: 18px;
        padding: 5px;
        border-radius: 0 5px 5px 0;
    }

    .header-categories-container {
        position: absolute;
        background-color: var(--grey);
        color: #FFF;
        top: 33px;
        padding: 0 10px;
        box-shadow: 0 8px 10px 0px #000;
        width: 165px;
        z-index: 1;
    }

    .header-go-to-cart-container {
        color: var(--yellow);
        display: flex;
        flex-direction: column;
        order: 1;
        line-height: 15px;
        cursor: pointer;
    }

    .header-go-to-cart-cart {
        font-size: 24px;
    }

    .header-go-to-cart-name {
        font-size: 12px;
    }

    @media only screen and (min-width: 550px) {
        .header-categories-container {
            width: 185px;
        }
    }

    @media only screen and (min-width: 650px) {
        justify-content: center;
        
        .header-title {
            margin-right: 30px;
        }
    
    }

    @media only screen and (min-width: 830px) {
        justify-content: space-around;
        padding: 20px 0;
        
        .header-input-container {
            order: 2;
            margin-top: 0;
        }
        
        .header-go-to-cart-container {
            order: 3;
        }
    }

    @media only screen and (min-width: 1450px) {
        justify-content: space-between;
        padding: 20px 60px;
    }

`;

export default HeaderContainer;