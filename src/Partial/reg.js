import React from 'react';
import { Link } from 'react-router-dom';

function Reg(){
    return <div className="form">
    <form>
      <ul className="form-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name">
          </input>
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
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword">
          </input>
        </li>
        <li>
          <button type="submit" className="ckout_button">Register</button>
        </li>
        <li>
          Already have an account?
          <Link to={'/signin/'}><button className="otherButton">Sign in</button></Link>

        </li>

      </ul>
    </form>
  </div>
}

export default Reg;