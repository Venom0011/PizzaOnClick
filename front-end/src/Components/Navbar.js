import React, { useState } from 'react';
import { Container } from 'reactstrap';
import Logo from '../assests/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../style/Navbar.css';

function sample(){
  <div className="row my-3" style={{width:'80%',margin:'auto'}}>
  <div className="nav__wrapper d-flex align-items-center justify-content-between">
    {/* Left Icons */}
    <div className="col-md-3">
      <div className="logo">
        <img src={Logo} alt="Logo not found" className='logo-img' />
        <h5 style={{marginLeft:'10'}}>PizzaOnClick</h5>
      </div>
    </div>
{/* continue from 25min */}
    {/* Middle Icons */}
    <div className="col-md-6">
      <div className="navbar justify-content-center">
        <div className="menu">
          <ul className="list-unstyled d-flex align-items-center gap-3">
            <li>
              <NavLink className="nav-link" to={"/home"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/deals"}>
                Deals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/pizza"}>
                Pizza
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Right Icons */}
    <div className="col-md-3">
      <div className="nav__right d-flex align-items-center justify-content-end gap-4">
        <span className="cart__icon">
          <i className="ri-shopping-cart-2-line"></i>
          <span className="cart__badge">2</span>
        </span>
        <span className="user">
          <Link to="/Login">
            <i className="ri-user-line"></i>
          </Link>
        </span>
        <span className="mobile__menu">
          <i className="ri-menu-line"></i>
        </span>
      </div>
    </div>
  </div>
</div>
}


function Navbar() {
  const[state,setstate]=useState({clicked:false});

  // function to toggle the state of hamburger and close
 const handleClick=()=>{
  setstate({clicked:!state.clicked})
 }

  return (
    <>
     <nav className="main-nav">
      {/* Logo part */}
      
        <div className="logo">
        <img src={Logo} alt="Logo not found" className='logo-img' />
        
        <div className='logo-text'>
        <h5>
          <span>P</span>izza<span>O</span>n<span>C</span>lick
          </h5>
          </div>
        </div>
        {/* menu links */}
        <div className="menu-link">
          <ul>
        <li>
              <NavLink className="nav-link" to={"/home"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/deals"}>
                Deals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/pizza"}>
                Pizza
              </NavLink>
            </li>
            </ul>
        </div>


        {/* 3rd part of navbar */}
            <div className="nav-right">
            <ul>
              <li>
              <span className="cart__icon">
          <i className="ri-shopping-cart-2-line"></i>
          <span className="cart__badge">2</span>
        </span>
              </li>
              <li>
              <span className="user">
          <Link to="/Login">
            <i className="ri-user-line"></i>
          </Link>
        </span>
              </li>

              <li>
              <span className="mobile-menu" onClick={handleClick}>
                {/* dynamically loading the hamburger and close button */}
                <i className={state.clicked ? "ri-close-line"  : "ri-align-justify"}></i>
        </span>
              </li>
            </ul>
           
            </div>

     </nav>
    </>
  );
}

export default Navbar;
