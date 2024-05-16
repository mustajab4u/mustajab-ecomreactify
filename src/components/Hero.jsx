import { Link } from 'react-router-dom';
import bg from '../assets/bg2.png';
const Hero = () => {
    return (
        <div className='relative min-h-screen'>
            <img
                className='absolute inset-0 object-cover w-full h-full'
                src={bg}
                alt='Hero Section Background'
            />
            <div className='absolute inset-0 bg-gradient-to-tl from-teal-400 to-purple-400 mix-blend-multiply'></div>
            <div className='relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-full flex flex-col items-center sm:flex-row'>
                <div className='py-32 md:text-start text-center w-full'>
                    <h1 className='text-4xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl lg:text-6xl'>
                        Welcome to{' '}
                        <span className='gradText'>
                            EcomReactify with us today
                        </span>
                    </h1>
                    <p className='mt-4 text-base text-white sm:text-lg w-full md:text-xl lg:text-2xl md:w-3/4'>
                        Discover the latest fashion trends and shop our curated
                        collections of clothing, shoes, and accessories.
                    </p>
                    <div className='flex flex-col md:flex-row mt-4 gap-4 items-center'>
                        <Link
                            to='products'
                            className='md:w-fit px-8 py-3 text-base font-medium text-white bg-purple-600 text-center rounded-md hover:bg-purple-700 sm:py-3 sm:text-lg sm:px-10 lg:text-xl w-full'
                        >
                            Shop Now
                        </Link>
                        <Link
                            to='about'
                            className='md:w-fit px-8 py-3 text-base font-medium text-purple-700 bg-purple-100 text-center rounded-md hover:bg-purple-200 sm:py-3 sm:text-lg sm:px-10 lg:text-xl w-full'
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
