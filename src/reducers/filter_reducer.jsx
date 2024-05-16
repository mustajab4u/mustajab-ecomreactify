import {
    LOAD_PRODUCTS,
    SET_LISTVIEW,
    SET_GRIDVIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            let maxPrice = action.payload.map(({ price }) => price);
            maxPrice = Math.max(...maxPrice);
            return {
                ...state,
                all_products: [...action.payload],
                filtered_product: [...action.payload],
                filters: {
                    ...state.filters,
                    max_price: maxPrice,
                    price: maxPrice,
                },
            };
        case SET_LISTVIEW:
            return {
                ...state,
                grid_view: false,
            };
        case SET_GRIDVIEW:
            return {
                ...state,
                grid_view: true,
            };
        case UPDATE_SORT:
            return {
                ...state,
                sort: action.payload,
            };
        case UPDATE_FILTERS:
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };
        case CLEAR_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: 'all',
                    colors: 'all',
                    company: 'all',
                    shipping: false,
                    text: '',
                    price: state.filters.max_price,
                },
            };

        case FILTER_PRODUCTS:
            const { all_products } = state;
            const { text, category, company, colors, shipping, price } =
                state.filters;
            let tempProduct = [...all_products];
            if (text) {
                tempProduct = tempProduct.filter(product =>
                    product.name.toLowerCase().startsWith(text.toLowerCase())
                );
            }
            if (category !== 'all') {
                tempProduct = tempProduct.filter(
                    product => product.category === category
                );
            }
            if (company !== 'all') {
                tempProduct = tempProduct.filter(
                    product => product.company === company
                );
            }
            if (colors !== 'all') {
                tempProduct = tempProduct.filter(product =>
                    product.colors.find(color => color === colors)
                );
            }
            if (shipping) {
                tempProduct = tempProduct.filter(
                    product => product.shipping === true
                );
            }
            tempProduct = tempProduct.filter(product => product.price <= price);
            return { ...state, filtered_product: tempProduct };
        case SORT_PRODUCTS:
            const { sort, filtered_product } = state;
            let newProduct = [...filtered_product];
            if (sort === 'price-lowest') {
                newProduct = newProduct.sort((a, b) => a.price - b.price);
            } else if (sort === 'price-highest') {
                newProduct = newProduct.sort((a, b) => b.price - a.price);
            } else if (sort === 'name-a') {
                newProduct = newProduct.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
            } else if (sort === 'name-z') {
                newProduct = newProduct.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
            }

            return {
                ...state,
                filtered_product: newProduct,
            };
        default:
            throw new Error(`No Matching "${action.type}" - action type`);
    }
};

export default filter_reducer;
