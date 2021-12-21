import React, { useContext, useEffect, useState } from 'react'
import { Table, PhonebookContainer, EditButton, DeleteButton, Loading, EmptyContactListText } from './Phonebook.styled'
import { Modal } from '../../components';
import { Button } from '../../components/Form.styled';
import { AuthContext } from '../../context/AuthContext';
import { UserDataContext } from '../../context/UserDataContext';

const Phonebook = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [editId, setEditId] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const { addDataToCollection, userPhoneData, getUserData, updateData, deleteData, isLoading } = useContext(UserDataContext);
    const { userUID } = useContext(AuthContext);

    const submitData = e => {
        e.preventDefault();
        if (name.length > 0 && phone.length > 0 && !isEditing) {
            addDataToCollection(name, phone);
            setName('');
            setPhone('');
            setOpenModal(false);
        }
        if (isEditing && name.length > 0 && phone.length > 0) {
            updateData(editId, { name, phone });
            setName('');
            setPhone('');
            setEditId('');
            setIsEditing(false);
            setOpenModal(false);
        }
    }
    console.log('render');
    const editData = (doc_id) => {
        const { name, phone, id } = userPhoneData.find(doc => doc.id === doc_id);
        setIsEditing(true);
        setName(name);
        setPhone(phone);
        setEditId(id);
        setOpenModal(true)
    }
    useEffect(() => {
        getUserData();
        console.log('in phonebook useeffect');
    }, [userUID])

    const propsForModal = {
        name,
        setName,
        phone,
        setPhone,
        isEditing,
        setIsEditing,
        submitData,
        setOpenModal
    }

    if (isLoading) {
        return <Loading>Loading</Loading>
    }

    return <PhonebookContainer>
        {openModal && <Modal {...propsForModal} />}
        <Button onClick={() => setOpenModal(true)}>Add new contact</Button>
        {userPhoneData.length === 0 ? <EmptyContactListText>Your contact list is empty :(</EmptyContactListText> : <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone no.</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>

            </thead>
            <tbody>
                {userPhoneData.map(item => (
                    <tr key={item.id}>
                        <td data-label="Name">{item.name}</td>
                        <td data-label="Phone">{item.phone}</td>
                        <td data-label="Delete"><DeleteButton onClick={() => deleteData(item.id)}></DeleteButton></td>
                        <td data-label="Update"><EditButton onClick={() => editData(item.id)}>Update</EditButton></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        }
    </PhonebookContainer >
}

export default Phonebook
