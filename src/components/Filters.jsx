import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, getUniqueColor, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const Filters = () => {
    const {
        filters: {
            max_price,
            min_price,
            price,
            category,
            colors,
            text,
            company,
            shipping,
        },
        updateFilter,
        clearFilter,
        all_products,
    } = useFilterContext();

    const categories = getUniqueValues(all_products, 'category');
    const companies = getUniqueValues(all_products, 'company');
    const color = getUniqueColor(all_products, 'colors');
    return (
        <div className='w-full md:w-[20em]'>
            <form onSubmit={e => e.preventDefault()}>
                <input
                    type='text'
                    name='text'
                    value={text}
                    placeholder='Search . . .'
                    onChange={updateFilter}
                    className={`w-full md:w-3/4 text-left p-2 rounded-md shadow-md block font-bold capitalize bg-violet-400/50 text-white transition focus:bg-violet-400 shadow-violet-500 hover:drop-shadow-lg outline-none`}
                />
            </form>
            <div className='flex flex-col gap-4 my-3'>
                <h5 className='text-xl font-extrabold uppercase mt-3 -mb-2 w-fit gradText'>
                    Category
                </h5>
                {categories.map((c, index) => {
                    return (
                        <button
                            key={index}
                            name='category'
                            onClick={updateFilter}
                            className={`w-full md:w-3/4 text-left p-2 rounded-md shadow-md  font-bold capitalize bg-violet-400/50 text-white transition focus:bg-violet-400 flex items-center justify-between shadow-violet-500`}
                        >
                            {c}
                            {c === category ? (
                                <FaCheck className={`text-white`} />
                            ) : null}
                        </button>
                    );
                })}
            </div>
            <div className='flex flex-col gap-4 my-3'>
                <h5 className='text-xl font-extrabold uppercase mt-3 -mb-2 w-fit gradText'>
                    Company
                </h5>
                <select
                    name='company'
                    id='company'
                    value={company}
                    onChange={updateFilter}
                    className='w-full md:w-3/4 p-2 outline-none text-left shadow-md block font-bold capitalize bg-violet-400/50 text-white transition focus:bg-violet-400 shadow-violet-500 hover:drop-shadow-lg'
                >
                    {companies.map((c, index) => {
                        return (
                            <option value={c} key={index}>
                                {c}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className='relative'>
                <button
                    data-color={'all'}
                    name='colors'
                    onClick={updateFilter}
                    className='relative top-[0.30rem] hover:drop-shadow-md font-bold mr-2'
                >
                    {colors === 'all' ? (
                        <FaCheck
                            className={`text-violet-400 absolute left-2 top-2`}
                        />
                    ) : null}
                    All
                </button>
                {color.map((c, index) => {
                    return (
                        <button
                            name='colors'
                            key={index}
                            style={{ background: c }}
                            className={`${
                                c === colors
                                    ? 'border-2 border-violet-300 drop-shadow-2xl transition'
                                    : null
                            } rounded-full m-1 p-3`}
                            onClick={updateFilter}
                            data-color={c}
                        >
                            {colors === c ? (
                                <FaCheck
                                    className={`text-violet-400 absolute`}
                                />
                            ) : null}
                        </button>
                    );
                })}
            </div>
            <div className='flex flex-col gap-1'>
                <h5 className='text-lg font-bold uppercase mt-3 -mb-2 w-fit gradText'>
                    Price
                </h5>
                <p className='font-bold text-md'>{formatPrice(price)}</p>
                <div className='relative mr-16'>
                    <input
                        type='range'
                        name='price'
                        id='price'
                        onChange={updateFilter}
                        min={min_price}
                        max={max_price}
                        value={price}
                        className='w-full h-1 bg-violet-500 rounded-full outline-none appearance-none'
                    />
                </div>
            </div>
            <div className='flex justify-between w-3/4 pr-2'>
                <h5 className='gradText w-fit font-bold'>Free shipping</h5>
                <input
                    type='checkbox'
                    name='shipping'
                    id='shipping'
                    onClick={updateFilter}
                />
            </div>
            <div className='mt-3'>
                <button
                    className='bg-red-600 text-white p-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-red-800 md:w-3/4 mb-4 w-full'
                    onClick={clearFilter}
                >
                    Clear Filters
                </button>
            </div>
        </div>
    );
};
export default Filters;
