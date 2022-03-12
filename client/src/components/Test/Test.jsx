import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SIGNUP, LOGIN, LOGOUT } from '../../utils/mutations';
import { QUERY_USERS } from '../../utils/queries';

const Test = () => {
    // mutations
    const [login] = useMutation(LOGIN);
    const [logout] = useMutation(LOGOUT);
    const [signup] = useMutation(SIGNUP);
    
    // queries
    const { loading, data, refetch } = useQuery(QUERY_USERS);
    const users = data?.users || [];

    // states
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async (evt) => {
        evt.preventDefault();
        await signup({ variables: {
            "username": username,
            "email": email,
            "password": password
        }})
        setUsername('')
        setEmail('')
        setPassword('')
        refetch();
    };

    const handleLogin = async () => {
        await login({ variables: {"email": "test123@email.com", "password": "password"}})
        return
    };

    const handleLogout = async () => {
        await logout();
        return
    };

    // list all users
    const handleUsers = async () => {
        console.log(users);
    };

    // list logged in user
    const handleMe = async () => {
        console.log(users);
    };

    const handleChange = (evt) => {
        evt.preventDefault();
        switch (evt.target.name) {
            case 'username': 
                setUsername(evt.target.value)
                return 
            case 'email': 
                setEmail(evt.target.value)
                return 
            case 'password': 
                setPassword(evt.target.value)
                return 
            default: 
                return
        }
    }

    return (
        <section className='test-section'>
            {/* signup form */}
            <div className='test-form-container'>
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
            </div>
            {/* user auth buttons */}
            <div className='test-buttons'>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleUsers}>List Users</button>
                <button onClick={handleMe}>List Me</button>
            </div>
        </section>
    )
};

export default Test;