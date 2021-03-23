import React from 'react';
import './CheckedOutProduct.css';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

function CheckedOutProduct({id, title, price, rating, image}) {
    const dispatch = useDispatch();

    function remove(id) {
        dispatch(removeFromCart(id));
    }
    return (
        <div className='productCheck'>
            <hr/>
            <div className="product__leftSide">
                <img src={image} alt="product__img" className="product__img"/>
            </div>
            <div className="product__middle">
                <h4>{title}</h4>
                <p>
                    <small>$</small> <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <div className="product__rightSide">
                    <button className="product__remove" onClick={() => remove(id)}>
                        Remove from cart
                        <RemoveShoppingCartIcon />
                    </button>
                </div>
            <hr/>
        </div>
    )
}

export default CheckedOutProduct;
