import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { CartButtons } from '.';
import { links } from '../utils/constants';
import { useUserContext } from '../context/user_context';
import { useState } from 'react';
import { useProductsContext } from '../context/products_context';

const Sidebar = () => {
    const {
        state: { showSidebar },
        toggleSideBar,
    } = useProductsContext();
    const { User } = useUserContext();
    return (
        <aside
            className={`absolute md:hidden block bg-slate-100 z-50 p-4 transition1000-all duration-1000 ease-in-out mt-4 right-0 h-screen w-1/2 py-8 ${
                showSidebar
                    ? 'transform translate-x-0 transition1000-transform'
                    : 'transform translate-x-full'
            }`}
        >
            <div className='flex justify-end items-center mr-2'>
                <FaTimes
                    className='text-4xl cursor-pointer transition1000 hover:rotate-180 hover:text-stone-500'
                    onClick={toggleSideBar}
                />
            </div>
            <div className='flex flex-col gap-4 my-8'>
                {links.map(({ id, text, url }) => (
                    <Link
                        key={id}
                        className='w-fit uppercase transition1000 hover:gradText m-2 font-bold'
                        to={url}
                        onClick={toggleSideBar}
                    >
                        {text}
                    </Link>
                ))}
                {User && (
                    <Link
                        className='cursor-pointer gradText font-extrabold transition1000 hover:gradText uppercase'
                        to={'/checkout'}
                    >
                        CheckOut
                    </Link>
                )}
                <CartButtons toggleSidebar={toggleSideBar} />
            </div>
        </aside>
    );
};

export default Sidebar;
