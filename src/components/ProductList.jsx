import { useFilterContext } from '../context/filter_context';
import { ListView, GridView } from '.';
import products_reducer from '../reducers/products_reducer';

const ProductList = () => {
    const { filtered_product: products, grid_view } = useFilterContext();
    if (grid_view === false) {
        return <ListView products={products} />;
    }
    return <GridView products={products} />;
};

export default ProductList;
