import styled from "styled-components";
import priceBg from '../../assets/img/price-background.png';

const CarouselContainer = styled.div`
    width: 100vw;
    margin: 30px 0;
    background-color: #d4d4d4;
    position: relative;

    .carousel-window {
        width: 100vw;
        max-width: 650px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }

    .carousel-item-was-price-container {
        width: 155px;
        height: 110px;
        background-image: url(${priceBg});
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        transform: rotate(-25deg);
        position: absolute;
        top: -10px;
        right: 10px;
    }

    .carousel-item-figure {
        margin: 0 auto;
    }

    .carousel-item-figure, .carousel-item-image {
        width: 100%;
        max-width: 650px;
    }

    .carousel-item-was-price {
        margin-top: 5px;
        color: red;
        font-size: 18px;
        text-decoration: line-through 2px;
    }

    .carousel-item-now-price-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #6d896d;
        width: 120px;
        padding: 5px 10px;
        border-radius: 30px;
        font-weight: bold;
        position: absolute;
        bottom: 10px;
        right: 80px;
        box-shadow: 0 0 15px 2px #6ea56e;
    }

    .carousel-item-now-price {
        margin-top: 5px;
        color: #fff;
    }

    .carousel-scroll {
        font-size: 24px;
        color: var(--yellow);
        cursor: pointer;
        background-color: #bababa;
        opacity: .7;
        padding: 10px 2px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        line-height: 20px;
    }

    .carousel-scroll-left {
        left: 0;
    }

    .carousel-scroll-right {
        right: 0;
    }

    @media only screen and (min-width: 730px) {
        .carousel-scroll {
            background-color: #a09f9f;
        }
        
        .carousel-scroll-left {
            left: calc(50% - 370px);
        }

        .carousel-scroll-right {
            right: calc(50% - 370px);
        }
    }

`;

export default CarouselContainer;