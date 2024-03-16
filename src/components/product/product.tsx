'use client'

import { useContext } from 'react';
import StateContext from '@/contexts/StateContext';
import styles from './product.module.css';
import { Featured, CartItem } from '@/types/allTypes';

interface ProductProps {
    item: Featured; 
}
 
const Product: React.FC<ProductProps> = ({ item }) => {
    const { dispatch } = useContext(StateContext);
 
    const addToCart = (item: Featured ) => {
        const cartItem: CartItem = {
            id: item.slug,
            item,
            price: 10,
            quantity: 1
        }
        dispatch({ type: 'addToCart', payload: { cartItem: cartItem } });
    };
 
    return (
        <div key={item.slug} className={styles.item}>
            <img src={item.image_banner_url} className={styles.image} alt={item.name}/>
            <div className={styles.content}>
                <p className={styles.description}>{item.name}</p>
                <p>$10.00</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        </div>
    )
 }

 export default Product;