import HeaderContainer from "./style";
import { 
    AiOutlineDown, 
    AiOutlineSearch,
    AiOutlineShoppingCart,
    AiFillShopping }  from 'react-icons/ai';
import { useState } from "react";
import HeaderCategoryItem from "../HeaderCategoryItem";
import { useNavigate } from "react-router-dom";
import { useCategoryFilter } from "../../Providers/CategoryFilter";

const Header = ({ page }) => {
    const [headerCategoriesOpen, setHeaderCategoriesOpen] = useState(false);
    const navigate = useNavigate();
    const { setCategoryFilter } = useCategoryFilter();

    const changeModalStatus = () => {
        setHeaderCategoriesOpen(!headerCategoriesOpen);
    }

    const subCategories = {
        initial: ['normal-shop'],
        womensClothing: ['womens-dresses', 'womens-shoes'],
        mensClothing: ['mens-shirts', 'mens-shoes'],
        accessories: ['mens-watches', 'sunglasses', 'womens-watches', 'womens-bags', 'womens-jewellery', 'skincare', 'fragrances'],
        interiorDesign: ['home-decoration', 'furniture', 'lighting'],
        tech: ['smartphones', 'laptops']
    }

    const goToCartPage = () => {
        navigate('/cart');
    }
    
    const goToShopPage = () => {
        setCategoryFilter('');
        navigate('/');
    }

    return (
        <HeaderContainer>
            <h1 onClick = {goToShopPage} className = 'header-title'> Everythin' Shop </h1>

            <div className = 'header-input-container'>
                <div onClick = {changeModalStatus} className = 'header-search-filter'>
                    <span className = 'header-search-filter-selected'> All </span>
                    <span className = 'header-search-filter-arrow'> <AiOutlineDown /> </span>
                </div>
                <input className = 'header-search-input' placeholder = 'Your search here'/>
                <button className = 'header-search-search'> <AiOutlineSearch /> </button>

                {headerCategoriesOpen && 
                    <ul className = 'header-categories-container'>
                        <HeaderCategoryItem key = {'key-1'} subCategories = {subCategories.initial}> Initial Shop </HeaderCategoryItem>
                        <HeaderCategoryItem key = {'key-2'} subCategories = {subCategories.womensClothing}> Women's Clothing </HeaderCategoryItem>
                        <HeaderCategoryItem key = {'key-3'} subCategories = {subCategories.mensClothing}> Men's Clothing </HeaderCategoryItem>
                        <HeaderCategoryItem key = {'key-4'} subCategories = {subCategories.accessories}> Accessories </HeaderCategoryItem>
                        <HeaderCategoryItem key = {'key-5'} subCategories = {subCategories.interiorDesign}> Interior Design </HeaderCategoryItem>
                        <HeaderCategoryItem key = {'key-6'} subCategories = {subCategories.tech}> Tech </HeaderCategoryItem>
                    </ul>
                }
            </div>

            {page === 'shop' ?
                <div onClick = { goToCartPage } className = 'header-go-to-cart-container'>
                    <span className = 'header-go-to-cart-cart'> <AiOutlineShoppingCart /> </span>
                    <span className = 'header-go-to-cart-name'> Cart </span>
                </div>
                :
                <div onClick = { goToShopPage } className = 'header-go-to-shop-container'>
                    <span className = 'header-go-to-shop-shop'> <AiFillShopping /> </span>
                    <span className = 'header-go-to-shop-name'> Back to Shop </span>
                </div>
            }
        </HeaderContainer>
    )
}

export default Header;