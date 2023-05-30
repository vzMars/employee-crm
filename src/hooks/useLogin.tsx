import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useEmployeeContext } from './useEmployeeContext';
import { getEmployees } from '../services/getEmployees';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { dispatch: employeeDispatch } = useEmployeeContext();

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'https://api.employeemanager.vzmars.com/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      dispatch({ type: 'LOGIN', payload: json.user });
      getEmployees(employeeDispatch);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
