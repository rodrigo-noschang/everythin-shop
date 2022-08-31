import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Shop from "../../components/Shop";
import BottomList from "../../components/BottomList";
import Footer from "../../components/Footer";
import LandingPageContainer from "./style";
import api from '../../services/api';
import { useEffect, useState } from "react";

const LandingPage = () => {
    const [shopList, setShopList] = useState([]);
    const [apiSkipCounter, setApiSkipCounter] = useState(1)
    const [areImagesLoaded, setAreImagesLoaded] = useState(false);

    useEffect(() => {
        api.get('/products')
        .then (res => {
            const newList = res.data.products;
            setShopList(newList);
        });
    }, [])

    const loadMoreProducts = () => {
        api.get(`/products?skip=${apiSkipCounter * 30}&limit=30`)
            .then(res => {
                setShopList([...shopList, ...res.data.products]);
        });
        setApiSkipCounter(apiSkipCounter + 1);
    }

    // I'm using "areImagesLoaded" to wait some images from the shop list
    // to load and then I load the rest of the page
    
    return ( 
        <LandingPageContainer className = 'page-container'>
            <Header page = 'shop'/>
            { areImagesLoaded &&
                <Carousel carouselList = {shopList.slice(0, 5)} />
            }
            <Shop setAreImagesLoaded = {setAreImagesLoaded} list = { shopList.slice(14, shopList.length)} />
            { apiSkipCounter < 4 && areImagesLoaded &&
                <p onClick = {loadMoreProducts} className = 'landing-page-load-more'> Load More Products </p>
            }
            { areImagesLoaded &&
                <>
                    <BottomList bottomList = {shopList.slice(5, 14)} />
                    <Footer />
                </>
            }
        </LandingPageContainer>
    )
}

export default LandingPage;