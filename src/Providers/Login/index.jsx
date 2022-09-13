import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        JSON.parse(localStorage.getItem('everythin-shop:token')) || ''
    ); 

    const logUserIn = (token) => {
        const stringifiedToken = JSON.stringify(token);
        localStorage.setItem('everythin-shop:token', stringifiedToken);
        setIsLoggedIn(stringifiedToken);
    }
    
    const logUserOut = () => {
        setIsLoggedIn();
        localStorage.removeItem('everythin-shop:token');
    }
    
    return (
        <LoginContext.Provider value = {{isLoggedIn, logUserIn, logUserOut}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext);