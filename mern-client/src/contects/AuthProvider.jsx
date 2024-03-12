import React, {useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged ,signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';
import { createContext } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut =() => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser => { 
      setUser(currentUser) 
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    }
  },[])

  const authInfo = {
    loading,
    user,
    createUser,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
