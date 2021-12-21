import styled from "styled-components";
import { Input, Button } from './Form.styled';

import React from 'react'

const ModalBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* pointer-events: none; */
    z-index: 1;
`
const ModalContainer = styled.div`
   width: 400px;
   padding: 25px 20px;
   border-radius: 15px;
   background-color: white;
   margin: 0 20px 0 20px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

   & h2 {
       color: black;
       font-weight: 500;
       margin-bottom: 1rem;

       background: linear-gradient(to right, #b92b27, #1565c0);
       background-clip: text;
       -webkit-background-clip: text;
       color: transparent;
   }

   & > button {
    width: 100%;
    border: none;
    border-radius: 10px;
    background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%);
    padding: 10px;
    color: #DADDFC;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        opacity: 0.8;
    }
   }
`
const ModalForm = styled.form`

`

const Modal = ({ name, setName, phone, setPhone, isEditing, setIsEditing, submitData, setOpenModal }) => {
    const closeModal = () => {
        setOpenModal(false);
        setName('');
        setPhone('');
        if (isEditing) {
            setIsEditing(false);
        }
    }

    return (
        <ModalBg>
            <ModalContainer>
                <h2>{isEditing ? 'Edit Contact' : 'Add new contact'}</h2>
                <ModalForm onSubmit={submitData}>
                    <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <Input placeholder="Phone no." value={phone} onChange={e => setPhone(e.target.value)} />
                    <Button>{isEditing ? 'Update' : 'Add'}</Button>
                </ModalForm>
                <button onClick={closeModal}>{isEditing ? 'Cancel edit' : 'Cancel'}</button>
            </ModalContainer>
        </ModalBg>
    )
}

export default Modal
