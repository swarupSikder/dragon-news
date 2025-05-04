import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { updateProfile } from 'firebase/auth/web-extension';

export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create account or Register 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }



    //SignIn
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



    //SignOut
    const logOut = () => {
        return signOut(auth);
    }




    //update user profile
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }




    //onAuthStateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false);
        });

        return ()=>{
            unSubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;