import { createContext, useContext, useState } from "react";

const CategoryFilterContext = createContext();

export const CategoryFilterProvider = ({ children }) => {
    const [categoryFilter, setCategoryFilter] = useState('');

    return (
        <CategoryFilterContext.Provider value={{categoryFilter, setCategoryFilter}}>
            {children}
        </CategoryFilterContext.Provider>
    )
}

export const useCategoryFilter = () => useContext(CategoryFilterContext);

