import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { products_url as url } from '../utils/constants';
import {
    TOGGLE_SIDEBAR,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
    showSidebar: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
};

const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const toggleSideBar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
    };
    const fetchProducts = async () => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
        try {
            const response = await axios(url);
            const products = response.data;
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR });
        }
    };
    const fetchProduct = async url => {
        dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
        try {
            const response = await axios(url);
            const product = response.data;
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product });
        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    const value = {
        state,
        dispatch,
        toggleSideBar,
        fetchProducts,
        fetchProduct,
    };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};
// make sure use
export const useProductsContext = () => {
    return useContext(ProductsContext);
};
