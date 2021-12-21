import styled from "styled-components";

export const FormContainer = styled.form`
    max-width: 300px;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #F7F7F7;

    & h2 {
        color: #000000;
        margin-bottom: 25px;
        font-weight: 500;

        background: linear-gradient(to right, #b92b27, #1565c0);
       background-clip: text;
       -webkit-background-clip: text;
       color: transparent;
    }

    & span {
        display: block;
        color: #6D8299;
        font-size: 0.9rem;
        text-align: center;
    }

    & a {
        display: block;
        color: #344CB7;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.9rem;
        text-align: center;
        margin-top: 5px;
    }

    & p {
        color: red;
        border: 2px solid red;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        font-weight: 600;
    }
`
export const Input = styled.input`
    padding: 10px;
    border: ${props => props.isEqual ? '2px' : '1px'} solid ${props => props.isEqual ? 'red' : 'lightgray'};
    border-radius: 10px;
    font-size: 0.9rem;
    outline: none;
    width: 100%;
    margin-bottom: 18px;
    font-weight: 500;
    transition: all 150ms;

    &:focus {
        border: 2px solid #344CB7;
    }
`
export const Label = styled.label`
    display: block; 
    font-size: 1rem;
    color: #000000;
    font-weight: 600;
    margin-bottom: 10px;
`
export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 10px;
    background: linear-gradient(to right, #4776e6, #8e54e9);
    padding: 10px;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 10px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        opacity: 0.8;
    }
`