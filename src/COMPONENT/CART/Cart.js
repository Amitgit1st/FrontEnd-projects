import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../STORE/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartcntx=useContext(CartContext)
    const mealItem = cartcntx.items;
    const TOTAL_AMOUNT= `$${cartcntx.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler = (id) => {
        cartcntx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartcntx.addItem({...item, amount: 1});
      };
    
        

    const cartItem = <ul className={classes['cart-items']}>
        {mealItem.map((meal) =>
            <CartItem
            key={meal.id}
            name={meal.name}
            price={meal.price}
            amount={meal.amount}
            onRemove={cartItemRemoveHandler.bind(null, meal.id)}
            onAdd={cartItemAddHandler.bind(null, meal)}
            />
        )}
    </ul>

    return <Modal onHit={props.onHideCart}>
        {cartItem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{TOTAL_AMOUNT}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt ']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}
export default Cart;
