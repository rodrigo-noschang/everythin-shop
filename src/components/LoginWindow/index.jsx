import LoginWindowContainer from "./style";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
import { toast } from "react-toastify";
import { useState } from "react";

const LoginWindow = ({ setIsModalOpen, setUserToken }) => {
    const [failedLogin, setFailedLogin] = useState(false);

    const schema = yup.object().shape({
        username: yup.string().required('Login is required'),
        password: yup.string().required('Password is required')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const login = loginData => {
        api.post('/auth/login', loginData )
            .then(res => {
                localStorage.setItem('everythin-shop:token', JSON.stringify(res.data.token));
                setUserToken(res.data.token);
                toast.success('You"re logged in, now you can close your order!')
                setFailedLogin(false);
                setIsModalOpen(false);
            })
            .catch(err => {
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
                    {errors.login &&
                        <span className = 'login-window-input-empty'>
                             {errors.login?.message} 
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