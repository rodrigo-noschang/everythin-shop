import ShopContainer from "./style";
import ShopItem from "../ShopItem";

const Shop = ({ list }) => {

    return (
        <ShopContainer className = 'shop-list-container'>
            <ul className = 'shop-list-limiter'>
                { list.map(item => 
                    <ShopItem key = {item.id} item = {item}/>
                )}
            </ul>
        </ShopContainer>
    )
}

export default Shop;