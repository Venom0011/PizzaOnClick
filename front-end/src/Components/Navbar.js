import React from 'react'
import {Container} from 'reactstrap';
import Logo from '../assests/images/res-logo.jpg'
import {NavLink,Link} from 'react-router-dom'
import '../style/Navbar.css'
function Navbar() {
  return (
    <header className='header'>
      <Container>
        {/* d-flex property of reactstrap will move all elemets to right */}
        {/* right icons */}
      <div className="nav__wrapper d-flex align-items-center justify-content-between">
        <div className="logo">
          <img src={Logo} alt="Logo not found" />
          <h5>PizzaOnClick</h5>
        </div>

    {/* middle icons */}
        <div className="navigation">
          <div className="menu" >
          <ul className=' list-unstyled d-flex align-items-center gap-3'>
      <li>
        <NavLink className="nav-link" to={"/home"}>Home</NavLink>
      </li>
     
      <li className="nav-item ">
        <NavLink className="nav-link" to={"/about"}>About </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to={"/deals"}>Deals </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to={"/pizza"}>Pizza </NavLink>
      </li>
      
    </ul>
          </div>
        </div>

        {/* right icons */}
    <div className="nav__right d-flex align-items-center gap-4">
      <span className="cart__icon">
      <i className="ri-shopping-cart-2-line"></i>
      <span className="cart__badge">2</span>
      </span>
    <span className="user">
      <Link to='/Login'><i className="ri-user-line"></i></Link>
    </span>
    <span className="mobile__menu">
    <i className="ri-menu-line"></i>
    </span>
    </div>

      </div>
      </Container>
    </header>
  )
}

export default Navbar