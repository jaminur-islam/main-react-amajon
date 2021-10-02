import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/Fakedb";

const UseCart = (products) => {
  const [cart , setCart] = useState([]);
 useEffect(()=>{
   if(products.length){
    const localStorage = getStoredCart();
    const storedCart = []
    for(const key in localStorage) {
 
      const findObj = products.find(product => product.key === key );
 
      if(findObj){
       const quantity = localStorage[key];
       findObj.quantity = quantity;
       storedCart.push(findObj);
      }
      
       
    }
   
    setCart(storedCart);
   }
 
       
 },[products])

  return [cart , setCart];

};

export default UseCart;