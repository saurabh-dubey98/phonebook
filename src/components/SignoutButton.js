import styled from "styled-components";
import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";
import { UserDataContext } from "../context/UserDataContext";

const SignOutButtonStyle = styled.button`
    border: none;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    color: black;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 10px;
    margin-bottom: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 10px;
    right: 20px;

    &:hover {
        background-color: transparent;
        color: white;
        transform: scale(0.99);
    }

    @media screen and (max-width: 500px) {
        top: 0;
        right: 10px;
    }
`

const SignoutButton = () => {
    const { logout } = useContext(AuthContext);
    const { setUserPhoneData } = useContext(UserDataContext);
    return <SignOutButtonStyle onClick={() => {
        logout();
        setUserPhoneData([]);
    }}>
        Sign Out
    </SignOutButtonStyle>

}

export default SignoutButton