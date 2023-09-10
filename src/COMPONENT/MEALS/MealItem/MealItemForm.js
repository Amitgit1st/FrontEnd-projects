import { useContext } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../STORE/cart-context';


const MealItemForm = (props) => {

const Cartctx=useContext(CartContext);

const updateCartItems=(e)=>{
        e.preventDefault();
        const quantity=document.getElementById('amount' + props.id).value;
        Cartctx.addItem({...props.item, quantity:quantity})
       
        
    }


    return (
        <form className={classes.form}>
          <Input label="Amount" input={{
                id:'amount' + props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue :'1',
            }} />
            <button onClick={updateCartItems}>+ Add</button>
        </form>
    );
};
export default MealItemForm;
