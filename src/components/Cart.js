import { useContext } from "react"
import ProductContext from "./ProductContext";
const Cart = () => {
   const {name} = useContext(ProductContext);
   const {cart} = useContext(ProductContext);
  return (
    <div>
       {cart.length === 0 && <h3>cart is empty</h3>}
    {
        cart.map(product =>
            <div>
            <button>Remove product</button>
            <h4>Name:{product.name}</h4>
            <h4>Price:{product.price}</h4>
            <h4>Quantity:{product.qty}</h4>
            <h4>Total price:</h4>
            <button>-</button>
            <button>+</button>
        </div>
            )
    }
    </div>
  )
}


export default Cart