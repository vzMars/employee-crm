import { EmployeeType } from '../types';
import TableRow from './TableRow';

type PropsType = {
  employees: EmployeeType[];
};

const Table = ({ employees }: PropsType) => {
  return (
    <table className='w-full text-left text-gray-600'>
      <thead className='bg-table-100 text-gray-50'>
        <tr>
          <th className='p-4'>Name</th>
          <th className='p-4'>Address</th>
          <th className='p-4'>City</th>
          <th className='p-4'>State</th>
          <th className='p-4'>Zip Code</th>
          <th className='p-4'>Job Title</th>
          <th className='p-4'>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <TableRow employee={employee} index={index} key={employee.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
