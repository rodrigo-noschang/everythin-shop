import CarouselItemContainer from "./style";


const CarouselItem = ({ item, setCarouselItemSelected, setIsCarouselItemSelected }) => {
    const selectCarouselItem = () => {
        setIsCarouselItemSelected(true);
        setCarouselItemSelected(item);
    }
    
    return (
        <CarouselItemContainer onClick = {selectCarouselItem} className = 'carouse-item-container'>
            <figure className = 'carousel-item-figure'>
                <img src={item.thumbnail} 
                    alt = {item.description} 
                    className = 'carousel-item-image'/>

                <div className = 'carousel-item-infos-container'>
                    <div className = 'carousel-item-was-price-container'> 
                        <div className = 'carousel-item-was'> WAS </div>
                        <div className = 'carousel-item-was-price'> US$ {item.price.toFixed(2)} </div>
                    </div>
                    <div className = 'carousel-item-now-price-container'> 
                        <div className = 'carousel-item-now'> NOW </div>
                        <div className = 'carousel-item-now-price'> US$ {(item.price * (1 - item.discountPercentage/100)).toFixed(2)} </div>
                    </div>
                </div>
            </figure>
        </CarouselItemContainer>
    )
}

export default CarouselItem;