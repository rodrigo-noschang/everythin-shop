import { useCart } from '../../Providers/Cart';
import CartListContainer from './style';
import CartListItem from '../CartListItem';

const CartList = () => {
    const { cart } = useCart();

    return (
        <CartListContainer>
            { cart.length !== 0 ?
                <ul className = 'cart-list-container'>
                    { 
                        cart.map(cartItem => 
                            <CartListItem cartItem = {cartItem}/>
                        )
                    }
                </ul> : 
                <p className = 'cart-list-empty-cart-message'> 
                    Your cart is empty. 
                </p>
            }
        </CartListContainer>
    )

}

export default CartList