'use server'

import braintree from 'braintree';

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY
});

export const generateClientToken = async (): Promise<string> => {
    try {
        const response = await gateway.clientToken.generate({});
        return response.clientToken;
    } catch (err) {
        // Use a type assertion to treat the error as an Error object
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            // Handle cases where the error might not be an instance of Error
            throw new Error('An unknown error occurred while generating the client token');
        }
    }
};

export const processSaleTransaction = async (paymentMethodNonce: string, amount: string): Promise<braintree.Transaction> => {
    try {
        const saleResult = await gateway.transaction.sale({
            amount: amount,
            paymentMethodNonce: paymentMethodNonce,
            options: {
                submitForSettlement: true,
            },
        });
  
        if (saleResult.success) {
            return saleResult.transaction;
        } else {
            throw new Error(saleResult.message);
        }
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        } else {
            throw new Error('An unknown error occurred during the transaction.');
        }
    }
  };
  
  