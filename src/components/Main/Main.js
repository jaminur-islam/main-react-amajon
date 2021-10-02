// Main component 
import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/Fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import UseProduct from '../UseProduct/UseProduct';
import './Main.css'
//Main component run 
const Main = (props) => {
  const {inputValue} = props;

  /* // set fetch products data
  [Eitar onno ekta folder e function hisabe nisi ekhane ena distructure korsi
  (UseProduct() name e)]
  const [products , setProducts]  = useState([]);

  // load productsdata
  useEffect(()=>{
    fetch('./products.JSON').then(res=> res.json()).then(data=>{
      setProducts(data)
    } );
  } , []) */

  
  const [products , setProducts] = UseProduct();

  const newProducts = products.filter(product => product.name.toLowerCase().includes(inputValue));
 

  
  // add Cart function
  const [cart , setCart] = useState([]);
  const addCart = (product) => {
  // Good Colection is it =======Dorkari khub khub dorkari===>
     let istrue = false;

     for(const c of cart) {
       
       if(c.key === product.key){
         istrue = true;
         c.quantity = c.quantity+1;
       }

     }

     if(!istrue){
    const newArry = [...cart , product];
    setCart(newArry);
       
     }else{
      const newArry = [...cart];
      setCart(newArry);
     }

    addToDb(product.key);
  
  }
//========= Good Colection is it =======Dorkari khub khub dorkari===>

//get local storage vlue
 useEffect(()=>{
   if(products.length){
    const localValue = getStoredCart();
    const Arry = [];
    for(const key in localValue){
      const findobj = products.find(product => product.key === key)
      if(findobj){
        const quantity = localValue[key];
        findobj.quantity = quantity;
        Arry.push(findobj);
      }
     
    }
   setCart(Arry);
   }
   
 },[products])


  //return the components 
  return (
    <div> 
    <section className='shop'>
      <div className="product">
         {
            newProducts.map(product => <Product key={product.key} product={product} addCart={addCart}></Product>)
         } 
      </div>

      <div className="cart">
        <Cart products={cart} len={newProducts.length}></Cart>
      </div>
      
    </section>
    </div>
  );
};

export default Main;