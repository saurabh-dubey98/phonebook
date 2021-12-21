import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [userUID, setUserUID] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const navigate = useNavigate();

    const registerUser = async (email, password) => {
        try {
            const userData = await createUserWithEmailAndPassword(auth, email, password);
            setUserUID(userData.user.uid);
            navigate('/');
        } catch (error) {
            setRegisterError(error.message);
        }
    }

    const signIn = async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            setUserUID(user.user.uid);
            navigate('/');
        } catch (error) {
            setRegisterError(error.message);
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
            navigate('/signin');
            setUserUID(null);

        } catch (error) {
            console.log(error.message);
        }
    }

    onAuthStateChanged(auth, userData => {
        if (userData) {
            setUserUID(userData.uid);
            console.log('In OnAuthStateChanged');
        }
    })

    return <AuthContext.Provider value={{ registerUser, registerError, signIn, logout, userUID, setRegisterError }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;