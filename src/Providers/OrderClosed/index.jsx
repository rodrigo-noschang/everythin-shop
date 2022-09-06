import { createContext, useContext, useState } from "react";

const OrderClosedContext = createContext();

export const OrderClosedProvider = ({ children }) => {
    const [isOrderClosed, setIsOrderClosed] = useState(false);

    return (
        <OrderClosedContext.Provider value = {{ isOrderClosed, setIsOrderClosed }}>
            {children}
        </OrderClosedContext.Provider>
    )
}

export const useOrderClosed = () => useContext(OrderClosedContext);
