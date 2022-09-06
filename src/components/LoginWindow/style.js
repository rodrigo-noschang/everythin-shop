import styled from "styled-components";

const LoginWindowContainer = styled.div`
    .login-window-title {
        background-color: var(--purple);
        color: var(--yellow);
        font-family: 'Stick', 'sans-serif';
        padding: 10px;
        text-align: center;
    }

    .login-window-subtitle {
        font-size: 21px;
        text-align: center;
        margin: 15px 0 30px;
    }

    .login-window-content-wrapper {
        padding: 0 10px 10px;
    }

    .login-window-form-container {
        text-align: center;
        width: 100%;
        max-width: 350px;
        margin: 0 auto 30px;
    }

    .login-window-input-container {
        display: flex;
        justify-content: space-between;
    }

    .login-window-input-label {
        font-size: 14px;
    }

    .login-window-input {
        padding: 2px 5px;
    }

    .login-window-password-input {
        margin-top: 15px;
    }

    .login-window-input-empty, .login-window-input-failed-login {
        color: red;
        font-size: 12px;
        font-style: italic;
        margin: 0;
    }

    .login-window-button-submit {
        background-color: var(--purple);
        color: var(--yellow);
        font-weight: bold;
        border: none;
        font-size: 17px;
        padding: 5px 20px;
        cursor: pointer;
        display: block;
        margin: 10px auto 0;
    }

    .login-window-first-message {
        font-size: 12px;
    }

    .login-window-first-message-highlight {
        font-weight: bold;
    }

    .login-window-second-message {
        margin: 20px 0;
        font-size: 12px;
    }

    .login-window-example {
        font-size: 12px;
    }

    .login-window-example-highlight {
        font-weight: bold;
    }
`;

export default LoginWindowContainer;