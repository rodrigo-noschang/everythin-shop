import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Cart from "../pages/Cart";

const Router = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<LandingPage />} ></Route>
            <Route path = '/cart' element = {<Cart />}> </Route>
        </Routes>
    )
}

export default Router;