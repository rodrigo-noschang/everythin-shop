import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: var(--purple);
    color: var(--yellow);
    padding: 10px;

    .footer-content-limiter {
        max-width: 350px;
        margin: 0 auto;
    }

    .contact-me-email {
        font-weight: bold;
        margin: 15px 0;
    }

    .contact-me-small {
        font-size: 14px;
        font-weight: lighter;
    }

    .contact-me-email > a {
        color: var(--yellow);
        text-decoration: none;
        cursor: pointer;
    }

    .contact-me-email > a:hover {
        text-decoration: underline;
        transition: .2s;
    }

    .contact-me-social-container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        max-width: 350px;
    }

    .contact-me-social {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }

    .contact-me-social:hover {
        filter: brightness(1.2);
        transform: scale(1.2);
        transition: .2s;
    }

    .contact-me-social > svg {
        font-size: 35px;
        margin-bottom: 7px;
    }



`;

export default FooterContainer;