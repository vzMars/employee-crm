import { useAuthContext } from './useAuthContext';
import { useEmployeeContext } from './useEmployeeContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: employeeDispatch } = useEmployeeContext();

  const logout = async () => {
    const response = await fetch(
      'https://api.employeemanager.vzmars.com/api/auth/logout',
      {
        method: 'GET',
        credentials: 'include',
      }
    );

    if (response.ok) {
      dispatch({ type: 'LOGOUT' });
      employeeDispatch({ type: 'SET', payload: [] });
    }
  };

  return { logout };
};
