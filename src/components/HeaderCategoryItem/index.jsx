import { AiOutlineRight } from 'react-icons/ai'
import HeaderCategoryItemContainer from './style';
import { useState } from 'react';

const HeaderCategoryItem = ({children, subCategories}) => {
    const [isSubcategoriesOpen, setIsSubcategoriesOpen] = useState(false);

    const showSubCategories = () => {
        setIsSubcategoriesOpen(true);
    }

    const hideSubCategories = () => {
        setIsSubcategoriesOpen(false);
    }

    return (
        <HeaderCategoryItemContainer onMouseEnter = {showSubCategories} onMouseLeave = {hideSubCategories}> 
            <span className = 'header-categories-name'> {children} </span>
            <AiOutlineRight className = 'header-categories-sub-categories'/>
            {isSubcategoriesOpen && 
                <ul className = 'header-subcategories-container'>
                    {subCategories.map(subCategory =>
                        <li key = {subCategory} className = 'header-subcategory-item'>
                            {subCategory}
                        </li>
                        )
                    }
                </ul>
            }
        </HeaderCategoryItemContainer>
    )
}

export default HeaderCategoryItem;