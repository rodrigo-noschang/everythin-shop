import Header from "../../components/Header";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "../../components/CarouselItem";
import Shop from "../../components/Shop";
import BottomList from "../../components/BottomList";
import Footer from "../../components/Footer";
import LandingPageContainer from "./style";
import Modal from "../../components/Modal";
import ModalItem from "../../components/ModalItem";
import api from '../../services/api';
import { useEffect, useState } from "react";
import { useCategoryFilter } from "../../Providers/CategoryFilter";
import { useSearchShop } from "../../Providers/SearchShop";

const LandingPage = () => {
    const [shopList, setShopList] = useState(
        JSON.parse(localStorage.getItem('everythin-shop:list')) || []
    );
    const [apiSkipCounter, setApiSkipCounter] = useState(1)
    const [areImagesLoaded, setAreImagesLoaded] = useState(false);
    const [carouselItemSelected, setCarouselItemSelected] = useState({});
    const [isCarouselItemSelected, setIsCarouselItemSelected] = useState(false);
    const { categoryFilter } = useCategoryFilter();
    const { searchInput } = useSearchShop();

    useEffect(() => {
        if (shopList.length === 0) {
            console.log('Chamou');
            api.get('/products?skip=0&limit=100')
            .then (res => {
                const newList = res.data.products;
                setShopList(newList);
                localStorage.setItem('everythin-shop:list', JSON.stringify(newList));
            });
        }
    }, [])

    const loadMoreProducts = () => {
        setApiSkipCounter(apiSkipCounter + 1);
    }

    // I'm using "areImagesLoaded" to wait some images from the shop list
    // to load and then I load the rest of the page
    
    return ( 
        <LandingPageContainer className = 'page-container'>
            <Header page = 'shop'/>
            { areImagesLoaded &&
                <Carousel className = 'carousel-container'>
                    { 
                        shopList.slice(0, 5).map((item, i) => {
                            return <CarouselItem key = {i} item = {item} setCarouselItemSelected = {setCarouselItemSelected} setIsCarouselItemSelected = {setIsCarouselItemSelected}/>
                        }) 
                    }
                </Carousel>
            }
            <Shop 
                setAreImagesLoaded = {setAreImagesLoaded} 
                list = {
                    30 * apiSkipCounter < 100 ?
                        shopList.slice(14, 30 * apiSkipCounter)
                    :
                        shopList.slice(14, 100)
                } 
                fullList = { shopList.slice(0, 100) }/>
            { apiSkipCounter < 4 && areImagesLoaded && categoryFilter === ''  && searchInput === '' &&
                <p onClick = {loadMoreProducts} className = 'landing-page-load-more'> Load More Products </p>
            }
            { areImagesLoaded &&
                <>
                    <BottomList bottomList = {shopList.slice(5, 14)} />
                    <Footer />
                </>
            }
            {isCarouselItemSelected && 
                <Modal setIsModalOpen = {setIsCarouselItemSelected}>
                    <ModalItem setIsModalOpen = {setIsCarouselItemSelected} item = {carouselItemSelected}/>
                </Modal>
            }
        </LandingPageContainer>
    )
}

export default LandingPage;