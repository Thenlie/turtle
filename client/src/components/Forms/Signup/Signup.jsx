import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../../utils/mutations';

const Signup = () => {
    const [signup] = useMutation(SIGNUP);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        "username": "testuser",
        "email": "test@email.com",
        "password": "password",
    }

    const handleSignup = async (evt) => {
        evt.preventDefault();
        // await signup({ variables: {
        //     "username": username,
        //     "email": email,
        //     "password": password
        // }});
        // setUsername('');
        // setEmail('');
        // setPassword('');
        const response = await fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    };

    const handleChange = (evt) => {
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
        <section className="signup">
            <h2>Signup</h2>
            {/* signup form */}
            <form onSubmit={handleSignup}>
                <input onChange={handleChange} name='username' placeholder='username' value={username}></input>
                <input onChange={handleChange} name='email' placeholder='email' value={email}></input>
                <input onChange={handleChange} name='password' placeholder='password' value={password} type='password'></input>
                <button type='submit'>Signup</button>
            </form>
            {/* state variables */}
            <div className='test-info'>
                <p>Username: <span>{username}</span></p>
                <p>Email: <span>{email}</span></p>
                <p>Password: <span>{password}</span></p>
            </div>
        </section>
    )
};

export default Signup;