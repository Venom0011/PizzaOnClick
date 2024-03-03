import React,{useContext} from 'react'
import {CartContext} from "../Context/CartContextProvider";


function CartItem(props) {
    const {cartItems,addToCart,removeFromCart,updateCartCount} =useContext(CartContext);
    const {id,pizzaName,pizzaPrice,pizzaImagePath}=props.data;
    console.log(props.data);
  return (
    <>
    
    <tr>
        <td>
        <img  src={`./pizzaImg/${pizzaImagePath.split('/').pop()}`} className="card-img mx-auto d-block" />
        </td>

        <td>
        <p>{pizzaName}</p>
        </td>

        <td>
        <p>  ₹ {pizzaPrice}</p>
        </td>
        <td>
        <div className='quantity-grp'>
            <div><button className='addbtn' onClick={()=>removeFromCart(id)}> - </button></div>
            <div> <input value={cartItems[id]}  onChange={(e)=>updateCartCount(Number(e.target.value),id)}
        className='input-count'/></div>
            <div><button  className="subbtn" onClick={()=>addToCart(id)}> + </button></div>
        </div>
        
       
        
        </td>
        
    </tr>
    </>
  )
}

export default CartItem