import { EmployeeType } from '../types';
import { Link } from 'react-router-dom';

type PropsType = {
  employee: EmployeeType;
  index: number;
};

const TableRow = ({ employee, index }: PropsType) => {
  return (
    <tr className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}`}>
      <td className='p-4'>
        <Link
          to={`employee/${employee.id}`}
          className='font-semibold text-table-200'
        >
          {employee.name}
        </Link>
      </td>
      <td className='p-4'>{employee.address}</td>
      <td className='p-4'>{employee.city}</td>
      <td className='p-4'>{employee.state}</td>
      <td className='p-4'>{employee.zipcode}</td>
      <td className='p-4'>{employee.jobTitle}</td>
      <td className='p-4'>{employee.status}</td>
    </tr>
  );
};

export default TableRow;
