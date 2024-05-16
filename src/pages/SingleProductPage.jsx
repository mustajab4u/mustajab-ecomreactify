import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';

import {
    BsFacebook,
    BsTwitter,
    BsInstagram,
    BsFillStarFill,
} from 'react-icons/bs';
import bg from '../assets/bg1.png';
import {
    Loading,
    Error,
    ProductImages,
    AddToCart,
    Stars,
    PageHero,
} from '../components';
import { Link } from 'react-router-dom';
const SingleProductPage = () => {
    const [amount, setAmount] = useState(1);

    const { id } = useParams();
    const {
        fetchProduct,
        state: {
            single_product_loading: loading,
            single_product_error: error,
            single_product: product,
        },
    } = useProductsContext();
    const {
        category,
        company,
        description,
        name,
        price,
        id: sku,
        reviews,
        stars,
        stock,
        images,
    } = product;
    useEffect(() => {
        fetchProduct(`${url}${id}`);
    }, [id]);
    if (error) return <Error />;
    if (loading) return <Loading />;

    const prodectDisplay = (
        <div className='flex flex-col lg:flex-row justify-between p-6 bg-slate-300/20'>
            <div className='flex items-center justify-center'>
                <ProductImages images={images} />
            </div>
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                    {name}
                </h1>
                <div className='text-sm'>
                    {reviews}{' '}
                    <span className='text-bold gradText'>Customer Reviews</span>
                </div>
                <div className='flex flex-col lg:flex-row lg:items-center mb-4'>
                    <span className='flex items-center lg:mr-8'>
                        <Stars stars={stars} />
                        <span className='text-gray-600'>{stars} Reviews</span>
                    </span>
                    <span className='flex lg:ml-auto lg:pl-3 py-2 border-l-2 border-violet-500 rounded-full rotate-6 hover:rotate-0 transition1000 text-2xl'>
                        <BsFacebook className='mx-1 text-blue-500 transition1000 hover:text-blue-600 cursor-pointer' />
                        <BsInstagram className='mx-1 text-pink-500 transition1000 hover:text-pink-600 cursor-pointer' />
                        <BsTwitter className='mx-1 text-blue-500 transition1000 hover:text-blue-600 cursor-pointer' />
                    </span>
                </div>
                <p className='leading-relaxed break-words mb-4'>
                    {description}
                </p>
                <div className='w-11/12'>
                    <div className='flex justify-between my-4'>
                        <p className='font-extrabold'>Available</p>
                        <p className='gradText font-bold'>
                            {stock > 0 ? '  In Stock' : '  Out of Stock'}
                        </p>
                    </div>
                    <div className='flex justify-between my-4'>
                        <p className='font-extrabold'>SKU</p>
                        <p className='gradText font-bold'>{sku}</p>
                    </div>
                    <div className='flex justify-between my-4'>
                        <p className='font-extrabold'>Brand</p>
                        <p className='gradText font-bold'>{company}</p>
                    </div>
                </div>
                <p className='gradText font-bold text-2xl text-right mr-10'>
                    {formatPrice(price, amount)}
                </p>
                <div className='underlineImp text-center mb-6'></div>
                {stock > 0 && (
                    <AddToCart
                        product={product}
                        amount={amount}
                        setAmount={setAmount}
                    />
                )}
                {stock === 0 && <Link to={'/products'} className='text-rose-500 font-bold text-2xl font-serif'>out of stock</Link>}
            </div>
        </div>
    );

    return (
        <div>
            <PageHero title={name} product />
            {prodectDisplay}
        </div>
    );
};

export default SingleProductPage;
