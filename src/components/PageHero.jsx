import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
    return (
        <div className='bg-violet-400 select-none text-lg font-semibold w-full p-8 py-5 text-white'>
            <Link
                className='text-purple-100 hover:text-white transition1000'
                to={'/'}
            >
                Home{' '}
            </Link>
            {product && (
                <Link
                    className='text-purple-100 transition1000 hover:text-white'
                    to={'/products'}
                >
                    &nbsp; <span className='text-pink-600'> / </span>
                    Product&nbsp;
                </Link>
            )}
            / {title}
        </div>
    );
};

export default PageHero;
