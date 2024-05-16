import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
    const { total_items } = useCartContext();
    const { loginWithRedirect, logout, User } = useUserContext();
    return (
        <div className='flex items-center justify-between gap-4'>
            <Link
                to={'/cart'}
                className='relative hover:drop-shadow-md cursor-pointer'
            >
                <FaShoppingCart className='text-2xl text-black transition1000' />
                <span className='absolute bottom-3 left-3 bg-black -z-50 w-7 h-7 flex justify-center items-center rounded-full text-xs text-white font-semibold'>
                    {total_items}
                </span>
            </Link>
            {!User ? (
                <button
                    onClick={loginWithRedirect}
                    className='ml-4 uppercase text-sm bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-800 hover:shadow-md transition1000 flex items-center'
                >
                    Log In &nbsp;&nbsp;
                    <FiLogIn />
                </button>
            ) : (
                <button
                    className='ml-4 uppercase text-sm bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-800 hover:shadow-md transition1000 flex items-center'
                    type='submit'
                    onClick={() => logout({ returnTo: location.origin })}
                >
                    Log Out &nbsp;&nbsp;
                    <FiLogOut />
                </button>
            )}
        </div>
    );
};

export default CartButtons;
