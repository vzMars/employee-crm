import { EmployeeType } from '../types';

type PropsType = {
  employee: EmployeeType;
  index: number;
};

const MobileTableRow = ({ employee, index }: PropsType) => {
  return (
    <tr className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'} block`}>
      <td
        className={`relative block p-4 pl-[50%] before:absolute before:left-0 before:top-0 before:w-2/5 before:whitespace-nowrap before:p-4 before:content-['Name']`}
      >
        {employee.name}
      </td>
      <td
        className={`relative block p-4 pl-[50%] before:absolute before:left-0 before:top-0 before:w-2/5 before:whitespace-nowrap before:p-4 before:content-['Address']`}
      >
        {employee.address}
      </td>
      <td
        className={`relative block p-4 pl-[50%] before:absolute before:left-0 before:top-0 before:w-2/5 before:whitespace-nowrap before:p-4 before:content-['City']`}
      >
        {employee.city}
      </td>
      <td
        className={`relative block p-4 pl-[50%] before:absolute before:left-0 before:top-0 before:w-2/5 before:whitespace-nowrap before:p-4 before:content-['State']`}
      >
        {employee.state}
      </td>
      <td
        className={`relative block p-4 pl-[50%] before:absolute before:left-0 before:top-0 before:w-2/5 before:whitespace-nowrap before:p-4 before:content-['Zip_Code']`}
      >
        {employee.zipcode}
      </td>
      <td
        className={`relative block p-4 pl-[50%] before:absolute before:left-0 before:top-0 before:w-2/5 before:whitespace-nowrap before:p-4 before:content-['Job_Title']`}
      >
        {employee.jobTitle}
      </td>
      <td
        className={`relative block p-4 pl-[50%] before:absolute before:left-0 before:top-0 before:w-2/5 before:whitespace-nowrap before:p-4 before:content-['Status']`}
      >
        {employee.status}
      </td>
    </tr>
  );
};

export default MobileTableRow;
