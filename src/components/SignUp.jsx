import { useState, useContext } from 'react';
import { auth } from '../firebase/init';
import { AuthContext } from '../contexts/AuthContext';

const SignUp = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passord, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    const user = await auth.createUserWithEmailAndPassword(email, passord);

    user.user.updateProfile({
      displayName: name,
    });

    localStorage.setItem('id', user.user.uid);
    localStorage.setItem('token', user.user.ya);

    console.log(user);

    console.log(`user is : ${name} | ${email} |${passord}`);
  };

  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  return (
    <div className='container mt-5'>
      {id && token && user && <h4>You have already joined as {id}</h4>}
      {id === null && user === null && (
        <form onSubmit={submit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
          <button className='btn btn-info'>Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
