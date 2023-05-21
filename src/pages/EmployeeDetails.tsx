import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EmployeeType } from '../types';
import EmployeeDetailsCard from '../components/EmployeeDetailsCard';
import Loader from '../components/Loader';

const EmployeeDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [employee, setEmployee] = useState<EmployeeType | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkPostId = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://api.employeecrm.vzmars.com/api/employees/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        navigate('/404');
      }

      if (response.ok) {
        setEmployee(json);
        setIsLoading(false);
      }
    };

    checkPostId();
  }, [id, navigate]);

  return (
    <main className='font-lexreg text-white'>
      <section className='mx-auto max-w-6xl px-4 pt-16'>
        {!isLoading && employee ? (
          <EmployeeDetailsCard employee={employee} />
        ) : (
          <div className='text-center'>
            <Loader />
          </div>
        )}
      </section>
    </main>
  );
};

export default EmployeeDetails;
