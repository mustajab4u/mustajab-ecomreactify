import { FiLogIn } from 'react-icons/fi';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartTotals = () => {
    const { total_amount, shipping_fee } = useCartContext();
    const { User, loginWithRedirect } = useUserContext();
    return (
        <div className='container mx-auto flex justify-end select-none'>
            <div className='shadow-md hover:shadow-xl w-1/3 p-6 rounded-md transition bg-violet-200/30 font-semibold'>
                <h4 className='flex justify-between items-center'>
                    SubTotal <span>{formatPrice(total_amount)}</span>
                </h4>
                <h4 className='flex justify-between items-center'>
                    Shipping <span>{formatPrice(shipping_fee)}</span>
                </h4>
                <div className='underlineImp h-[1px]' />
                <h4 className='flex justify-between items-center mt-2'>
                    Total Order
                    <span className='gradText drop-shadow-md animate-bounce'>
                        {formatPrice(shipping_fee + total_amount)}
                    </span>
                </h4>
                <div className='flex py-3'>
                    {User ? (
                        <Link
                            to={'/checkout'}
                            className='bg-violet-400 hover:bg-violet-600 p-2 text-sm rounded-md shadow-md hover:shadow-lg font-semibold transition text-white uppercase px-5 py-3 flex items-center'
                        >
                            Time To Check Out
                        </Link>
                    ) : (
                        <button
                            onClick={loginWithRedirect}
                            className='uppercase text-sm bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-800 hover:shadow-md transition flex items-center p-2 shadow-md font-semibold'
                        >
                            Log In &nbsp;&nbsp;
                            <FiLogIn />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default CartTotals;
