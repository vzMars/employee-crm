import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import Hamburger from 'hamburger-react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { useLogout } from '../hooks/useLogout';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <header className='w-full text-gray-50'>
      <section className='mx-auto flex max-w-6xl items-center justify-between p-4'>
        <Link
          to='/'
          className='font-lexbold text-3xl'
          onClick={() => setOpen(false)}
        >
          Employee Manager
        </Link>
        <div className='lg:hidden'>
          <Hamburger toggled={open} toggle={setOpen} rounded size={32} />
        </div>
        <Nav user={user} logout={logout} />
      </section>
      <MobileNav user={user} open={open} setOpen={setOpen} logout={logout} />
    </header>
  );
};

export default Header;
