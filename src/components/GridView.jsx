import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';

const GridView = ({ products }) => {
    const productsDisplay = products.map(product => {
        return (
            <Link to={`/product/${product.id}`} key={product.id}>
                <div className='relative group'>
                    <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-50 transition1000 rounded-lg group-hover:opacity-0 group-hover:shadow-lg'></div>
                    <div className='w-full h-full absolute top-0 left-0 z-10 p-4 flex flex-col justify-center items-center transition1000 rounded-lg group-hover:shadow-lg text-white'>
                        <h3 className='text-lg font-medium'>{product.title}</h3>
                        <h3 className='text-lg font-medium'>
                            {product.company}
                        </h3>
                        <div className='flex items-center mt-2'>
                            <p className='font-bold text-center text-xl'>
                                <span className='font-extrabold text-2xl'>
                                    {product.name}
                                </span>
                                <br />
                                {formatPrice(product.price)}
                            </p>
                        </div>
                    </div>
                    <img
                        src={product.image}
                        alt={product.title}
                        className='w-full rounded-lg shadow-md transition1000 group-hover:opacity-75 border-4 border-white border-opacity-25 h-64 object-cover object-center'
                    />
                </div>
            </Link>
        );
    });
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
            {productsDisplay}
        </div>
    );
};

export default GridView;