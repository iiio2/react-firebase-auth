import { useState, createContext, useEffect } from 'react';
import { auth } from '../firebase/init';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, currentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        currentUser(user);
      } else {
        console.log('no user');
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
