import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import '../Cart/Cart.css'
const element = <FontAwesomeIcon icon={faShoppingCart}/>

const Product = (props) => {
  const {addCart} = props;
  
  const { name , img , price , seller , star , category} = props.product
  const {product} = props;
  return (
    <div className='single-product'>
      <div> 
      <img src={img} alt="" />
      </div>
      <div>     
       <h3>{name}</h3>
       <p>Price : {price}</p>
       <p>Seller : {seller}</p>
       <h4> Category :  {category}</h4>
       
        <Rating
           emptySymbol="far fa-star fas-color1"
           fullSymbol="fas fa-star fas-color" 
           readonly
           initialRating={star}
         />
        <br />
       <button  onClick={()=> addCart(product)}> {element} Add to cart </button>

     </div>
    </div>
  );
};

export default Product;