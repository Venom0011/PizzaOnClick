import React from 'react'
import animation from '../assests/images/hero.png'
import '../style/Home.css'
import { Link } from 'react-router-dom'
function Home() {
  
  return (
    <section>
      <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className='hero__content'>
         
        <h1 className='mb-4 hero__title'><span>Hungry?</span>Grab a Pizza</h1>
        
          <h5 className='mb-3'>Easy Way to make Order</h5>
          <p>Order - Wait - Chill</p>
          
          <div className='hero__buttons d-flex align-items-center gap-5 mt-4'>
            <button className='order__btn d-flex align-items-center justify-content-between'> Oder now <i class="ri-arrow-right-s-line"></i></button>
            <button className='pizza__btn'><Link to='/pizza'>See all Pizza</Link></button>
        </div>
        </div>
        <div className='hero__service d-flex align-items-center gap-5 mt-5'>
          <p className=' d-flex align-items-center gap-2'><span className='ship__icon'><i class="ri-car-line"></i></span>No Shipping Charges</p>
          <p className='d-flex align-items-center gap-2'><span className='ship__icon'><i class="ri-shield-check-line"></i></span>Secure Checkout</p>
        </div>
        
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="hero__content" style={{position:'relative',left:'20%', bottom:'10%'}}>
          <img src={animation} alt="not found" className='hero-img w-75' />
          </div>
        </div>

        
      
      </div>
      </div>
    </section>
  )
}

export default Home