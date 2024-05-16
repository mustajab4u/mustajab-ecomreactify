import { PageHero, StripeCheckout } from '../components';
// extra imports
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const { cart } = useCartContext();
    return (
        <div>
            <PageHero title='Check Out' />
            {cart.length < 1 ? (
                <div className='w-full px-16 md:px-0 h-[70vh] flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl'>
                        <p className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider'>
                            Your cart is empty
                        </p>
                        <p className='mt-4 pb-4 border-b-2 text-center'>
                            You have not added any items to your cart yet.
                        </p>
                        <Link
                            className='flex items-center space-x-2 bg-violet-400 hover:bg-violet-600 text-white px-4 py-2 mt-6 rounded transition1000 duration-150'
                            to={'/products'}
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            ) : (
                <StripeCheckout />
            )}
        </div>
    );
};

export default CheckoutPage;
