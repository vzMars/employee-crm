import { EmployeeReducerAction } from '../types';

export const getEmployees = async (
  dispatch: React.Dispatch<EmployeeReducerAction>
) => {
  const response = await fetch(
    'https://api.employeecrm.vzmars.com/api/employees',
    {
      method: 'GET',
      credentials: 'include',
    }
  );

  if (!response.ok) {
    dispatch({ type: 'SET', payload: [] });
  }

  if (response.ok) {
    const json = await response.json();
    dispatch({ type: 'SET', payload: json });
  }
};
