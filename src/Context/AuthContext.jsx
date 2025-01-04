import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import {
  getLocalStorage,
  setLocalStorage,
} from '../Components/LocalStorage/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();

    const { users } = getLocalStorage();
    setUserData(users);
  }, []);

  return (
    <>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider