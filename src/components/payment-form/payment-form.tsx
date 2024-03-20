'use client'
import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';
import { onSubmitPaymemtAction } from '@/actions/payment-action';
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

    return (
        <form className={styles["payment-form"]} action={onSubmitPaymemtAction}>
            <div className={styles["card-field"]}>
                <div><label htmlFor=''>Credit Number</label></div>
                <div><input type="number" id='' name='' inputMode="numeric" /></div>
            </div>

            <div className={styles["card-field"]}>
                <div><label htmlFor=''>Name on Card</label></div>
                <div><input type='text' id='' name='' placeholder='Ex. John Website '/></div>
            </div>

            <div className={styles["card-field"]}>
                <div><label htmlFor=''>Expiry Date</label></div>
                <div><input type="month" id='' name='' min="2024-01" value="2024-01" onChange={() => null}/></div>
            </div>

            <div className={styles["card-field"]}>
                <div><label htmlFor=''>Security Code</label></div>
                <div><input type='number' id='' name=''/></div>
            </div>
 
            <SubmitButton />
        </form>
    )
}

export default PaymentForm;