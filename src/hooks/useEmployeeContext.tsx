import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw Error('useEmployeeContext must be used inside an EmployeeProvider');
  }

  return context;
};
