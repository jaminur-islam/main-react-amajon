import React from 'react';

const Cart = (props) => {
  const {products} = props
  console.log(products)


   //get total 
   let totalQuantity = 0;
   let total = 0;
  for(const product of products){
   

    if(!product.quantity){
      product.quantity = 1;
    }
      totalQuantity += product.quantity;
      total = (total + product.price * product.quantity)

  }
    

 

 
  // reduce [eti array er zekono jinis ke jug korar jonno use kora hoy]
  /* const reducer = (prev , product) => prev + product?.price * totalQuantity;
  const total = products.reduce(reducer , 0); */

  
  const tax = (total/100 * 10);
  const alltotal = total + tax;




  return (
    <div>
      <h3> total-products-found : {props.len} </h3>
      <div>     
           <h1> Items ordered : {totalQuantity} </h1>
           <h3> Total : $ {total.toFixed(2)} </h3>
           <h3> tax : $ {tax.toFixed(2)} </h3>
           <h3> all-total : $ {alltotal.toFixed(2)} </h3>
     </div>
    </div>
  );
};

export default Cart;