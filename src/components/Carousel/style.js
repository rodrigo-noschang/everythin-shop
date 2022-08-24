import styled, {keyframes} from "styled-components";

const carouselRoll = keyframes`
    0% {
        left: 0;
    }

    17% {
        left: 0;
    }

    20% {
        left: -650px;
    }

    37% {
        left: -650px;
    }

    40% {
        left: -1300px;
    }

    57% {
        left: -1300px;
    }

    60% {
        left: -1950px;
    }

    77% {
        left: -1950px;
    }

    80% {
        left: -2600px;
    }

    97% {
        left: -2600px;
    }

    100% {
        left: 0;
    }
`;


const CarouselContainer = styled.div`
    width: 100vw;
    margin: 30px 0;
    background-color: #d4d4d4;
    position: relative;
    display: none;
    
    .carousel-window {
        max-height: 390px;
        width: 100vw;
        max-width: 650px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }

    .carousel-list-container {
        width: 100vw;
        display: flex;
        position: relative;
        left: 0;
        animation: ${carouselRoll} 20s infinite;
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

    @media only screen and (min-width: 750px) {
        display: block;

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