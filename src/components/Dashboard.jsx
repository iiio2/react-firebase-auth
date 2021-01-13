import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const id = localStorage.getItem('id');

  return (
    <div className='container mt-5'>
      {id && user && <h3>Welcome to dashboard</h3>}
      {id === null && user === null && (
        <p>
          You must sign in to view the page.
          <Link to='/signin'>Sign In</Link>
        </p>
      )}
    </div>
  );
};

export default Dashboard;
