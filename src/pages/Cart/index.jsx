import CartPageContainer from "./style";
import Header from "../../components/Header";
import CartList from "../../components/CartList";
import CartData from "../../components/CartData";
import { TbCurrencyDollar } from 'react-icons/tb';
import { useState } from "react";
import { useCart } from "../../Providers/Cart";

const Cart = () => {
    const [isCouponValid, setIsCouponValid] = useState('');
    const [couponValue, setCouponValue] = useState('');
    const { cart } = useCart();

    const updateCouponValue = evt => {
        setCouponValue(evt.target.value);
    }

    const validateCoupon = evt => {


        if (couponValue === 'RODRIGO_NOSCHANG' && cart.length) {
            setIsCouponValid(true);
        } else {
            setIsCouponValid(false);
        }

        evt.preventDefault();
    }


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
                        <CartData/>

                        <div className = 'cart-discount-container'>
                            <p className = 'cart-discount-ask'> You have any discount coupon?* </p>
                            <form>
                                <p className = 'cart-discount-insert-coupon-container'>
                                    <TbCurrencyDollar />
                                    <input className = 'cart-discount-insert-coupon' 
                                        placeholder = 'Insert your coupon here'
                                        onChange = {updateCouponValue}/>
                                </p>
                                { isCouponValid === false && 
                                    <>
                                        <p className = 'cart-discount-invalid-coupon-message'> 
                                            Either your coupon is invalid or your cart is empty! 
                                        </p>
                                        <p className = 'cart-discount-invalid-coupon-message'> 
                                            Check the hint below or add an item to your cart.
                                        </p>
                                    </>

                                }
                                <button onClick = {validateCoupon} className = 'cart-discount-generate-button'>
                                    <TbCurrencyDollar />
                                    <span className = 'cart-discount-generate-button-discount'> 
                                        Check coupon and generate discount 
                                    </span>
                                </button>
                            </form>
                            <p className = 'cart-discount-hint'>
                                <span className = 'cart-discount-hint-highlight'> *Hint: </span>
                                use the coupon 
                                <span className = 'cart-discount-coupon-value'> RODRIGO_NOSCHANG </span>
                                to get discounts
                            </p>
                        </div>

                        {isCouponValid && cart.length > 0 &&
                            <CartData discount/>
                        }

                    </div>
                </div>
            </div>
        </CartPageContainer>
    )

}

export default Cart;