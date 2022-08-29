import CartPageContainer from "./style";
import Header from "../../components/Header";
import CartList from "../../components/CartList";

const Cart = () => {

    return (
        <CartPageContainer>
            <Header />
            <div className = 'cart-content-limiter'>
                <header className = 'cart-section-header'>
                    <h2 className = 'cart-section-title'> Shopping Cart </h2>
                    <button className = 'cart-section-close-order'> Close Order </button>    
                </header>

                <div className = 'cart-list-and-data-container'>
                    <CartList />
                </div>
            </div>
        </CartPageContainer>
    )

}

export default Cart;