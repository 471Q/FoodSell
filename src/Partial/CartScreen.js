import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data'

function CartScreen(props){
    const product = data.products.find(x=> x._id=== props.match.params.id);
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;

    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price
                    </div>
                </li>
                <li>
                    <div className="cart-image">
                        <img src={product.image} alt="product"></img>
                    </div>
                    <div className="cart-name">
                        <div>
                            <Link to={'/product/' + product._id}>
                                {product.name}
                            </Link>
                        </div>
                        <div>
                            Qty:
                            <select value={qty}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="cart-price">
                        AUD: {product.price}
                    </div>
                </li>
            </ul>
        </div>
        <div className="cart-action">
            <h3>
                Subtotal: AUD {product.price}
            </h3>
            <Link to={'/checkout/' + product._id}><button className="ckout_button">Proceed to Checkout</button></Link>
        </div>
    </div>
}

export default CartScreen;
