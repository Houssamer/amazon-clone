import React from 'react';
import './Product.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice'
import { db } from '../firebase';
import { selectUser } from '../features/userSlice';

function Product({id, title, price, rating, image}) {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    function add() {
        dispatch(addToCart({
            id,
            title,
            price,
            rating,
            image
        }));

        db.collection('carts').doc(user?.email).collection('products').add({
            id,
            title,
            price,
            rating,
            image
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <h3>{title}</h3>
                <p>
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="product_image" className="product__image"/>
            <div className="product__rightSide">
                <button className="product__button" onClick={add} disabled={!user}>
                    Add to cart <AddShoppingCartIcon />
                </button>
            </div>
        </div>
    )
}

export default Product
