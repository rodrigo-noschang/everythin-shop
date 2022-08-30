import CartPageContainer from "./style";
import Header from "../../components/Header";
import CartList from "../../components/CartList";
import CartData from "../../components/CartData";
import { TbCurrencyDollar } from 'react-icons/tb';

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

                        <div className = 'cart-discount-container'>
                            <p className = 'cart-discount-ask'> You have any discount coupon?* </p>
                            <p className = 'cart-discount-insert-coupon-container'>
                                <TbCurrencyDollar />
                                <input className = 'cart-discount-insert-coupon' placeholder = 'Insert your coupon here' />
                            </p>
                            <p className = 'cart-discount-generate-button'>
                                <TbCurrencyDollar />
                                <span className = 'cart-discount-generate-button-discount'> Check coupon and generate discount </span>
                            </p>
                            <p className = 'cart-discount-hint'>
                                <span className = 'cart-discount-hint-highlight'> *Hint: </span>
                                use the coupon 
                                <span className = 'cart-discount-coupon-value'> RODRIGO_NOSCHANG </span>
                                to get discounts
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </CartPageContainer>
    )

}

export default Cart;