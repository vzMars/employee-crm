import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmployeeContext } from '../hooks/useEmployeeContext';
import Error from '../components/Error';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [status, setStatus] = useState('ACTIVE');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useEmployeeContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'https://api.employeecrm.vzmars.com/api/employees',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name,
          address,
          city,
          state,
          zipcode,
          jobTitle,
          status,
        }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      dispatch({ type: 'CREATE', payload: json });
      navigate('/');
    }
  };

  return (
    <main className='font-lexreg text-table-100'>
      <section className='mx-auto max-w-6xl px-4 pt-16 md:pt-40'>
        <form
          className='mx-auto flex max-w-xl flex-col rounded-md border border-table-100 bg-gray-50 p-4 py-12'
          onSubmit={handleSubmit}
        >
          <h1 className='mb-6 font-lexbold text-4xl'>Add Employee</h1>
          <label className='mb-1' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            id='name'
            placeholder='Employee name here...'
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <label className='mb-1' htmlFor='address'>
            Address
          </label>
          <input
            type='text'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            id='address'
            placeholder='Employee address here...'
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <label className='mb-1' htmlFor='city'>
            City
          </label>
          <input
            type='text'
            onChange={(e) => setCity(e.target.value)}
            value={city}
            id='city'
            placeholder='Employee city here...'
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <label className='mb-1' htmlFor='state'>
            State
          </label>
          <input
            type='text'
            onChange={(e) => setState(e.target.value)}
            value={state}
            id='state'
            placeholder='Employee state here...'
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <label className='mb-1' htmlFor='zipcode'>
            Zip Code
          </label>
          <input
            type='text'
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
            id='zipcode'
            placeholder='Employee zip code here...'
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <label className='mb-1' htmlFor='jobTitle'>
            Job Title
          </label>
          <input
            type='text'
            onChange={(e) => setJobTitle(e.target.value)}
            value={jobTitle}
            id='jobTitle'
            placeholder='Employee job title here...'
            className='mb-6 rounded-md border border-table-100 p-2'
          />
          <fieldset className='mb-6'>
            <legend>Status</legend>
            <p className='flex gap-2'>
              <input
                type='radio'
                name='status'
                value='ACTIVE'
                id='ACTIVE'
                onChange={(e) => setStatus(e.target.value)}
                checked={status === 'ACTIVE'}
              />
              <label htmlFor='ACTIVE'>ACTIVE</label>
            </p>
            <p className='flex gap-2'>
              <input
                type='radio'
                name='status'
                value='INACTIVE'
                id='INACTIVE'
                onChange={(e) => setStatus(e.target.value)}
                checked={status === 'INACTIVE'}
              />
              <label htmlFor='INACTIVE'>INACTIVE</label>
            </p>
          </fieldset>
          <button
            disabled={isLoading}
            className='mb-6 w-full rounded-md bg-table-100 px-2.5 py-2 font-lexbold text-gray-50'
          >
            Add
          </button>
          {error && <Error errorMessage={error} />}
        </form>
      </section>
    </main>
  );
};

export default AddEmployee;
