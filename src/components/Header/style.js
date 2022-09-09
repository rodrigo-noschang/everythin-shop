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
        font-size: 18px;
        text-align: left;
        order: 1;
        cursor: pointer;
    }

    .header-input-container {
        display: flex;
        order: 4;
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

    .header-search-filter-clear-container {
        background-color: #FFF;
        color: black;
        align-self: center;
        line-height: 33px;
        cursor: pointer;
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
        z-index: 2;
    }

    .header-goto-login-container {
        order: 2;
        display: flex;
    }

    .header-go-to-cart-container, .header-go-to-shop-container {
        color: var(--yellow);
        display: flex;
        flex-direction: column;
        line-height: 15px;
        cursor: pointer;
    }

    .header-go-to-cart-cart {
        font-size: 20px;
    }

    .header-go-to-shop-shop {
        font-size: 18px;
    }

    .header-go-to-shop-shop {
        text-align: center;
    }

    .header-go-to-cart-name {
        font-size: 10px;
    }

    .header-go-to-shop-name {
        font-size: 8px;
    }

    .header-login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        color: var(--yellow);
        justify-content: space-around;
        margin-left: 10px;
        cursor: pointer;
    }

    .header-login-logout-icon {
        font-size: 14px;
    }

    .header-login-logout-text {
        font-size: 10px;
    }

    @media only screen and (min-width: 450px) {
        .header-title {
            font-size: 20px;
        }
        
        .header-go-to-cart-cart, .header-go-to-shop-shop, .header-login-logout-icon {
            font-size: 20px;
        }

        .header-go-to-cart-name, .header-go-to-shop-name, .header-login-logout-text {
            font-size: 12px;
        }
    }


    @media only screen and (min-width: 550px) {
        .header-categories-container {
            width: 185px;
        }

        .header-login-container {
            margin-left: ${props => props.page === 'cart' ? '25px' : '65px'};
        }

        /* .header-go-to-shop-shop {
            font-size: 16px;
        }

        .header-go-to-shop-name {
            font-size: 9px;
        } */
    }

    @media only screen and (min-width: 650px) {
        justify-content: center;
        
        .header-title {
            margin-right: 30px;
        }
    
    }

    @media only screen and (min-width: 915px) {
        justify-content: space-around;
        padding: 20px 0;
        
        .header-input-container {
            order: 2;
            margin-top: 0;
        }

        .header-login-container {
            order: 3;
            /* margin-left: 20px; */
        }
    }

    @media only screen and (min-width: 1450px) {
        justify-content: space-between;
        padding: 20px 60px;
    }

`;

export default HeaderContainer;