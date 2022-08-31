import ShopContainer from "./style";
import ShopItem from "../ShopItem";

const Shop = ({ setAreImagesLoaded, list }) => {

    return (
        <ShopContainer className = 'shop-list-container'>
            { list.length > 0 &&
                <ul className = 'shop-list-limiter'>
                    { list.map(item => 
                        <ShopItem setAreImagesLoaded = {setAreImagesLoaded} key = {item.id} item = {item}/>
                    )}
                </ul>
            }
        </ShopContainer>
    )
}

export default Shop;