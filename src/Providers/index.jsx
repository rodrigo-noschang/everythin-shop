import { CartProvider } from "./Cart";
import { CategoryFilterProvider } from "./CategoryFilter";
import { SearchShopPorivder } from "./SearchShop";

const Providers = ({ children }) => {
    return (
        <CartProvider>
            <CategoryFilterProvider>
                <SearchShopPorivder>
                    { children }
                </SearchShopPorivder>
            </CategoryFilterProvider>
        </CartProvider>
    )
}

export default Providers;