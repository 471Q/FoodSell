import React from 'react';
import { Link } from 'react-router-dom';

function SignIn(props){
    return <div className="form">
    <form>
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email">
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password">
          </input>
        </li>
        <li>
        <Link to={'/'}><button type="submit" className="ckout_button">Sign in</button></Link>
        </li>
        <li>
          New to FoodSell?
        </li>
        <li>
            <Link to={'/reg/'}><button className="otherButton" >Create a new account</button></Link>
        </li>
      </ul>
    </form>
  </div>
}

export default SignIn;