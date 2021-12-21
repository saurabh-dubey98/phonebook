import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from './AuthContext';
import { db } from '../firebase';
import { collection, addDoc, getDocs, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export const UserDataContext = createContext({});

const UserDataProvider = ({ children }) => {
    const [userPhoneData, setUserPhoneData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { userUID } = useContext(AuthContext);
    let userCollectionRef;
    if (userUID) {
        userCollectionRef = collection(db, userUID);
    }

    const addDataToCollection = async (name, phone) => {
        try {
            const phoneData = { name: name, phone: phone };
            await addDoc(userCollectionRef, phoneData);
        } catch (error) {
            console.log(error.message);
        }
    }

    const getUserData = async () => {
        if (userCollectionRef) {
            setIsLoading(true)
            const data = await getDocs(userCollectionRef);
            setUserPhoneData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setIsLoading(false);
        }
    }

    const updateData = async (id, data) => {
        const phoneDoc = doc(db, userUID, id);
        const newPhoneDoc = { name: data.name, phone: data.phone };
        await updateDoc(phoneDoc, newPhoneDoc);
    }

    const deleteData = async (id) => {
        const phoneDoc = doc(db, userUID, id);
        await deleteDoc(phoneDoc)
    }

    useEffect(() => {
        if (userUID) {
            onSnapshot(userCollectionRef, (snap) => {
                setUserPhoneData(snap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            })
        }
    }, [userUID])



    return <UserDataContext.Provider value={{ addDataToCollection, userPhoneData, getUserData, setUserPhoneData, updateData, deleteData, isLoading }}>
        {children}
    </UserDataContext.Provider>
}

export default UserDataProvider;