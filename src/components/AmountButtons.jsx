import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ amount, decrease, increase }) => {
    return (
        <div className='flex gap-5 text-md items-center my-3 text-white'>
            <Button onClick={decrease} color='red' icon={<FaMinus />} />
            <p className='text-black'>{amount}</p>
            <Button onClick={increase} color='green' icon={<FaPlus />} />
        </div>
    );
};

export default AmountButtons;
const Button = ({ onClick, color, icon }) => {
    return (
        <button
            style={{ backgroundColor: color }}
            className={`p-1 cursor-pointer transition hover:scale-x-105  rounded-full shadow-md focus:shadow-2xl`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};
