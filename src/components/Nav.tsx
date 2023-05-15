import { Link } from 'react-router-dom';
import { UserType } from '../types';

type PropsType = {
  user: UserType | null;
  logout: () => Promise<void>;
};

const Nav = ({ user, logout }: PropsType) => {
  return (
    <nav className='hidden h-12 items-center space-x-6 font-lexbold text-lg lg:flex'>
      {user ? (
        <>
          <Link to='/add'>Add Employee</Link>
          <button
            onClick={() => logout()}
            className='rounded-md bg-table-100 px-2.5 py-2'
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to='/login'
            className='rounded-md bg-gray-50 px-2.5 py-2 text-table-100'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='rounded-md bg-table-100 px-2.5 py-2 text-gray-50'
          >
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
