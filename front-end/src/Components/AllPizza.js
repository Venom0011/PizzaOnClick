import React, { useContext, useEffect, useState } from "react";
import "../style/AllPizza.css";
import {CartContext} from "../Components/Context/CartContextProvider";
import PizzaService from "../Service/PizzaService";
function AllPizza() {

// calling the addToCart function from context
  const {addToCart,cartItems}=useContext(CartContext)
  
  const [pizza,setPizza]=useState([]);

  // get All pizza
  const fetchData=()=>{
    PizzaService.getAllPizza().then((result)=>{
        setPizza([...result.data]);  
    }).catch((err)=>{
      console.log(err);
    })
  }
useEffect(() => {
  fetchData();
}, [])

// get pizza by Id
const getPizzaById=(id)=>{
  PizzaService.getPizzaById(id).then((result)=>{
   
    if(!localStorage.getItem("pizza")){
      localStorage.setItem("pizza","[]");
    }
    const selectPizza={...result.data}
    let cart = JSON.parse(localStorage.getItem("pizza")) || []
    console.log(result.data)
    cart.push(selectPizza);

    localStorage.setItem("pizza",JSON.stringify(cart));


  }).catch((err)=>{
    console.log(err);
  })
}
  return (
    <>
    
      <div className="container">

      <div className="col-lg-12 md-12">
            <h2 className="text-center mb-5">Hot Pizza</h2>
          </div>
        <div className="row row-cols-1 row-cols-md-3">
          
        {
            pizza.map(p=>
              <div className="col mb-4" key={p.id}>
              
                <div className="card">
              
              {/* storing the single pizza count using cartItems */}
              

              {/* adding image to public folder and accessing the image path name by popping the location till you get fileName */}
             <img  src={`./pizzaImg/${p.pizzaImagePath.split('/').pop()}`} className="card-img mx-auto d-block" alt="..." />

           <div className="card-body">
             <h5 className="card-title text-center">{p.pizzaName}</h5>
             <p className="card-text">
               This is a longer card with supporting text below as a natural
               lead-in to additional content. This content is a little bit
               longer.
             </p>
           </div>
           <div className="card-footer d-flex align-items-center justify-content-between">
             <span className="price">₹{p.pizzaPrice} </span>
             
             <button className="add_to_cart" onClick={()=>addToCart(p.id)}>
              Add to cart {cartItems[p.id]>0 && <>({cartItems[p.id]})</>}
              </button>
             
           </div>
         </div>
            
           
          </div>
            )
          }
      </div>
      </div>
    </>
  );
}

export default AllPizza;
