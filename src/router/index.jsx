import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path = '/' element = {<LandingPage />}></Route>
        </Routes>
    )
}

export default Router;