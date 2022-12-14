import CartPageContainer from "./style";
import Header from "../../components/Header";
import CartList from "../../components/CartList";
import CartData from "../../components/CartData";
import { TbCurrencyDollar } from 'react-icons/tb';
import { useState } from "react";
import { useCart } from "../../Providers/Cart";
import Modal from '../../components/Modal';
import LoginWindow from "../../components/LoginWindow";
import { useOrderClosed } from '../../Providers/OrderClosed'
import { toast } from "react-toastify";
import { useLogin } from "../../Providers/Login";

const Cart = () => {
    const [isCouponValid, setIsCouponValid] = useState('');
    const [couponValue, setCouponValue] = useState('');
    const [loginModal, setLoginModal] = useState(false);
    const [emptyCart, setEmptyCart] = useState(false);
    const [command, setCommand] = useState('');
    const { isLoggedIn } = useLogin();
    const { isOrderClosed, setIsOrderClosed } = useOrderClosed();
    const { cart, resetCart } = useCart();

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

    const closeOrder = () => {
        if (!isLoggedIn) {
            setCommand('close-order')
            setLoginModal(true);
        } else {
            if (cart.length > 0) {
                setIsOrderClosed(true);
                toast.success('Your order was successfully closed', {
                    position: 'top-left'
                });
            } else {
                setEmptyCart(true);
            }
        }
    }

    const enableShopping = () => {
        if (isLoggedIn) {
            resetCart();
            setIsOrderClosed(false);
        } else {
            setCommand('new-order');
            setLoginModal(true);
        }
    }

    return (
        <CartPageContainer>
            <Header page = 'cart'/>
            <div className = 'cart-content-limiter'>
                <header className = 'cart-section-header'>
                    <h2 className = 'cart-section-title'> Shopping Cart </h2>
                    <div>
                        {isOrderClosed ?
                            <div className = 'cart-section-order-status-container'> 
                                <button onClick = {enableShopping} className = 'cart-section-open-new-order'> Open New Order </button>
                                <button disabled className = 'cart-section-order-closed-button'> Order Closed </button>
                            </div>
                            :
                            <button onClick = {closeOrder} className = 'cart-section-close-order cart-section-close-order-top'> Close Order </button>    
                        }
                        { emptyCart && 
                            <p className = 'cart-section-close-order-empty-cart'> Add an item to your cart, so that you can close your order. </p>
                        }
                    </div>
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

                        {isOrderClosed ? 
                            <button disabled className = 'cart-section-order-closed-button'> Order Closed </button>
                            :
                            <button onClick = {closeOrder} className = 'cart-section-close-order cart-section-close-order-bottom'> Close Order </button>
                        }
                        { emptyCart && 
                            <p className = 'cart-section-close-order-empty-cart'> Add an item to your cart, so that you can close your order. </p>
                        }

                    </div>
                </div>
            </div>
            { loginModal && 
            <Modal setIsModalOpen = {setLoginModal}>
                <LoginWindow setIsModalOpen = {setLoginModal} command = {command} resetCart = {resetCart} setIsOrderClosed = {setIsOrderClosed}/>
            </Modal>
            }
        </CartPageContainer>
    )

}

export default Cart;