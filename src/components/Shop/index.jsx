import ShopContainer from "./style";
import ShopItem from "../ShopItem";
import { useCategoryFilter } from "../../Providers/CategoryFilter";

const Shop = ({ setAreImagesLoaded, list, fullList }) => {
    const { categoryFilter } = useCategoryFilter();
    const filteredList = fullList.filter(item => item.category === categoryFilter);

    return (
        <ShopContainer className = 'shop-list-container'>
            { list.length > 0 &&
                <ul className = 'shop-list-limiter'>
                    { categoryFilter === '' ? 
                        list.map(item => 
                            <ShopItem setAreImagesLoaded = {setAreImagesLoaded} key = {item.id} item = {item}/>
                        )
                        :
                        filteredList.length > 0 && filteredList.map(item => 
                            <ShopItem setAreImagesLoaded = {setAreImagesLoaded} key = {item.id} item = {item}/>
                        )
                    }
                </ul>
            }
        </ShopContainer>
    )
}

export default Shop;