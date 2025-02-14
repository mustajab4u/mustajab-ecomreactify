import {
    TOGGLE_SIDEBAR,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const products_reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return { ...state, showSidebar: !state.showSidebar };
        case GET_PRODUCTS_BEGIN:
            return { ...state, products_loading: true };
        case GET_PRODUCTS_ERROR:
            return { ...state, products_loading: false, products_error: true };
        case GET_PRODUCTS_SUCCESS:
            const featured_products = action.payload.filter(
                product => product.featured === true
            );
            return {
                ...state,
                products_loading: false,
                products: action.payload,
                featured_products,
            };
        case GET_SINGLE_PRODUCT_BEGIN:
            return {
                ...state,
                single_product_loading: true,
            };
        case GET_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                single_product_loading: false,
                single_product_error: true,
            };
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                single_product_loading: false,
                single_product: action.payload,
            };
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default products_reducer;
