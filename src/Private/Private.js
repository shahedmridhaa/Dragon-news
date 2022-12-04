import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Context/Authprovider/Authprovider';

const Private = ({children}) => {
    const location = useLocation()
    const {user , loading} = useContext(Authcontext)
        
       if(loading){
        return  <Spinner animation="border" variant="primary" />

       }
  
        if(!user){
            return <Navigate to="/login" state = {{from: location}} replace></Navigate>;
        }
        else{
            return children;
    }
  
};

export default Private;