import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import LandingPageContainer from "./style";
import api from '../../services/api';
import { useEffect, useState } from "react";

const LandingPage = () => {
    const [shopList, setShopList] = useState([]);
    const carouselList = shopList.slice(0, 5);
    const bottomList = shopList.slice(0, 10);

    useEffect(() => {
        api.get('/products')
        .then (res => {
            const newList = res.data.products;
            setShopList([...newList]);
        });
    }, [])

    return ( 
        <LandingPageContainer className = 'page-container'>
            <Header />
            <Carousel carouselList = {carouselList}/>
        </LandingPageContainer>
    )
}

export default LandingPage;