'use client'

import { useContext, useEffect, useState } from 'react';
import StateContext from '@/contexts/StateContext';
import CartItem from '@/components/cart-item/cart-item';
import BrainTreeForm from '@/components/braintree/braintree-form';
import styles from './page.module.css';

const Page = () => {
    const { state, dispatch } = useContext(StateContext);
    const [totalPurchase, setTotalPurchase] = useState<number>(0);

    useEffect(() => {
        setTotalPurchase(state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0))
    }, [state]);

    const handleResetCart = () => {
        console.log("Reseting Cart!!");
        dispatch({ type: 'resetCart' });
    };

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
                            <div className={styles["total-section"]}>Order Total: ${totalPurchase}</div>
                            <BrainTreeForm total={String(totalPurchase)} callback={handleResetCart}/>
                        </div>
                    </>
                :   <div className={styles["empty-cart"]}>Empty cart</div>
            }
        </div>

    );
}

export default Page;