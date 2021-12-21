import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import { FormContainer, Input, Label, Button } from '../../components/Form.styled'

const SignIn = () => {
    const { signIn, setRegisterError, registerError } = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();

    const onLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        if (email.length > 0 && password.length >= 6) {
            signIn(email, password);

        }
    }

    const showError = () => {
        console.log('show error fucntion');
        setTimeout(() => {
            console.log('Remove error message...');
            setRegisterError(null);
        }, 7000);
        return <p>{registerError}</p>
    }

    return (
        <FormContainer onSubmit={onLogin}>
            <h2>Log in</h2>
            {registerError && showError()}
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="example@mail.com" required ref={emailRef} />
            <Label htmlFor="password" >Password</Label>
            <Input id="password" type="password" placeholder="at least 6 characters" required ref={passwordRef} />
            <Button>Log in</Button>

            <span>Don't have an account ?</span>
            <Link to="/signup">Sign up</Link>
        </FormContainer>
    )
}

export default SignIn
