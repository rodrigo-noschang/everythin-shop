import DisclaimerContainer from "./style";
import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Disclaimer = () => {
    const [isFunctionalitiesShown, setIsFunctionalitiesShown] = useState(false);

    const showHideFunctionalities = () => {
        setIsFunctionalitiesShown(!isFunctionalitiesShown);
    }

    return (
        <DisclaimerContainer isFunctionalitiesShown = {isFunctionalitiesShown}>
            <h3 className = 'disclaimer-title'> Disclaimer!! </h3>

            <section className = 'disclaimer-info-section-container'>
                <p className = 'disclaimer-info'>
                    The whole point of this project is to practice my React.JS skills,
                    and try to do a user friendly web site. 
                </p>
                <p className = 'disclaimer-info'>
                    There is no professional design or services behind it. I used 
                    <a href = 'https://dummyjson.com/docs/products' 
                        target = '_blank' 
                        rel = 'noreferrer'
                        className = 'disclaimer-info-api-link' >
                        dummyJSON API
                    </a> 
                    to get the products, and generate a token when you log in, and that's
                    pretty much it. 
                </p>
                <p className = 'disclaimer-info'>
                    Since the idea is to test the usability of this website, I will not 
                    tell you before hand what it does and how. However, if you want to
                    test all of it's funcionalities and are not sure how to do it, you
                    can expand the list below to see it through.
                </p>
                <p className = 'disclaimer-info'>
                    Hope you enjoy it, and feel free to give me any feedback you'd like!
                    (my emai, github and linkedin are at the bottom of the page!)
                </p>

                <p className = 'disclaimer-info'>
                    <span className = 'disclaimer-info-ps'> P.S.: </span>
                    You can open this disclaimer again by clicking on "Open Disclaimer..."
                    at the bottom of the page
                </p>
            </section>

            <section className = 'disclaimer-functionalities-container'>
                <div onClick = {showHideFunctionalities} className = 'disclaimer-show-hide-container'>
                    <h3 className = 'disclaimer-functionalities-title'> Functionalities </h3>
                    {isFunctionalitiesShown ? 
                        <AiOutlineUp />    
                    :   
                        <AiOutlineDown />
                    }
                </div>
                { isFunctionalitiesShown &&
                <div className = 'disclaimer-functionalities-show-hide'>
                    <p className = 'disclaimer-functionalities-subtitle'>
                        From top to bottom of the page, you can:
                    </p>
                    <ul className = 'disclaimer-functionalities-list-container'>
                        <li className = 'disclaimer-functionalities-list-item'>
                            Filter all items by category clicking on the "All" button next to
                            the searching input. Those categories are divided in subcategories them selves.
                            Just click on any of them and the products will be filtered. Close the filter by
                            clicking on the "All" button one more time;
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            Filter all items using the search input, the filter will work as you type. This
                            filter will search items by name, categories or description. You don't have to worry
                            about upper or lower case, but be carefull with misspelled words. Click on the 
                            'x' button on the far right of the input to get back to the original view of the items;
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            Go to the Cart Page and see how your cart is looking (I will get to that page later);
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            Still on the page's header, at the far right, login and out on that same spot;
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            On the carousel, check the items that are "on sale". Click on them to see the description,
                            more pictures, rating, price, and add an amount of them to your cart;
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            Under the carousel, check the whole list of products. Just like in the carousel, you can
                            click on "View Product" to see those same details. At the bottom of that list, you can load 
                            some more products;
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            Under the main list of products, you can check some other products, this would be sort of 
                            a "most sold" list, but it's just a random list of items.
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            Under that, my email, github and linkedin =).
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            On the cart page, you will see all of the items you have selected on the left (desktop view), 
                            here you can change the amount of them in the cart, as well as remove them. On the right you 
                            have an overall view of your cart items. 
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            Below that, you car insert a coupon discount, to get a better price on your order. If you insert
                            a valid one, it will show your discounts. 
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            You can also close your order, for that you will have to be loged in, and your cart can't be empty.
                            The website should walk your through that, and give you the directions to close the order. As I said
                            in the login pop-up, the API I used does not allow for account creation, so I just left an already
                            existing username and password for the login;
                        </li>
                        <li className = 'disclaimer-functionalities-list-item'>
                            Once you close your existing order, you can no longer change the items on your cart. You can start
                            a new shopping cart by opening a new order, for wich you will also have to be logged in.
                        </li>
                    </ul>
                </div> 
                }            
            </section>
        </DisclaimerContainer>
    )
}

export default Disclaimer;