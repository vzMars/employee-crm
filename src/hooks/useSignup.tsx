import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useEmployeeContext } from './useEmployeeContext';
import { getEmployees } from '../services/getEmployees';

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const { dispatch: employeeDispatch } = useEmployeeContext();

  const signup = async (email: string, username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('http://localhost:8080/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, username, password }),
    });

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

  return { signup, isLoading, error };
};

export default useSignup;
