import styled from "styled-components";

const LandingPageContainer = styled.div`

    .carousel-container {
        margin-top: 60px;
        background-color: #eee;
        display: none;
    }

    .carousel-container button {
        margin: 0 5px;
    }

    .landing-page-load-more {
        color: var(--purple);
        text-decoration: underline;
        width: fit-content;
        margin: 0 auto;
        cursor: pointer;
    }

    @media only screen and (min-width: 680px) {
        .carousel-container {
            display: block;
        }
    }

`;

export default LandingPageContainer;