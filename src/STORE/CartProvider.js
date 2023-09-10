import React,{useState} from "react";
import CartContext from "./cart-context";

const CartProvider=(props)=>{

    const [items,updatedItem]=useState([])

    const addItemToCartHandler=(item)=>{
        updatedItem([...items,item])
    };

    const removeItemToCartHandler=(id)=>{};

    const cartContext={
        items:items,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler,
    }

 return <CartContext.Provider value={cartContext} >
    {props.children}
 </CartContext.Provider>
}
export default CartProvider;
