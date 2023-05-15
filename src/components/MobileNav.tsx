import { Link } from 'react-router-dom';
import { UserType } from '../types';

type PropsType = {
  user: UserType | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => Promise<void>;
};

const MobileNav = ({ user, open, setOpen, logout }: PropsType) => {
  return (
    <nav
      className={`${
        !open
          ? 'hidden'
          : 'absolute left-0 right-0 z-10 mx-2.5 flex flex-col gap-5 rounded-md bg-table-100 p-2'
      } font-lexbold sm:left-auto sm:w-64 lg:hidden`}
      onClick={() => setOpen(false)}
    >
      {user ? (
        <>
          <Link to='/add' className='rounded-md p-2'>
            Add Employee
          </Link>
          <button onClick={() => logout()} className='rounded-md p-2 text-left'>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to='/login' className='rounded-md p-2'>
            Login
          </Link>
          <Link to='/signup' className='rounded-md p-2'>
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
};

export default MobileNav;
