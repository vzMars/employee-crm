import { EmployeeType } from '../types';
import Table from './Table';
import MobileTable from './MobileTable';

type PropsType = {
  employees: EmployeeType[];
};

const EmployeeTable = ({ employees }: PropsType) => {
  return (
    <>
      <div className='relative hidden overflow-x-auto rounded-lg shadow-md md:block'>
        <Table employees={employees} />
      </div>
      <div className='relative overflow-x-auto rounded-lg shadow-md md:hidden'>
        <MobileTable employees={employees} />
      </div>
    </>
  );
};

export default EmployeeTable;
