import React, { useEffect, useContext, createContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
    CLEAR_CART,
    COUNT_CART_TOTALS,
} from '../actions';
const getLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'));
    } else {
        return [];
    }
};

const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 599,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart = (id, color, amount, product) => {
        dispatch({
            type: ADD_TO_CART,
            payload: { id, color, amount, product },
        });
    };
    const removeItem = id => dispatch({ type: REMOVE_CART_ITEM, payload: id });
    const toggleAmount = (itemId, value) =>
        dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { itemId, value } });
    const clearCart = () => dispatch({ type: CLEAR_CART });
    useEffect(() => {
        dispatch({ type: COUNT_CART_TOTALS });
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    const value = { ...state, addToCart, removeItem, toggleAmount, clearCart };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
// make sure use
export const useCartContext = () => {
    return useContext(CartContext);
};
