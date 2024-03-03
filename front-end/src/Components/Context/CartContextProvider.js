import React, { createContext, useEffect, useState } from 'react'
import PizzaService from '../../Service/PizzaService';

export const CartContext=createContext(null);

 function CartContextProvider(props) {
  const [pizzaLength,setLength]=useState(0);
  const [pizza,setPizza]=useState([]);
  const [cartItems,setCartItems]=useState({});
  useEffect(() => {
    // Fetch pizza length when component mounts
    getPizzaLength();
  }, []);

  useEffect(() => {
    // Update cart items whenever pizza length changes
    setCartItems(getDefaultCart());
  }, [pizzaLength]);

  // setting the count for each item to 0
  const getDefaultCart=()=>{
  let cart={};
  for(let i=1;i<pizzaLength+1;i++){
    cart[i]=0;
  } 
  return cart;
  }

  // Function to get length of all pizzas
  const getPizzaLength = () => {
    PizzaService.getAllPizza()
      .then((result) => {
        let pizza = result.data;
        setLength(pizza.length);
        setPizza([...result.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
   
    // incrementing the count for each item when added in cart
  
    const addToCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    // here the we are getting the previous data using prev and contructing object
    // using () with previous value+1

    const removeFromCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const updateCartCount=(newAmount,itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }

    const getCartSize=()=>{
      let sum=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          sum+=cartItems[item];
        }
      }
      return sum;
    }

    const getTotalAmount=()=>{
      let totalAmount=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo=pizza.find((prod)=>prod.id===Number(item));
          totalAmount+=cartItems[item]*itemInfo.pizzaPrice;
        }
      }
      return totalAmount;
    }

    const contextValue={cartItems,addToCart,removeFromCart,updateCartCount,getCartSize,getTotalAmount};
    localStorage.setItem("cart-items",JSON.stringify(cartItems));
  return (
    <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
  )
}

export default CartContextProvider