import CartPageContainer from "./style";
import Header from "../../components/Header";
import CartList from "../../components/CartList";
import CartData from "../../components/CartData";

const Cart = () => {

    return (
        <CartPageContainer>
            <Header page = 'cart'/>
            <div className = 'cart-content-limiter'>
                <header className = 'cart-section-header'>
                    <h2 className = 'cart-section-title'> Shopping Cart </h2>
                    <button className = 'cart-section-close-order'> Close Order </button>    
                </header>

                <div className = 'cart-list-and-data-container'>
                    <CartList />
                    <div className = 'cart-data-container'>
                        <CartData />
                    </div>
                </div>
            </div>
        </CartPageContainer>
    )

}

export default Cart;