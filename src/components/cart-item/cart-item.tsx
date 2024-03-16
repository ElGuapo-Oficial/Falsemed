'use client'

import { useContext } from 'react';
import StateContext from '@/contexts/StateContext';
import styles from './cart-item.module.css';
import { CartItem } from '@/types/allTypes';

interface CartItemProps {
    cartItem: CartItem; 
}
 
const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
    const { dispatch } = useContext(StateContext);
    
    const onDeleteItem = (cartItem: CartItem) => {
        dispatch({ type: 'removeFromCart', payload: { cartItemId: cartItem.id } });
    }
 
    return (

        <div key={cartItem.id} className={styles.item}>
             <img src={cartItem.item.image_banner_url} className={styles.image} alt={cartItem.item.name}/>
             <div className={styles.content}>
                <div>Product: {cartItem.item.name}</div>
                <div>Quantity: {cartItem.quantity}</div>
                <div>Unit Price: ${cartItem.price}</div>
                <button onClick={ () => onDeleteItem(cartItem) }>Delete Item</button>
            </div>
            <div className={styles["total-price"]}>
                <div>Total Price</div>
                <div>${cartItem.quantity * cartItem.price}</div>
            </div>
        </div>
    )
 }

 export default CartItem;