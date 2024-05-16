import { formatPrice } from '../utils/helpers';
import { AmountButtons, CartColumns } from '.';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const CartItem = () => {
    const { cart, removeItem, toggleAmount } = useCartContext();
    return (
        <div className='overflow-x-auto'>
            <table className='w-full text-sm text-left rounded-md shadow-md'>
                <CartColumns />
                <tbody>
                    {cart.map(({ amount, id, name, color, price, image }) => {
                        const decrease = () => toggleAmount(id, 'dec');
                        const increase = () => toggleAmount(id, 'inc');
                        return (
                            <tr
                                className='bg-slate-300/20 hover:shadow-xl hover:bg-slate-400/20 transition1000'
                                key={id}
                            >
                                <td className='w-4 p-4'>
                                    <FaTrash
                                        className='transition1000 text-red-600 hover:scale-105 hover:shadow-2xl'
                                        onClick={() => removeItem(id)}
                                    />
                                </td>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center space-x-4'>
                                        <img
                                            className='w-10 h-10 rounded-full'
                                            src={image}
                                            alt='Jese image'
                                        />
                                        <div>
                                            <Link
                                                to={`/product/${id}`}
                                                className='text-base font-semibold'
                                            >
                                                {name}
                                            </Link>
                                            <div
                                                className='p-2 rounded-full w-[12px]'
                                                style={{
                                                    backgroundColor: color,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4'>
                                    {formatPrice(price)}
                                </td>
                                <td className='px-6 py-4'>
                                    <AmountButtons
                                        amount={amount}
                                        increase={increase}
                                        decrease={decrease}
                                    />
                                </td>
                                <td className='px-6 py-4'>
                                    {formatPrice(price,amount)}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CartItem;
