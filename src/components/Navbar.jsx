// In Nav component
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartButtons, Sidebar } from '.';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';
import { menuIcon, links, siteName } from '../utils/constants';

const Nav = () => {
  const {
    state: { showSidebar },
    toggleSideBar,
  } = useProductsContext();
  const { User } = useUserContext();
  return (
    <header className="bg-slate-100/90 text-black font-semibold sticky inset-0 z-50 px-8 py-4 shadow-md transition hover:shadow-lg hover:shadow-violet-200 shadow-violet-100 select-none backdrop-blur-sm">
      <div className="bg-red-500 text-white py-1 mb-2 tex-center">
        ⚠Please install{' '}
        <a
          href="https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino?hl=en&pli=1"
          target="_blank"
          className='text-blue-800 underline font-extrabold'
        >
          this
        </a>{' '}
        extension for this website to work properly.⚠ - CORS Issue
      </div>
      <nav className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="md:text-xl font-extrabold gradText sm:text-lg">
          {siteName}
        </h1>
        <div className="hidden items-center sm:flex gap-8 justify-between">
          {' '}
          {/* Hide on small screens */}
          {links.map(({ id, text, url }) => (
            <Link
              key={id}
              className="cursor-pointer transition hover:gradText uppercase"
              to={url}
            >
              {text}
            </Link>
          ))}
          {User && (
            <Link
              className="cursor-pointer gradText font-extrabold transition hover:gradText uppercase"
              to={'/checkout'}
            >
              CheckOut
            </Link>
          )}
        </div>
        <div className="hidden md:block">
          <CartButtons />
        </div>
        <div className="flex gap-3 items-center transition">
          <div
            className="hover:drop-shadow-md cursor-pointer transition sm:hidden"
            onClick={toggleSideBar}
          >
            {menuIcon}
          </div>
        </div>
      </nav>
      <Sidebar show={showSidebar} toggle={toggleSideBar} />
    </header>
  );
};

export default Nav;
