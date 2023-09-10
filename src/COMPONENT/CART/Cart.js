import React,{useContext} from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../STORE/cart-context';

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartContext.items.map((item, index) => (
                <li key={index}>Name:{item.name} - Price:{item.price} - Quantity:{item.quantity}</li>
            ))}
        </ul>
    ) 

    return (
        <Modal onHide={props.onHideCart} >
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>

            </div>
        </Modal>
    )
}
export default Cart;
export default Cart;
