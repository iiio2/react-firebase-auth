import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container mt-5'>
      <h3>Hello,World</h3>
      <Link to='/join'>Go to Sign Up Page</Link> <br />
      <Link to='/signin'>Go to Sign In Page</Link> <br />
      <Link to='/dashboard'>Dashboard Page</Link>
    </div>
  );
};

export default Home;
