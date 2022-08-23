import { createContext, useReducer } from "react";
import { ADD_TO_CART,REMOVE_ITEM_FROM_CART,INCREASE_PRODUCT,DECREASE_PRODUCT } from "./cartActions";

const ProductContext = createContext();

const name = "Kingsley"


const cartReducer = (state,action)=>{
    let error;
    switch (action.type){
        case ADD_TO_CART:
            console.log(state);
                return[...state,action.payload.item]
           break;
           default: return state
    }
}


export const ProductContextProvider = ({children})=>{

    const [cart,cartDispatch] = useReducer(cartReducer,[]);

    return(
    <ProductContext.Provider value={{name,cart,cartDispatch}}>
        {children}
    </ProductContext.Provider>
    )
}

export default ProductContext