import { useEmployeeContext } from '../hooks/useEmployeeContext';
import EmployeeTable from '../components/EmployeeTable';

const Home = () => {
  const { employees } = useEmployeeContext();

  return (
    <main className='font-lexreg'>
      <section className='mx-auto max-w-6xl px-4 pt-16'>
        <EmployeeTable employees={employees} />
      </section>
    </main>
  );
};

export default Home;
