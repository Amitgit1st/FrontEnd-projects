import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { Button } from 'react-bootstrap';
const Cart=()=>{

    const productsList = [

        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
    
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
    
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
    
        {
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    
    ]
    const cartItem=<ul className={classes['cart-items']}>
        {productsList.map((Item)=><div>
            <li className={classes.headingContainer }>
                {Item.title}-
                {Item.price}-
                {0}
                <Button variant="info" size="sm">Remove</Button>
            </li>
            
            </div>)}
    </ul>

    return(
        <Modal>
            {cartItem}
        </Modal>
    )

}
export default Cart;
