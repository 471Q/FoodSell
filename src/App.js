import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Partial/HomeScreen';
import ProductScreen from './Partial/ProductScreen';
import CartScreen from './Partial/CartScreen';
import Checkout from './Partial/Checkout';
import SignInScreen from './Partial/SignIn';
import RegistrationScreen from './Partial/reg';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
  <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">FoodSell</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart  </a>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>

        <aside className="sidebar">
            <h3>Menu</h3>
            <button className="close-Btn" onClick={closeMenu}>X</button>
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="index.html">Search</a>
                </li>
                <li>
                    <a href="index.html">Cart</a>
                </li>
            </ul>
            <h3>Available Restaurents</h3>
            <ul>
                <li>
                    <a href="index.html">Hungry Jacks</a>
                </li>
                <li>
                    <a href="index.html">MacDonalds</a>
                </li>
                <li>
                    <a href="index.html">KFC</a>
                </li>
            </ul>
        </aside>

        <main className="main">
           <div className="content">
             <Route path="/product/:id" component={ProductScreen}/>
             <Route path="/cart/:id?" component={CartScreen}/>
             <Route path="/checkout/:id?" component={Checkout}/>
             <Route path="/" exact={true} component={HomeScreen}/>
             <Route path="/signin/"  exact={true} component={SignInScreen}/>
             <Route path="/reg/" exact={true} component={RegistrationScreen}/>
           </div>
        </main>
        <footer className="footer">
            All rights reserved
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
