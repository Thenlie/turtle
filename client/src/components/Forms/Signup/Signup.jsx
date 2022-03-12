import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SIGNUP } from '../../../utils/mutations';

const Signup = () => {
    const [signup] = useMutation(SIGNUP);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (evt) => {
        evt.preventDefault();
        await signup({ variables: {
            "username": username,
            "email": email,
            "password": password
        }});
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const handleChange = (evt) => {
        evt.preventDefault();
        switch (evt.target.name) {
            case 'username': 
                setUsername(evt.target.value);
                return ;
            case 'email': 
                setEmail(evt.target.value);
                return ;
            case 'password': 
                setPassword(evt.target.value);
                return ;
            default: 
                return;
        }
    };

    return (
        <section>
            <form onSubmit={handleSignup}>
                <input onChange={handleChange} name='username' placeholder='username' value={username}></input>
                <input onChange={handleChange} name='email' placeholder='email' value={email}></input>
                <input onChange={handleChange} name='password' placeholder='password' value={password} type='password'></input>
                <button type='submit'>Signup</button>
            </form>
        </section>
    )
};

export default Signup;