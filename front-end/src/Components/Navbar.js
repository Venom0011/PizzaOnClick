import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assests/images/res-logo.png';
import { NavLink,useNavigate } from 'react-router-dom';
import '../style/Navbar.css';
import { CartContext } from './Context/CartContextProvider';
import { Logout, currentUserDetails, isLoggedIn } from '../Service/AuthHeader';

function Navbar() {
  const navigate=useNavigate();
  const {getCartSize}=useContext(CartContext);
  const cartSize=getCartSize();
  const [login,setLogin]=useState(false);
  const [user,setUser]=useState(undefined);


  useEffect(()=>{

    setLogin(isLoggedIn());
    setUser(currentUserDetails());
  },[login])

  const logout=()=>{
    Logout(()=>{
      setLogin(false);
      navigate("/");
    })
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container py-3 home-nav" >
  <NavLink to='/home' className="navbar-brand">
      <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top mx-2"/>
      PizzaOnClick
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0 align-items-center mx-auto nav_ul" id='home-active'>
        
        <li className="nav-item">
          <NavLink to='/home' className="nav-link">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to='/about' className="nav-link">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink  to='/pizza' className="nav-link">Pizza</NavLink>
        </li>

        <li className="nav-item dropdown">
          <nav className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <span style={{"fontWeight":"500"}}> Deals </span>
          </nav>
          <ul className="dropdown-menu">
            <li><NavLink to='/deals' className="nav-link dropdown-item" >Bulk Order</NavLink></li>

          </ul>
        </li> 
        <li className="nav-item">
          <NavLink  to='/contact' className="nav-link">Contact Us</NavLink>
        </li>
      </ul>
    </div>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center ms-auto nav_icons">
        <li className="nav-item">
        <NavLink to='/cart' className='nav-link'>
          <span className='shopping_cart' style={{"fontWeight":"500"}}>
          Cart
        <i className="ri-shopping-cart-2-line"></i>
          <span className='cart-badge'>{cartSize}</span>
          </span>
          </NavLink>
        </li>
        <li className="nav-item">
        {
          !login && (
            <>
            <NavLink to='/login' className='nav-link'>
          <span className='user_login' style={{"fontWeight":"500"}}>
            Login
            </span>
            </NavLink>
            </>
          )
        }
          {
          login && (
            <>
            {/* <NavLink className='nav-link d-flex'>
           <i className="ri-user-line"></i>
            {user.email}
         
          </NavLink>
           <span>
            
          <NavLink className='nav-link' onClick={logout}>
            Logout
          </NavLink>
            </span>  */}
           <li className="nav-item dropdown">
          <nav className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <span style={{"fontWeight":"500"}}> <i className="ri-user-line"></i> </span>
          </nav>
          <ul className="dropdown-menu">
            <li><NavLink  className="nav-link dropdown-item">{user.email}</NavLink></li>
            <li><NavLink  className="nav-link dropdown-item" onClick={logout}>Logout</NavLink></li>

          </ul>
        </li>


            </>
          )
        }
       
          
       
        </li>
      </ul>
      </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
