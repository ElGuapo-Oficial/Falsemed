'use client'

import React, { useState, useEffect } from 'react';

import { useFormStatus } from 'react-dom';
import DropIn from 'braintree-web-drop-in-react';
import { generateClientToken, processSaleTransaction } from '@/actions/braintree-actions';
import styles from './braintree.module.css';

interface SubmitButtonProps {
    onClick: () => void;
}

type BrainTreeFormProps = {
    total: string;
    callback: () => void
  };

const BrainTreeForm: React.FC<BrainTreeFormProps> = ({ total, callback }) => {
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
        try {
            if (!braintreeInstance) return;
            const { nonce } = await braintreeInstance.requestPaymentMethod();
            const saleResult = await processSaleTransaction(nonce, total);
            console.log("saleResult2", saleResult);
            callback();
        } catch (error) {
            throw new Error(`Error on BrainTreeForm paymentHandler ${error}`);
        }
    };

    return (
        <div className={styles["braintree-form"]}>
            { clientToken && (<DropIn options={{ authorization: clientToken }} onInstance={(instance) => setBraintreeInstance(instance)} />) }
            <SubmitButton onClick={paymentHandler}/>
        </div>
    );
};1

export default BrainTreeForm;
