import CarouselItem from "../CarouselItem";
import CarouselContainer from "./style";
// import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const Carousel = ({ carouselList }) => {

    return (
        <CarouselContainer>
            <div className = 'carousel-window'>
                <ul className = 'carousel-list-container'>
                    {carouselList.length && 
                        carouselList.map(carouselItem => 
                            <CarouselItem key = {carouselItem.id} item = {carouselItem}/>
                        )
                    }
                </ul>
            </div>

            {/* <span className = 'carousel-scroll carousel-scroll-left'>
                <AiOutlineLeft />     
            </span>
            <span className = 'carousel-scroll carousel-scroll-right'>
                <AiOutlineRight />     
            </span> */}
        </CarouselContainer>
    )
}

export default Carousel;