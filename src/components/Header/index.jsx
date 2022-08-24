import HeaderContainer from "./style";
import { 
    AiOutlineDown, 
    AiOutlineSearch,
    AiOutlineShoppingCart}  from 'react-icons/ai';
import { useState } from "react";
import HeaderCategoryItem from "../HeaderCategoryItem";

const Header = () => {
    const [headerCategoriesOpen, setHeaderCategoriesOpen] = useState(false);

    const changeModalStatus = () => {
        setHeaderCategoriesOpen(!headerCategoriesOpen);
    }

    const subCategories = {
        womensClothing: ['women-dresses', 'women-shoe'],
        mensClothing: ['men-shirt', 'men-shoe'],
        accessories: ['men-watches', 'sunglasses', 'womens-watches', 'womens-bags', 'jewellry', 'skin care', 'fragrances'],
        interiorDesign: ['home-decoration', 'furniture', 'lighting'],
        tech: ['smartphone', 'laptop']
    }

    return (
        <HeaderContainer>
            <h1 className = 'header-title'> Everythin' Shop </h1>

            <div className = 'header-input-container'>
                <div onClick = {changeModalStatus} className = 'header-search-filter'>
                    <span className = 'header-search-filter-selected'> All </span>
                    <span className = 'header-search-filter-arrow'> <AiOutlineDown /> </span>
                </div>
                <input className = 'header-search-input' placeholder = 'Your search here'/>
                <button className = 'header-search-search'> <AiOutlineSearch /> </button>

                {headerCategoriesOpen && 
                    <ul className = 'header-categories-container'>
                        <HeaderCategoryItem key = {'key-1'} subCategories = {subCategories.womensClothing}> Women's Clothing </HeaderCategoryItem>
                        <HeaderCategoryItem key = {'key-2'} subCategories = {subCategories.mensClothing}> Men's Clothing </HeaderCategoryItem>
                        <HeaderCategoryItem key = {'key-3'} subCategories = {subCategories.accessories}> Accessories </HeaderCategoryItem>
                        <HeaderCategoryItem key = {'key-4'} subCategories = {subCategories.interiorDesign}> Interior Design </HeaderCategoryItem>
                        <HeaderCategoryItem key = {'key-5'} subCategories = {subCategories.tech}> Tech </HeaderCategoryItem>
                    </ul>
                }
            </div>

            <div className = 'header-go-to-cart-container'>
                <span className = 'header-go-to-cart-cart'> <AiOutlineShoppingCart /> </span>
                <span className = 'header-go-to-cart-name'> Cart </span>
            </div>
        </HeaderContainer>
    )
}

export default Header;