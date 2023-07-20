import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import Error from '../components/Error';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(username, password);
  };

  const handleGuestLogin = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    await login("rambobarbershop", "Mike123!");
  };

  return (
    <main className='font-lexreg text-table-100'>
      <section className='mx-auto max-w-6xl px-4 pt-16 md:pt-40'>
        <form
          className='mx-auto flex max-w-sm flex-col rounded-md border border-table-100 bg-gray-50 p-4 py-12'
          onSubmit={handleSubmit}
        >
          <div onClick={handleGuestLogin} className='rounded-md bg-table-100 px-2.5 py-2 font-lexbold text-gray-50 self-end cursor-pointer'>
            Guest Login
          </div>
          <h1 className='mb-6 font-lexbold text-4xl'>Login</h1>
          <label className='mb-1'>Username</label>
          <input
            type='text'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <label className='mb-1'>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <button
            disabled={isLoading}
            className='mb-6 w-full rounded-md bg-table-100 px-2.5 py-2 font-lexbold text-gray-50'
          >
            Login
          </button>
          {error && <Error errorMessage={error} />}
        </form>
      </section>
    </main>
  );
};

export default Login;
