import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
const element = <FontAwesomeIcon icon={faShoppingCart}/>


const ShowCartProduct = (props) => {
   const {removeitem} = props;
   const { price , seller , category , name , star , key} = props.product;
  return (
   
     
    <div className='single-product' style={{display: 'flex'}}>
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
        </div>
        <div>      
       <button onClick={()=> removeitem(key)} > {element} remove  </button>
       </div>
    </div>
  );
};

export default ShowCartProduct;