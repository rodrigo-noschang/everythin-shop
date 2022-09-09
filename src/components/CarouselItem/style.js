import styled from "styled-components";
import priceBg from '../../assets/img/price-background.png';

const CarouselItemContainer = styled.li`
    width: 100vw;
    max-width: 650px;
    max-height: 390px;
    position: relative;
    margin: 0 auto;
    cursor: pointer;

    .carousel-item-figure {
        margin: 0 auto;
        position: relative;
    }

    .carousel-item-figure, .carousel-item-image {
        width: 100vw;
        max-width: 650px;
        height: 390px;
        object-fit: cover;
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


`;

export default CarouselItemContainer;