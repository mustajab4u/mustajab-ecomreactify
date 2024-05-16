import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartColumns, CartItem, CartTotals } from '.';
const CartContent = () => {
    const { clearCart } = useCartContext();
    return (
        <div className='container mx-auto cursor-pointer'>
            <CartItem />
            <div className='underlineImp h-[1px]' />
            <div className='flex justify-between px-6 py-4'>
                <Link
                    to={'/products'}
                    className='bg-green-500 hover:bg-green-600 p-3 rounded-md shadow-md hover:shadow-lg font-bold transition1000 hover:text-white'
                >
                    Continue Shopping
                </Link>
                <button
                    className='bg-red-500 hover:bg-red-800 p-3 rounded-md shadow-md hover:shadow-lg font-bold transition1000 hover:text-white'
                    onClick={clearCart}
                >
                    Clear Cart
                </button>
            </div>
        </div>
    );
};

export default CartContent;
