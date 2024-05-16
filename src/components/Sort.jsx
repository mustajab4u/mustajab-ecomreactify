import { useFilterContext } from '../context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = () => {
    const {
        filtered_product: products,
        setGridView,
        grid_view,
        setListView,
        updateSort,
        sort,
    } = useFilterContext();
    return (
        <div className='flex flex-col md:flex-row items-center justify-between mb-4'>
            <div className='flex items-center justify-center mb-2 md:mb-0'>
                <BsFillGridFill
                    className={`text-3xl mr-2 text-black cursor-pointer transition1000 hover:bg-black hover:text-white rounded-md p-1 shadow-md ${
                        grid_view ? 'bg-black text-white' : null
                    }`}
                    onClick={setGridView}
                />
                <BsList
                    className={`text-3xl mr-2 text-black cursor-pointer transition1000 hover:bg-black hover:text-white rounded-md p-1 shadow-md ${
                        grid_view ? null : 'bg-black text-white'
                    }`}
                    onClick={setListView}
                />
                <p className='text-gray-600 ml-2'>
                    {products.length}&nbsp;Products Found
                </p>
            </div>
            <div className='hidden md:block underlineImp w-full md:w-[50%] h-[3px]'></div>
            <div className='w-full md:w-auto'>
                <select
                    name='sort'
                    id='sort'
                    className='bg-slate-100/90 shadow-md p-3 border focus:border-violet-500 outline-none'
                    defaultValue={sort}
                    onClick={updateSort}
                >
                    <option value='price-lowest'>Price (Lowest)</option>
                    <option value='price-highest'>Price (Highest)</option>
                    <option value='name-a'>Name (A-Z)</option>
                    <option value='name-z'>Name (Z-A)</option>
                </select>
            </div>
        </div>
    );
};

export default Sort;
