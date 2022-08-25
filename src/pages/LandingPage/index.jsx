import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Shop from "../../components/Shop";
import LandingPageContainer from "./style";
import api from '../../services/api';
import { useEffect, useState } from "react";

const LandingPage = () => {
    const [shopList, setShopList] = useState([]);

    useEffect(() => {
        api.get('/products')
        .then (res => {
            const newList = res.data.products;
            setShopList(newList);
        });
    }, [])

    console.log('Foi');

    return ( 
        <LandingPageContainer className = 'page-container'>
            <Header />
            <Carousel carouselList = {shopList.slice(0, 5)}/>
            <Shop list = {shopList.slice(14, 30)}/>
        </LandingPageContainer>
    )
}

export default LandingPage;