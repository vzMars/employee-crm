import { Link } from 'react-router-dom';

type PropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ open, setOpen }: PropsType) => {
  return (
    <nav
      className={`${
        !open
          ? 'hidden'
          : 'absolute left-0 right-0 z-10 mx-2.5 flex flex-col gap-5 rounded-md bg-table-100 p-2'
      } sm:left-auto sm:w-64 lg:hidden font-lexbold`}
      onClick={() => setOpen(false)}
    >
      <>
        <Link to='/login' className='rounded-md p-2'>
          Login
        </Link>
        <Link to='/signup' className='rounded-md p-2'>
          Sign Up
        </Link>
      </>
    </nav>
  );
};

export default MobileNav;
