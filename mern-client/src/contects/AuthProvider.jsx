import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Replace Firebase authentication functions with your desired authentication logic
  const createUser = (email, password) => {
    // Implement your custom user creation logic here
    // For example, you could use a backend API or a different authentication service
    setLoading(true);
    // Simulate a successful user creation for demonstration purposes
    setUser({ email, password });
    setLoading(false);
  };

  const login = (email, password) => {
    // Implement your custom login logic here
    // For example, you could use a backend API or a different authentication service
    setLoading(true);
    // Simulate a successful login for demonstration purposes
    setUser({ email, password });
    setLoading(false);
  };

  const logOut = () => {
    // Implement your custom logout logic here
    // For example, you could clear user data from local storage or session storage
    setUser(null);
  };

  useEffect(() => {
    // Replace Firebase's onAuthStateChanged with your custom user state management
    // For example, you could fetch user data from a backend API or use local storage
    // Simulate fetching user data for demonstration purposes
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

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