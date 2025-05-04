import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();



    if(loading){
        return <p>loading...</p>
    }




    //if user exists, return the children
    if(user && user?.email){
        return children;
    }
    //if not, navigate to login page
    else{
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
};

export default PrivateRoute;