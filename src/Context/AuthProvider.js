import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';





export const AuthContext = createContext();
const auth = getAuth(app);




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setloader] = useState(true);


    const createUser = (email, password) => {
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setloader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setloader(false)
        })
        return () => unsubscribe();
    }, [])

    const logout = () => {
        return signOut(auth);
    }



    const authInfo = {
        createUser,
        user,
        loader,
        login,
        logout
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;