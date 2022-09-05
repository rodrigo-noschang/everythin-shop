import LoginWindowContainer from "./style";

const LoginWindow = () => {

    return (
        <LoginWindowContainer>
            <h2 className = 'login-window-title'> EVERYTHING' SHOP </h2>
            <h3 className = 'login-window-subtitle'> Log In to Close your Order </h3>

            <div className = 'login-window-content-wrapper'>
                <form className = 'login-window-form-container'>
                    <p className = 'login-window-input-container login-window-email-input'>
                        <label className = 'login-window-input-label'> E-mail </label>
                        <input className = 'login-window-input' type = 'email' placeholder = 'Your e-mail'/>
                    </p>
                    <p className = 'login-window-input-container login-window-password-input'>
                        <label className = 'login-window-input-label'> Password </label>
                        <input className = 'login-window-input' type = 'password' placeholder = 'Your password'/>
                    </p>
                    <button className = 'login-window-button-submit'> Login </button>
                </form>

                <p className = 'login-window-first-message'>
                    <span className = 'login-window-first-message-highlight'> OBS: </span>
                    The API I am using does not allowd insertions on 
                    the database, so just use an existing user to login.
                </p>

                <p className = 'login-window-second-message'> Here is an example: </p>

                <p className = 'login-window-example'>
                    <span className = 'login-window-example-highlight'> e-mail: </span>
                    atuny0@sohu.com
                </p>

                <p className = 'login-window-example'>
                    <span className = 'login-window-example-highlight'> password: </span>
                    9uQFF1Lh
                </p>
            </div>

        </LoginWindowContainer>
    )

}

export default LoginWindow;