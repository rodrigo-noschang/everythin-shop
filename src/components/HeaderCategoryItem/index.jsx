import { AiOutlineRight } from 'react-icons/ai'
import HeaderCategoryItemContainer from './style';
import { useState } from 'react';
import { useCategoryFilter } from '../../Providers/CategoryFilter';
import { useSearchShop } from '../../Providers/SearchShop';

const HeaderCategoryItem = ({children, subCategories}) => {
    const [isSubcategoriesOpen, setIsSubcategoriesOpen] = useState(false);
    const { setCategoryFilter } = useCategoryFilter();
    const { setSearchInput } = useSearchShop();

    const showCategory = evt => {
        let selectedCategory = evt.target.innerText;
        if (selectedCategory === 'normal-shop') selectedCategory = '';
        setCategoryFilter(selectedCategory);
        setSearchInput('');
    }

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
                        <li onClick = {showCategory} key = {subCategory} className = 'header-subcategory-item'>
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