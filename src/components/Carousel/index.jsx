import CarouselContainer from "./style";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const Carousel = ({ carouselList }) => {

    return (
        <CarouselContainer>
            <div className = 'carousel-window'>
                <ul className = 'carousel-list-container'>
                    <li className = 'carouse-item-container'>
                        <figure className = 'carousel-item-figure'>
                            <img src={carouselList[0].thumbnail} 
                                alt = {carouselList[0].description} 
                                className = 'carousel-item-image'/>
                        </figure>

                        <div className = 'carousel-item-infos-container'>
                            <div className = 'carousel-item-was-price-container'> 
                                <div className = 'carousel-item-was'> WAS </div>
                                <div className = 'carousel-item-was-price'> US$ 549.00 </div>
                            </div>
                            <div className = 'carousel-item-now-price-container'> 
                                <div className = 'carousel-item-now'> NOW </div>
                                <div className = 'carousel-item-now-price'> US$ 480.00 </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <span className = 'carousel-scroll carousel-scroll-left'>
                <AiOutlineLeft />     
            </span>
            <span className = 'carousel-scroll carousel-scroll-right'>
                <AiOutlineRight />     
            </span>
        </CarouselContainer>
    )
}

export default Carousel;