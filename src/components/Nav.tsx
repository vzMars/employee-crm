import { Link } from 'react-router-dom';
import { UserType } from '../types';

type PropsType = {
  user: UserType | null;
  logout: () => Promise<void>;
};

const Nav = ({ user, logout }: PropsType) => {
  return (
    <nav className='hidden h-12 items-center space-x-6 text-lg font-lexbold lg:flex'>
      {user ? (
        <>
          <Link to='/create'>Create Employee</Link>
          <button
            onClick={() => logout()}
            className='rounded-md px-2.5 py-2 bg-table-100'
          >
            Logout
          </button>
        </>
      ) : (
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
      )}
    </nav>
  );
};

export default Nav;
