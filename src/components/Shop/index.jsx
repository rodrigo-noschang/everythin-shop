import ShopContainer from "./style";
import ShopItem from "../ShopItem";
import { useCategoryFilter } from "../../Providers/CategoryFilter";
import { useSearchShop } from "../../Providers/SearchShop";

const Shop = ({ setAreImagesLoaded, list, fullList }) => {
    const { categoryFilter } = useCategoryFilter();
    const { searchInput } = useSearchShop();
    const filteredList = categoryFilter !== '' && searchInput === '' ? 
        fullList.filter(item => item.category === categoryFilter)
        : 
        categoryFilter === '' && searchInput !== '' ?
            fullList.filter(item => { return (
                item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.description.toLowerCase().includes(searchInput.toLowerCase()) ||
                item.category.toLowerCase().includes(searchInput.toLowerCase())
            )})
        :
        [];

        console.log(filteredList);

    return (
        <ShopContainer className = 'shop-list-container'>
            { list.length > 0 &&
                <ul className = 'shop-list-limiter'>
                    { categoryFilter === '' && searchInput === '' ? 
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