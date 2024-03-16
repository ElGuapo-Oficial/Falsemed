import { useContext } from 'react';
import StateContext from '@/contexts/StateContext';
import styles from './cart.module.css';

const Cart: React.FC = () => {
    const { state } = useContext(StateContext);

    return (
        <span>Cart <span className={styles["cart-number"]}>{ state.cartItems.reduce((sum, item) => sum + item.quantity, 0) }</span></span>
    )
}

export default Cart; 