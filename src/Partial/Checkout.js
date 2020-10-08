import React from 'react';
import data from '../data'

function Checkout(props){
    const product = data.products.find(x=> x._id=== props.match.params.id);
    
    return <div className="row">
        <div className="col-75">
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-50">
                            <h3>Billing Address</h3>
                            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                            <label for="email"><i class="fa fa-envelope"></i> Email</label>
                            <input type="text" id="email" name="email" placeholder="john@example.com"></input>
                            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
                            <label for="city"><i class="fa fa-institution"></i> City</label>
                            <input type="text" id="city" name="city" placeholder="New York"></input>

                            <div class="row">
                                <div class="col-50">
                                    <label for="state">State</label>
                                    <input type="text" id="state" name="state" placeholder="NY"></input>
                                </div>
                                <div class="col-50">
                                    <label for="zip">Zip</label>
                                    <input type="text" id="zip" name="zip" placeholder="10001"></input>
                                </div>
                            </div>
                        </div>

                        <div className="col-50">
                            <h3>Payment</h3>
                            <label for="fname">Accepted Cards</label>
                            <div className="icon-container">
                            <i className="fa fa-cc-visa" ></i>
                            <i className="fa fa-cc-amex"></i>
                            <i className="fa fa-cc-mastercard" ></i>
                            <i className="fa fa-cc-discover"></i>
                            </div>
                            <label for="cname">Name on Card</label>
                            <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                            <label for="ccnum">Credit card number</label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                            <label for="expmonth">Exp Month</label>
                            <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
                            <div className="row">
                            <div className="col-50">
                                <label for="expyear">Exp Year</label>
                                <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                            </div>
                            <div className="col-50">
                                <label for="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" placeholder="352"></input>
                            </div>
                            </div>
                        </div>
                    </div>
                    <label>
                        <input id ="checkbox_id" type="checkbox"/><span>Shipping address same as billing</span>
                    </label>
                    <input type="submit" value="Confirm" class="btn"></input>
                </form>
            </div>
        </div>
        <div class="col-25">
            <div class="container">
                <h4>Cart <span class="price"><i class="fa fa-shopping-cart"></i> <b>1</b></span></h4>
                <p>{product.name} <span class="price">AUD {product.price}</span></p>
                <hr/>
                <p>Total <span class="price"><b>AUD {product.price}</b></span></p>
            </div>
        </div>
    </div>
}

export default Checkout;