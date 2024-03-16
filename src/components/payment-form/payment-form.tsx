import styles from './payment-form.module.css';


const PaymentForm = () => {

    const onSubmitPaymemt = (formData: FormData) => {

    }

    return (
        <form className={styles["payment-form"]}>
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
 
            <button>Submit</button>
        </form>
    )
}

export default PaymentForm;