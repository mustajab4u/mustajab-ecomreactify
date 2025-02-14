import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
    filtered_product: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        max_price: 0,
        min_price: 0,
        price: 0,
        category: 'all',
        colors: 'all',
        company: 'all',
        text: '',
        shipping: false,
    },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
    const {
        state: { products },
    } = useProductsContext();
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: products });
    }, [products]);
    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS });
        dispatch({ type: SORT_PRODUCTS });
    }, [products, state.sort, state.filters]);
    const setGridView = () => dispatch({ type: SET_GRIDVIEW });
    const setListView = () => dispatch({ type: SET_LISTVIEW });
    const updateSort = e => {
        const value = e.target.value;
        dispatch({ type: UPDATE_SORT, payload: value });
    };
    const updateFilter = e => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === 'category') value = e.target.textContent;
        if (name === 'colors') value = e.target.dataset.color;
        if (name === 'price') value = +value;
        if (name === 'shipping') value = e.target.checked;
        dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
    };
    const clearFilter = e => dispatch({ type: CLEAR_FILTERS });
    return (
        <FilterContext.Provider
            value={{
                ...state,
                setListView,
                setGridView,
                updateSort,
                updateFilter,
                clearFilter,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
// make sure use
export const useFilterContext = () => {
    return useContext(FilterContext);
};
