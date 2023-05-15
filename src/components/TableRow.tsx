import { EmployeeType } from '../types';

type PropsType = {
  employee: EmployeeType;
  index: number;
};

const TableRow = ({ employee, index }: PropsType) => {
  return (
    <tr className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}`}>
      <td className='p-4'>{employee.name}</td>
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
