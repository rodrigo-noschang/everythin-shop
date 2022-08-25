import ShopItemContainer from "./style";

const ShopItem = ({ item }) => {
    
    return (
        <ShopItemContainer>
            <figure className = 'shop-item-figure'>
                <img className = 'shop-item-image' src = {item.thumbnail} alt = {item.description} />
            </figure>

            <div className = 'shop-item-info-container'>
                <h3 className = 'shop-item-name'> {item.title} </h3>
                <p className = 'shop-item-description'> {item.description} </p>
                <p className = 'shop-item-price'> {`US$ ${item.price.toFixed(2)}`} </p>
                <button className = 'shop-item-add-to-cart'> Add to Cart </button>
            </div>
        </ShopItemContainer>
    )

}

export default ShopItem;