import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ShoppingCartContext } from '../../context';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  const session = JSON.parse(localStorage.getItem('sign-in'));
  const user = JSON.parse(localStorage.getItem('account'));

  const handleSignout = () => {
    localStorage.setItem('sign-in', false);
    context.setIsLogged(false);
  }

  const renderUserOptions = () => {
    if (session === true) {
      return (
        <ul className="flex items-center gap-3">
          <li className='text-black/60'>{user.email}</li>
          <li>
            <NavLink
              to={'/my-orders'}
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/my-account'}
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/sign-in'}
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
              onClick={() => handleSignout()}
            >
              Sign out
            </NavLink>
          </li>
          <li
            className='flex items-center cursor-pointer'
            onClick={() => {
              context.openCheckoutSideMenu();
              context.closeProductDetail();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {context.counter}
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex items-center gap-4">
          <li className='p-2 w-16 text-center border border-black/50 rounded-lg '>
            <NavLink
              to={'/sign-in'}
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/sign-up'}
              className={({ isActive }) => {
                return isActive ? activeStyle : undefined;
              }}
            >
              Sign Up
            </NavLink>
          </li>
          <li
            className='flex items-center cursor-pointer'
            onClick={() => {
              context.openCheckoutSideMenu();
              context.closeProductDetail();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {context.counter}
          </li>
        </ul>
      );
    }
  }

  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold">
          <NavLink to={'/'} onClick={() => context.setSearchByCategory('')}>Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to={'/'}
            onClick={() => context.setSearchByCategory('')}
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/clothes'}
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/electronics'}
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/furnitures'}
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/toys'}
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/others'}
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
          >
            Others
          </NavLink>
        </li>
      </ul>

      {renderUserOptions()}
    </nav>
  );
};

export default Navbar;
