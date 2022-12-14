import LoginWindowContainer from "./style";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { toast } from "react-toastify";
import { useState } from "react";
import { useLogin } from "../../Providers/Login";

const LoginWindow = ({ setIsModalOpen, command, resetCart, setIsOrderClosed }) => {
    const [failedLogin, setFailedLogin] = useState(false);
    const { logUserIn } = useLogin();

    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const login = loginData => {
        api.post('/auth/login', loginData )
            .then(res => {
                logUserIn(res.data.token);
                setFailedLogin(false);
                setIsModalOpen(false);

                if (command === 'new-order') { // user loged in to open a new order
                    toast.success('A new order was opened.', {
                        position: 'top-left'
                    })
                    resetCart();
                    setIsOrderClosed(false);
                } else if (command === 'close-order') { // user loged in to close an already existing order
                    toast.success('You are logged in, now you can close your order!', {
                        position: 'top-left'
                    })
                }
            })
            .catch(err => {
                console.log('Deu ruim');
                setFailedLogin(true);
            });
    }

    return (
        <LoginWindowContainer>
            <h2 className = 'login-window-title'> EVERYTHING' SHOP </h2>
            <h3 className = 'login-window-subtitle'> Log In to Close your Order </h3>

            <div className = 'login-window-content-wrapper'>
                <form onSubmit = {handleSubmit(login)} className = 'login-window-form-container'>
                    <p className = 'login-window-input-container login-window-email-input'>
                        <label className = 'login-window-input-label'> Username </label>
                        <input {...register('username')} 
                            className = 'login-window-input'  
                            placeholder = 'Your username'/>
                    </p>
                    {errors.username &&
                        <span className = 'login-window-input-empty'>
                             {errors.username?.message} 
                        </span>
                    }

                    <p className = 'login-window-input-container login-window-password-input'>
                        <label className = 'login-window-input-label'> Password </label>
                        <input {...register('password')} 
                            className = 'login-window-input' 
                            type = 'password' 
                            placeholder = 'Your password'/>
                    </p>
                    {errors.password &&
                        <span className = 'login-window-input-empty'>
                            { errors.password?.message }
                        </span>
                    }

                    {failedLogin && 
                        <p className = 'login-window-input-failed-login'> Username or password are invalid </p>
                    }

                    <button className = 'login-window-button-submit'> Login </button>
                </form>

                <p className = 'login-window-first-message'>
                    <span className = 'login-window-first-message-highlight'> OBS: </span>
                    The API I am using does not allowd insertions on 
                    the database, so just use an existing user to login.
                </p>

                <p className = 'login-window-second-message'> Here is an example: </p>

                <p className = 'login-window-example'>
                    <span className = 'login-window-example-highlight'> username: </span>
                    atuny0
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