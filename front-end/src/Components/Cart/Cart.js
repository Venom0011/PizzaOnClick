import React, { useContext, useState,useEffect } from 'react'
import PizzaService from '../../Service/PizzaService'
import {CartContext} from "../Context/CartContextProvider";
import CartItem from './CartItem';
import "./Cart.css";
function Cart() {

  const [pizza,setPizza]=useState([]);
  const {cartItems,getTotalAmount} =useContext(CartContext);
  const totalAmount=getTotalAmount();
  const getAllPizza=()=>{
    PizzaService.getAllPizza().then((result)=>{
        setPizza([...result.data]);  
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(() => {
    getAllPizza();
  }, [])

  return (
    <>
    <div className='container'>
    
    
      { totalAmount>0 ?(
        <>
        <h1 className='text-center'>Cart Items</h1>
      <table className='table table-sm my-5 mx-auto' cellSpacing={"20px"}>
          <thead>
            <th>Item</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </thead>
          <tbody>
            
            {pizza.map((prod)=>{
            if(cartItems[prod.id]!==0){
              return <CartItem  key={prod.id} data={prod}/>
            }
          })}
            
            <tr>
            <td colSpan={3} className="text-end" style={{border:"none"}}>
              <h3>Subtotal: ₹ {totalAmount}</h3>
            </td>
            </tr>
            <tr>
            <td colSpan={3} className='text-end' style={{border:"none"}}> 
            <button className='btn btn-primary'>Continue Shopping</button>
            &nbsp;&nbsp;
            <button className='btn btn-success'>CheckOut</button> 
            </td>
            
            </tr>
          </tbody>
      </table>
      </>
      ):(
        <h1 className='empty-cart text-monospace'> Your Cart is empty</h1>
      )}
    </div>
    </>
  )
}

export default Cart