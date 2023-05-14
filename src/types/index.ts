import { ReactElement } from 'react';

export type ChildrenType = { children?: ReactElement | ReactElement[] };

// AuthContext
export type UserType = {
  id: string;
  email: string;
  username: string;
};

export type AuthStateType = {
  user: UserType | null;
  isLoading: boolean;
};

export type AuthContextType = {
  user: UserType | null;
  isLoading: boolean;
  dispatch: React.Dispatch<AuthReducerAction>;
};

export type AuthReducerAction =
  | { type: 'LOGIN'; payload: UserType }
  | { type: 'LOGOUT' };

// EmployeeContext
export type EmployeeType = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  jobTitle: string;
  status: string;
  userId: string;
};

export type EmployeeStateType = {
  employees: EmployeeType[];
  isLoading: boolean;
};

export type EmployeeContextType = {
  employees: EmployeeType[];
  isLoading: boolean;
  dispatch: React.Dispatch<EmployeeReducerAction>;
};

export type EmployeeReducerAction =
  | { type: 'SET'; payload: EmployeeType[] }
  | { type: 'CREATE'; payload: EmployeeType }
  | { type: 'UPDATE'; payload: EmployeeType }
  | { type: 'DELETE'; payload: string };
