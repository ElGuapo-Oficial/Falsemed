'use client'

import React, { useState, useEffect } from 'react';

import { useFormStatus } from 'react-dom';
import DropIn from 'braintree-web-drop-in-react';
import { generateClientToken, processSaleTransaction } from '@/actions/braintree-actions';
import styles from './braintree.module.css';

interface SubmitButtonProps {
    onClick: () => void;
}

const BrainTreeForm = () => {
    const [clientToken, setClientToken] = useState<string | null>(null);
    const [braintreeInstance, setBraintreeInstance] = useState<any>(null);

    function SubmitButton({ onClick }: SubmitButtonProps) {
        const { pending } = useFormStatus()

        return (
            <button type='submit' aria-disabled={pending} onClick={onClick}>
                Buy
            </button>
        )
    }

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await generateClientToken();
                setClientToken(token);
            } catch (error) {
                console.error("Failed to load client token:", error);
            }
        };

        fetchToken();
    }, []);

    const paymentHandler = async () => {
        if (!braintreeInstance) return;
        const { nonce } = await braintreeInstance.requestPaymentMethod();
        await processSaleTransaction(nonce, "100");
        braintreeInstance.teardown();
    };

    return (
        <div className={styles["braintree-form"]}>
            { clientToken && (<DropIn options={{ authorization: clientToken }} onInstance={(instance) => setBraintreeInstance(instance)} />) }
            <SubmitButton onClick={paymentHandler}/>
        </div>
    );
};1

export default BrainTreeForm;
