import React from 'react';
import { Container } from 'reactstrap';
import Logo from '../assests/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../style/Navbar.css';

function Navbar() {
  return (
    <>
      <div className="row" style={{width:'80%',margin:'auto'}}>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* Left Icons */}
          <div className="col-md-3 ">
            <div className="logo">
              <img src={Logo} alt="Logo not found" />
              <h5 className='mx-2'>PizzaOnClick</h5>
            </div>
          </div>

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
    </>
  );
}

export default Navbar;
