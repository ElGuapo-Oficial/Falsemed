'use client'

import React, { createContext, useReducer, Dispatch } from 'react';
import { CartItem } from '../types/allTypes';

type State = {
    cartItems: CartItem[];
};

type Action = 
    | { type: 'addToCart'; payload: { cartItem: CartItem } }
    | { type: 'removeFromCart'; payload: { cartItemId: string; } }
    | { type: 'resetCart'};

const StateContext = createContext<{
    state: State;
    dispatch: Dispatch<Action>;
}>({
    state: { cartItems: [] },
    dispatch: () => undefined, // Placeholder function
});

const initialState: State = { cartItems: [] };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'addToCart':
            // Check if the product already exists in the cart
            const existingProduct = state.cartItems.find(p => p.id === action.payload.cartItem.id);
            if (existingProduct) {
                // Update the quantity of the existing product
                return {
                    ...state,
                    cartItems: state.cartItems.map(p =>
                        p.id === action.payload.cartItem.id ? { ...p, quantity: p.quantity + (action.payload.cartItem.quantity || 1) } : p
                    )
                };
            } else {
                // Add the new product to the cart
                const newCartItem = { ...action.payload.cartItem, quantity: action.payload.cartItem.quantity || 1 }; // Assuming the product details are in the payload
                return {
                    ...state,
                    cartItems: [...state.cartItems, newCartItem]
                };
            }
        case 'removeFromCart':
            // Filter out the product to be removed
            return {
                ...state,
                cartItems: state.cartItems.filter(p => p.id !== action.payload.cartItemId)
            };
        case 'resetCart': // Handle the resetCart action
            return {
                ...state,
                cartItems: []
            };
        default:
            return state;
    }
};

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export default StateContext;
