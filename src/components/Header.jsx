import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import "bootstrap/dist/css/bootstrap.css";

import logo from "./images/logo2.png";
const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-white'>
        <img className='logo' src={logo} alt='i' />

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item pr-5'>
              <label htmlFor='inputAge'>Username</label>
            </li>
            <li className='nav-item pr-5'>
              <label htmlFor='inputAge'>Login Type</label>
            </li>
            <div className='submitbtn'>
              <Link
                to='/'
                className='btn btn-primary'
                style={{ width: "100%" }}>
                Logout
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
