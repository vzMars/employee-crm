import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='hidden h-12 items-center space-x-6 text-lg font-lexbold lg:flex'>
      <>
        <Link
          to='/login'
          className='rounded-md text-table-100 bg-gray-50 px-2.5 py-2'
        >
          Login
        </Link>
        <Link
          to='/signup'
          className='rounded-md bg-table-100 text-gray-50 px-2.5 py-2'
        >
          Sign Up
        </Link>
      </>
    </nav>
  );
};

export default Nav;
