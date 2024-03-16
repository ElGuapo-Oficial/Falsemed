'use client'

import { useContext } from 'react';
import StateContext from '@/contexts/StateContext';
import CartItem from '@/components/cart-item/cart-item';
import PaymentForm from '@/components/payment-form/payment-form';
import styles from './page.module.css';

const Page = () => {
    const { state } = useContext(StateContext);
    console.log("Cart state: ", state);

    return (
        <div className={styles.cart}>
            { state.cartItems.length > 0 
                ?   <>
                        <div className={styles["cart-items-section"]}>
                            { state.cartItems.map(item => 
                                <CartItem cartItem={item} key={item.item.slug}/>
                            )}
                        </div>
                        <div className={styles["payments-section"]}>
                            <PaymentForm />
                        </div>
                    </>
                :   <div className={styles["empty-cart"]}>Empty cart</div>
            }
        </div>

    );
}

export default Page;