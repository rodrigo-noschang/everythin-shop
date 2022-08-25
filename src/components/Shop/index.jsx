import ShopContainer from "./style";
import ShopItem from "../ShopItem";

const Shop = ({ list }) => {

    console.log(list);

    return (
        <ShopContainer className = 'shop-list-container'>
            <ul className = 'shop-list-limiter'>
                { list.map(item => 
                    <ShopItem item = {item}/>
                )}
            </ul>
        </ShopContainer>
    )
}

export default Shop;