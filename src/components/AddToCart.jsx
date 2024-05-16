import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { AmountButtons } from '.';

const AddToCart = ({ product, amount, setAmount }) => {
    const { addToCart } = useCartContext();
    const { id, stock, colors, price } = product;
    const [mainColor, setMainColor] = useState(colors[0]);
    const increase = () => {
        setAmount(oldAmount => {
            let newAmount = oldAmount + 1;
            return newAmount > stock ? stock : newAmount;
        });
    };

    const decrease = () => {
        setAmount(oldAmount => {
            let newAmount = oldAmount - 1;
            return newAmount < 1 ? 1 : newAmount;
        });
    };

    return (
        <div className=''>
            <AmountButtons
                amount={amount}
                increase={increase}
                decrease={decrease}
            />
            <div className='flex items-center px-4 justify-between'>
                <div>
                    {colors.map((color, index) => {
                        return (
                            <button
                                key={index}
                                style={{ background: color }}
                                className={`${
                                    color === mainColor
                                        ? 'border-2 border-violet-300 drop-shadow-2xl transition1000'
                                        : null
                                } rounded-full m-1 p-3`}
                                onClick={() => setMainColor(color)}
                            >
                                {color === mainColor ? (
                                    <FaCheck className={`text-neutral-400`} />
                                ) : null}
                            </button>
                        );
                    })}
                </div>

                <Link
                    to={'/cart'}
                    className='bg-violet-400 hover:bg-violet-500 transition1000 px-6 py-3 rounded-md shadow-xl hover:shadow-2xl text-white font-bold'
                    onClick={() => addToCart(id, mainColor, amount, product)}
                >
                    Add To Cart
                </Link>
            </div>
        </div>
    );
};
export default AddToCart;
