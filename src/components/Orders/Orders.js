import React from 'react';
import { removeFromDb } from '../../utilities/Fakedb';
import Cart from '../Cart/Cart';
import ShowCartProduct from '../ShowCartProduct/ShowCartProduct';
import UseCart from '../UseCart/UseCart';
import UseProduct from '../UseProduct/UseProduct';

const Orders = () => {
  const [products , setProducts] = UseProduct();
  const [cart , setCart] = UseCart(products);

  const removeitem = (key) =>{
     
     const newCart = cart.filter(crt=> crt.key !== key);
     setCart(newCart);
     removeFromDb(key)

  }

  return (
    <div>
     <div> 
    <section className='shop'>
      <div className="product">
        {
          cart.map(product => <ShowCartProduct removeitem={removeitem} key={product.key} product={product}> </ShowCartProduct> )
        }
      </div>

      <div className="cart">
        <Cart products={cart} len={cart.length}></Cart>
      </div>
      
    </section>
    </div>
    </div>
  );
};

export default Orders;