import { useState, useContext } from 'react';
import { auth } from '../firebase/init';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [passord, setPassword] = useState('');
  const [name, setName] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    const user = await auth.signInWithEmailAndPassword(email, passord);

    localStorage.setItem('id', user.user.uid);
    localStorage.setItem('token', user.user.ya);

    console.log(user.user.displayName);
    const name = user.user.displayName;
    setName(name);

    console.log(`email${email} | password ${passord}`);
  };

  const signOut = async (e) => {
    e.preventDefault();

    await auth.signOut();
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  };

  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  return (
    <div className='container mt-5'>
      {id && token && user && (
        <p>
          {user.uid} | <button onClick={signOut}>Signout</button>{' '}
        </p>
      )}

      {id === null && user === null && (
        <form onSubmit={submit}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              value={passord}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='btn btn-dark'>Sign In</button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
