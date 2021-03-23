import React from 'react';
import './Checkout.css';
import Header from './Header';
import banner from '../ad.png';
import CheckedOutProduct from './CheckedOutProduct';
import { useHistory } from 'react-router';
import cart from '../cart.svg';
import { useSelector } from 'react-redux';
import { selectCart } from '../features/cartSlice';
import { selectUser } from '../features/userSlice';

function Checkout() {
    const history = useHistory();
    const Cart = useSelector(selectCart);
    const user = useSelector(selectUser);
    return (
        <div className="checkout">
             <Header />

                {user ? (
                <div className="checkout__body">
                <div className="checkout__content">
                    <img src={banner} alt="banner" className="checkout__banner"/>
                        {Cart.length ? (
                        <>
                        <h2>Your cart</h2>
                        <div className="checkout__items">
                        {Cart?.map(item => (
                            <CheckedOutProduct
                                key={item.id}
                                id={item.id} 
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                    </>
                    ) : (
                        <>
                        <h2>Your cart is empty</h2>
                        <p>your cart is empty, buy one or more products
                            <span className="clickHere" onClick={() => history.push("/")}> here</span>
                        </p>
                        </>
                    )}
             </div>
             <div className="checkout__info">
                    <h4>total items : {Cart.length}</h4>
                    <p>Total price : 
                        <small> $</small> 
                        <strong> {Cart.reduce(((amount, item) => amount + item.price), 0)}</strong>
                    </p>
                    <button className="checkout__button">Checkout</button>
             </div>
             </div>
                ) : (
                    <div className="checkout__noUser">
                        <img src={cart} alt="banner" className="checkout__emptyCart"/>
                        <div className="checkout__rightSide">
                            <h2>You are not signed in</h2>
                            <div className="checkout__buttons">
                                <button 
                                    className="checkout__button__signIn"
                                    onClick={() => history.push("/login")}
                                >
                                    Sign in to your account
                                </button>
                                <button 
                                    className="checkout__button__signUp"
                                    onClick={() => history.push("/login")}
                                >
                                    Sign up now
                                </button>
                            </div>
                        </div>
                    </div>
                )}

        </div>
    )
}

export default Checkout;
