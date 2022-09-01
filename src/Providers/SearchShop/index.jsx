import { createContext, useContext, useState } from "react";

const SearchShopContext = createContext();

export const SearchShopPorivder = ({ children }) => {
    const [searchInput, setSearchInput] = useState('');
    const [startSearch, setStartSearch] = useState(false)

    return(
        <SearchShopContext.Provider value = {{searchInput, setSearchInput, startSearch, setStartSearch}}>
            {children}
        </SearchShopContext.Provider>
    )
}

export const useSearchShop = () => useContext(SearchShopContext);