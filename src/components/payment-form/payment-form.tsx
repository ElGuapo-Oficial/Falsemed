'use client'
import { useFormStatus, useFormState } from 'react-dom';
import { onSubmitPaymemtAction } from '@/actions/payment-actions';
import styles from './payment-form.module.css';

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button type='submit' aria-disabled={pending}>
            Add
        </button>
    )
}

function PaymentForm() {
    const [state, dispatch] = useFormState(onSubmitPaymemtAction, undefined);

     return (
        <form className={styles["payment-form"]} action={dispatch}>
            <div className={styles["card-field"]}>
                <div><label htmlFor=''>Credit Number</label></div>
                <div><input type="number" id='creditNumber' name='creditNumber' inputMode="numeric" /></div>
            </div>

            <div className={styles["card-field"]}>
                <div><label htmlFor=''>Name on Card</label></div>
                <div><input type='text' id='nameOnCard' name='nameOnCard' placeholder='Ex. John Website '/></div>
            </div>

            <div className={styles["card-field"]}>
                <div><label htmlFor=''>Expiry Date</label></div>
                <div><input type="month" id='expiryDate' name='expiryDate' min="2024-01" value="2024-01" onChange={() => null}/></div>
            </div>

            <div className={styles["card-field"]}>
                <div><label htmlFor=''>Security Code</label></div>
                <div><input type='number' id='cvv' name='cvv'/></div>
            </div>
 
            <SubmitButton />
        </form>
    )
}

export default PaymentForm;