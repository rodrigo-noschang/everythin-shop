import { CartProvider } from "./Cart";

const Providers = ({ children }) => {
    return (
        <CartProvider>
            { children }
        </CartProvider>
    )
}

export default Providers;