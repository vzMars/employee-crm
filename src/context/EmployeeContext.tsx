import { createContext, useReducer, useEffect, ReactElement } from 'react';
import Loader from '../components/Loader';
import { getEmployees } from '../services/getEmployees';
import {
  EmployeeStateType,
  EmployeeContextType,
  EmployeeReducerAction,
  ChildrenType,
} from '../types';

const initialState: EmployeeStateType = {
  employees: [],
  isLoading: true,
};

const initEmployeeContextState: EmployeeContextType = {
  employees: initialState.employees,
  isLoading: initialState.isLoading,
  dispatch: () => undefined,
};

export const EmployeeContext = createContext<EmployeeContextType>(
  initEmployeeContextState
);

export const employeeReducer = (
  state: EmployeeStateType,
  action: EmployeeReducerAction
): EmployeeStateType => {
  switch (action.type) {
    case 'SET':
      if (!action.payload) {
        throw new Error('action.payload missing in SET action');
      }

      return {
        employees: action.payload,
        isLoading: false,
      };
    case 'CREATE':
      if (!action.payload) {
        throw new Error('action.payload missing in CREATE action');
      }

      return {
        employees: [action.payload, ...state.employees],
        isLoading: false,
      };
    case 'UPDATE':
      if (!action.payload) {
        throw new Error('action.payload missing in UPDATE action');
      }

      return {
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
        isLoading: false,
      };
    case 'DELETE':
      if (!action.payload) {
        throw new Error('action.payload missing in DELETE action');
      }

      return {
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
        isLoading: false,
      };
    default:
      return state;
  }
};

export const EmployeeProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  useEffect(() => {
    getEmployees(dispatch);
  }, []);

  return (
    <>
      {state.isLoading ? (
        <Loader />
      ) : (
        <EmployeeContext.Provider value={{ ...state, dispatch }}>
          {children}
        </EmployeeContext.Provider>
      )}
    </>
  );
};
