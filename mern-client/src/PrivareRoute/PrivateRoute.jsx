import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';
const PrivateRoute = ({children}) => {
    const {user ,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spinner aria-label="Default status example" />;
    }
    if(user){
        return children;
    }
  return (
    <Navigate to="/login" state={{form: location}} replace></Navigate>
  )
}

export default PrivateRoute