import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

export const Table = styled.table`
    /* background-color: #F7F7F7; */
    max-width: 500px;
    width: 100%;
    color: #000000;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-collapse: collapse;
    overflow: hidden;
    margin-bottom: 2rem;

    & td,
    & th {
        padding: 10px 15px;
        text-align: left;
    }

    & th {
        background: transparent;
        color: white;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.123); 
    }

    & tr {
        border-bottom: 2px solid #98BAE7;
    }

    & tr:last-child {
        border-bottom: none;
    }


    & td {
        color: #45526C;
        background-color: #F7F7F7;
    }

    @media screen and (max-width: 550px) {
        & thead {
            display: none;
        }

        & table,
        & tbody,
        & tr,
        & td {
            display: block;
        }

        & td {
            text-align: right;
            padding-left: 50%;
            position: relative;
        }
        & td::before {
            content: attr(data-label);
            position: absolute;
            left: 0;
            font-weight: 600;
            width: 50%;
            text-align: left;
            padding-left: 15px;
        }
    }
`

export const PhonebookContainer = styled.div`
    max-width: 500px;
    width: 100%;
`

export const EditButton = styled(FaEdit)`
    margin-left: 1.3rem;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s;
    color: #292C6D;

    &:hover {
        color: #874da2;
    }
`
export const DeleteButton = styled(FaTrash)`
    margin-left: 1.1rem;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s;
    color: #874da2;

    &:hover {
        color: #c43a30;
    }
`

export const Loading = styled.h2`
        text-align: center;
        margin-top: 2rem;
        background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
       background-clip: text;
       -webkit-background-clip: text;
       color: transparent;
`

export const EmptyContactListText = styled(Loading)`
    text-align: center;
        margin-top: 4rem;
        background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
       background-clip: text;
       -webkit-background-clip: text;
       color: transparent;
`
