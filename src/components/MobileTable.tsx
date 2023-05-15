import { EmployeeType } from '../types';
import MobileTableRow from './MobileTableRow';

type PropsType = {
  employees: EmployeeType[];
};

const MobileTable = ({ employees }: PropsType) => {
  return (
    <table className='block w-full text-left text-gray-600'>
      <thead className='block bg-table-100 text-gray-50'>
        <tr className='absolute left-[-9999px] top-[-9999px] block'>
          <th className='block p-4'>Name</th>
          <th className='block p-4'>Address</th>
          <th className='block p-4'>City</th>
          <th className='block p-4'>State</th>
          <th className='block p-4'>Zipcode</th>
          <th className='block p-4'>Job Title</th>
          <th className='block p-4'>Status</th>
        </tr>
      </thead>
      <tbody className='block'>
        {employees.map((employee, index) => (
          <MobileTableRow employee={employee} index={index} key={employee.id} />
        ))}
      </tbody>
    </table>
  );
};

export default MobileTable;
