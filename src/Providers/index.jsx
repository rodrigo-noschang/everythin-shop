import { CartProvider } from "./Cart";
import { CategoryFilterProvider } from "./CategoryFilter";

const Providers = ({ children }) => {
    return (
        <CartProvider>
            <CategoryFilterProvider>
                { children }
            </CategoryFilterProvider>
        </CartProvider>
    )
}

export default Providers;