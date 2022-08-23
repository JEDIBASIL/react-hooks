import { data } from "./ProductData"
import { useContext } from "react"
import ProductContext from "./ProductContext";
import { ADD_TO_CART,REMOVE_ITEM_FROM_CART,INCREASE_PRODUCT,DECREASE_PRODUCT } from "./cartActions";



const Product = () => {
  const {cartDispatch} = useContext(ProductContext);

  return (
    <div style={{marginTop:"100px"}}>
   {
    data.map(product => 
        <div key={product.id}>
        <h5>{product.name}</h5>
            <p>{product.price}</p>
            <button
              onClick={()=>{cartDispatch({
                type:ADD_TO_CART,
                payload:{
                  id:product.id,item:{
                  name:product.name,
                  price:product.price,
                  qty:0
                }}
              })}}
            >Add to cart</button>
        </div>
        )
   }
   </div>
  )
}

export default Product