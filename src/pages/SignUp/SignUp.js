import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FormContainer, Input, Label, Button } from '../../components/Form.styled';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isEqual, setIsEqual] = useState(false);
    const { registerError, setRegisterError, registerUser } = useContext(AuthContext);
    const onSubmit = e => {
        e.preventDefault();
        if (email.length > 0 && password === confirmPassword) {
            registerUser(email, password);
        }
        if (password !== confirmPassword) {
            setIsEqual(true);
            setRegisterError('Password should be equal')
        }
    }

    const showError = () => {
        console.log('show error fucntion');
        setTimeout(() => {
            console.log('Remove error message...');
            setRegisterError(null);
            setIsEqual(false);
        }, 7000);
        return <p>{registerError}</p>
    }

    return (
        <FormContainer onSubmit={onSubmit}>
            <h2>Sign up</h2>
            {registerError && showError()}
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="example@mail.com" onChange={e => setEmail(e.target.value)} required />
            <Label htmlFor="password" >Password</Label>
            <Input id="password" type="password" placeholder="at least 6 characters" onChange={e => setPassword(e.target.value)} required isEqual={isEqual} />
            <Label htmlFor="passwordConfirm" >Confirm password</Label>
            <Input id="passwordConfirm" type="password" placeholder="type your password again" onChange={e => setConfirmPassword(e.target.value)} required isEqual={isEqual} />
            <Button>Sign up</Button>

            <span>Already have an account?</span>
            <Link to="/signin">Log in</Link>
        </FormContainer>
    )
}

export default SignUp
