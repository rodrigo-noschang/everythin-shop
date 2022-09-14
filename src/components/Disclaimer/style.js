import styled, { keyframes } from "styled-components";

const appearList = keyframes`
    from {
        opacity: 0;
        transform: scaleY(0);
        transform-origin: top;
    }
    
    to {
        opacity: 1;
        transform: scaleY(1);
        transform-origin: top;
    }
`;

const DisclaimerContainer = styled.div`
    max-height: 80vh;
    overflow-y: scroll;
    padding: 5px;
    background-color: #bcb9d2;
    max-width: 800px;
    transition: .3s;

    .disclaimer-title {
        font-size: 24px;
        font-style: italic;
    }

    .disclaimer-info-section-container {
        margin: 25px 0;
    }

    .disclaimer-info {
        margin: 15px 0;
    }

    .disclaimer-info-ps {
        font-weight: bold;
    }

    .disclaimer-info-api-link {
        margin: 0 5px;
        color: var(--purple);
        text-decoration: none;
        font-weight: bold;
        border-bottom: 2px solid transparent;
    }

    .disclaimer-info-api-link:hover {
        border-bottom-color: var(--purple);
        transition: .3s;
    }

    .disclaimer-show-hide-container {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 200px;
        cursor: pointer;
    }

    .disclaimer-functionalities-title {
        font-size: 20px;
    }

    .disclaimer-functionalities-show-hide {
        animation: ${appearList} .3s;
    }

    .disclaimer-functionalities-list-container {
        margin: 15px 0;
        padding-left: 20px;
    }
    
    .disclaimer-functionalities-list-item {
        margin: 10px 0;
        list-style-type: square;
    }
`;

export default DisclaimerContainer;