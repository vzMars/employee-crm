import { Link } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='fixed top-0 w-full text-gray-50'>
      <section className='mx-auto flex max-w-6xl items-center justify-between p-4'>
        <Link
          to='/'
          className='text-3xl font-lexbold'
          onClick={() => setOpen(false)}
        >
          Employee CRM
        </Link>
        <div className='lg:hidden'>
          <Hamburger toggled={open} toggle={setOpen} rounded size={32} />
        </div>
        <Nav />
      </section>
      <MobileNav open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
