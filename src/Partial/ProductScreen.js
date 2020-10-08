import React from 'react';
import data from '../data'
import { Link } from 'react-router-dom';

function ProductScreen(props){
    console.log(props.match.params.id)
    const product = data.products.find(x=> x._id=== props.match.params.id);

    return <div>
        <div className="back-to-result">
            <Link to="/"><b>Back to menu</b></Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4> {product.name}</h4>
                    </li>
                    <li>
                        Price: <b>AUD {product.price}</b>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: AUD {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                    <Link to={'/cart/' + product._id}><button className="crt_button">Add to Cart</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

export default ProductScreen;