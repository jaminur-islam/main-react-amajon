import { useEffect , useState } from "react";

const UseProduct = () => {
 // set fetch products data
 const [products , setProducts]  = useState([]);

 // load productsdata
 useEffect(()=>{
   fetch('./products.JSON').then(res=> res.json()).then(data=>{
     setProducts(data)
    
   } );
 } , [])
 return [products , setProducts]

};
export default UseProduct;


