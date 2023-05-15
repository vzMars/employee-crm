import { EmployeeType } from '../types';
import { Link, useNavigate } from 'react-router-dom';
import { useEmployeeContext } from '../hooks/useEmployeeContext';

type PropsType = {
  employee: EmployeeType;
};

const EmployeeDetailsCard = ({ employee }: PropsType) => {
  const { dispatch } = useEmployeeContext();
  const navigate = useNavigate();

  const deleteEmployee = async (id: string) => {
    const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (response.ok) {
      dispatch({ type: 'DELETE', payload: id });
      navigate('/');
    }
  };

  return (
    <div className='mx-auto max-w-3xl'>
      <div className='mb-4 overflow-hidden rounded-md border border-table-100 bg-gray-50 text-table-100'>
        <div className='bg-table-100 p-2 text-gray-50'>
          <h2 className='font-lexbold text-2xl'>{employee.name}</h2>
        </div>
        <p className='my-2 p-2'>Address: {employee.address}</p>
        <p className='my-2 p-2'>City: {employee.city}</p>
        <p className='my-2 p-2'>State: {employee.state}</p>
        <p className='my-2 p-2'>Zip Code: {employee.zipcode}</p>
        <p className='my-2 p-2'>Job Title: {employee.jobTitle}</p>
        <p className='my-2 p-2'>Status: {employee.status}</p>
      </div>
      <div className='flex space-x-2'>
        <Link
          to='/'
          className='rounded-md bg-table-100 px-1.5 py-2 text-center'
        >
          Back
        </Link>
        {/* <Link
          to='/'
          className='rounded-md bg-table-100 px-1.5 py-2 text-center'
        >
          Update Employee
        </Link> */}
        <button
          className='rounded-md bg-table-100 px-1.5 py-2 text-center'
          onClick={() => deleteEmployee(employee.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetailsCard;
