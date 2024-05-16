import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import Loading from './Loading';
import { useProductsContext } from '../context/products_context';

const ListView = ({ products }) => {
    const {
        state: { products_loading: loading, products_error: error },
    } = useProductsContext();
    if (error) return <Error />;
    if (loading) return <Loading />;
    const productsDisplay = products.map(product => {
        return (
            <Link to={`/product/${product.id}`} key={product.id}>
                <div className='underlineImp h-[1px]'></div>
                <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-36 justify-between px-4 py-2 hover:bg-violet-300/20 transition1000 rounded-lg my-2'>
                    <img
                        src={product.image}
                        alt={product.title}
                        className='w-20 h-20 rounded-lg shadow-md'
                    />
                    <div className='text-center sm:text-right'>
                        <h3 className='text-lg font-medium'>
                            {product.company}
                        </h3>
                        <span className='font-extrabold text-xl sm:text-2xl'>
                            {product.name.substring(0, 30)}
                        </span>
                        <br />
                        <span className='text-lg font-medium'>
                            {formatPrice(product.price)}
                        </span>
                    </div>
                </div>
            </Link>
        );
    });

    return <div>{productsDisplay}</div>;
};

export default ListView;
