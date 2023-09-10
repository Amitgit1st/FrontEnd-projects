import React,{useContext} from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../CART/CartIcon";
import CartContext from "../../STORE/cart-context";

const HeaderCartButton=props=>{

    const CartCtx=useContext(CartContext);
    let Quantity=0;
    CartCtx.items.forEach((item)=>{
          Quantity=Quantity+ Number(item.quantity)
    })

    return <button className={classes.button} onClick={props.onClick} >
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span >Your Cart</span>
        <span className={classes.badge}>{Quantity}</span>
    </button>

}
export default HeaderCartButton;
