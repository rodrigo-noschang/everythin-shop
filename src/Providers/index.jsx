import { CartProvider } from "./Cart";
import { CategoryFilterProvider } from "./CategoryFilter";
import { SearchShopPorivder } from "./SearchShop";
import { OrderClosedProvider } from "./OrderClosed";

const Providers = ({ children }) => {
    return (
        <CartProvider>
            <CategoryFilterProvider>
                <SearchShopPorivder>
                    <OrderClosedProvider>
                        { children }
                    </OrderClosedProvider>
                </SearchShopPorivder>
            </CategoryFilterProvider>
        </CartProvider>
    )
}

export default Providers;