import { CartProvider } from "./Cart";
import { CategoryFilterProvider } from "./CategoryFilter";
import { SearchShopPorivder } from "./SearchShop";
import { OrderClosedProvider } from "./OrderClosed";
import { LoginProvider } from "./Login";

const Providers = ({ children }) => {
    return (
        <CartProvider>
            <CategoryFilterProvider>
                <SearchShopPorivder>
                    <OrderClosedProvider>
                        <LoginProvider>
                            { children }
                        </LoginProvider>
                    </OrderClosedProvider>
                </SearchShopPorivder>
            </CategoryFilterProvider>
        </CartProvider>
    )
}

export default Providers;