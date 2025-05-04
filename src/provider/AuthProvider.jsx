import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    //create account or Register 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }



    //SignIn
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }



    //SignOut
    const logOut = () => {
        return signOut(auth);
    }



    //onAuthStateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
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
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;