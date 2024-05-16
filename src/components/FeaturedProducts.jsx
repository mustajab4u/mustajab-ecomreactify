import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import { Product, Loading, Error } from '.';
import { formatPrice } from '../utils/helpers';
const FeaturedProducts = () => {
    const {
        state: {
            featured_products,
            products_loading: loading,
            products_error: error,
        },
    } = useProductsContext();
    if (error) return <Error />;
    if (loading) return <Loading />;
    const shuffleArray = array => array.sort(() => Math.random() - 0.5);
    const featuredProducts = shuffleArray(featured_products)
        .slice(0, 3)
        .map(product => {
            return (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <div className='relative group'>
                        <div className='w-full h-full absolute top-0 left-0 bg-black opacity-50 transition1000 rounded-lg group-hover:opacity-0 group-hover:shadow-lg'></div>
                        <div className='w-full h-full absolute top-0 left-0 z-10 p-4 flex flex-col justify-center items-center transition1000 rounded-lg group-hover:shadow-lg text-transparent group-hover:text-white'>
                            <h3 className='text-lg font-medium'>
                                {product.title}
                            </h3>
                            <div className='flex items-center mt-2'>
                                <p className='font-bold text-center text-xl'>
                                    <span className='font-extrabold text-2xl'>
                                        {product.name}
                                    </span>
                                    <br />
                                    {formatPrice(product.price)}
                                </p>
                                <span className='ml-2 text-sm'>
                                    {product.unit}
                                </span>
                            </div>
                        </div>
                        <img
                            src={product.image}
                            alt={product.title}
                            className='w-full rounded-lg shadow-md transition1000 group-hover:opacity-75 h-64 object-cover object-center'
                        />
                    </div>
                </Link>
            );
        });

    return (
        <div className='py-16 px-6 lg:px-16 relative'>
            <div className='max-w-7xl mx-auto'>
                <div className='absolute inset-0 gradBg rounded-lg shadow-2xl transform -skew-x-12 z-0'></div>
                <h2 className='w-fit pl-3 text-3xl font-semibold text-center mb-8 relative z-10'>
                    Featured Products
                    <div className='underlineImp'></div>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
                    {featuredProducts}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
