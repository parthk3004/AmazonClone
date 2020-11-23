import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }

    return (
         <nav className="header"> 
            {/*logo on left */}
            <Link to="/">
            <img
            className="header__logo"
            src= "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt=""
            />
            </Link>

            {/*Search box */}
            <div className="header__search">           
                 <input type="text" className="header__searchInput" />
                 <SearchIcon className="header__searchIcon" />
            </div>
                <div className ="header__nav">
                {/*1st links */}
                <Link to = {!user && '/login'} className="header__link">
                    <div /*onClick={handleAuthenticaton} */ className="header__option">
                <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>            

                {/*2nd links */}
                
                <Link to ="/orders" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Return</span>
                <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>

                {/*3rd links */}  
                <Link to ="/" className="header__link">
                    <div className="header__option">
                <span className="header__optionLineOne">Yours</span>
                <span className="header__optionLineTwo">Price</span>
                </div>
                </Link>           
</div>
            {/* basket icon with number */}       
            <Link to="/checkout" className="header__link">
                <div className ="header__optionBasket">
                {/* shopping basket icon */}
                <ShoppingBasketIcon />                
                {/*number of items in basket */}
    <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                </div>
                </Link>                   
        </nav>
    );
}

export default Header
