import { FaHeart, FaTrash } from 'react-icons/fa';

const CartColumns = () => {
    return (
        <thead className='text-xs uppercase gradText hover:bg-slate-300/30 transition1000'>
            <tr>
                <th scope='col' className='p-4'></th>
                <th scope='col' className='px-6 py-3'>
                    Name
                </th>
                <th scope='col' className='px-6 py-3'>
                    Price
                </th>
                <th scope='col' className='px-6 py-3 pl-10'>
                    amount
                </th>
                <th scope='col' className='px-6 py-3'>
                    subtotal
                </th>
            </tr>
        </thead>
    );
};

export default CartColumns;
