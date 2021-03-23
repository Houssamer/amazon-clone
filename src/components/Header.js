import React from 'react';
import './Header.css';
import logo from '../logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../features/cartSlice';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Header() {
    const history = useHistory();
    const Cart = useSelector(selectCart);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <div className="header">
            <div className="header__leftSide">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="header__logo" 
                    onClick={() => history.push("/")}
                />
            </div>
            <div className="header__middle">
                <input type="text" className="headder__input" placeholder="Search"/>
                <SearchIcon className="header__searchButton" />
            </div>
            <div className="header__rightSide">
                <p>
                    <span className="header__rightSide__lineOne">Hello</span>
                    <span 
                        className="header__rightSide__lineTwo"
                        onClick={() => user ? auth.signOut().then(dispatch(logout())) : history.push("/login")}
                    >
                            {user ? "Sign Out" : "Sign In"}
                    </span>
                </p>
                <p>
                    <span className="header__rightSide__lineOne">Returns</span>
                    <span className="header__rightSide__lineTwo">& Orders</span>
                </p>
                <div className="header__cart">
                    <ShoppingCartIcon onClick={() => history.push('/checkout')} />
                    <span>{Cart.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Header
