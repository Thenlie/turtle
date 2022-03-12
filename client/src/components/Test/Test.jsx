import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SIGNUP, LOGIN, LOGOUT } from '../../utils/mutations';
import { QUERY_USERS } from '../../utils/queries';

const Test = () => {
    const [login] = useMutation(LOGIN);
    const [logout] = useMutation(LOGOUT);
    const [signup] = useMutation(SIGNUP);
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];

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
    };

    const handleLogin = async () => {
        await login({ variables: {"email": "test123@email.com", "password": "password"}})
        return
    };

    const handleLogout = async () => {
        await logout();
        return
    };

    const handleUsers = async () => {
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
        <>
            <form onSubmit={handleSignup}>
                <input onChange={handleChange} name='username' placeholder='username' value={username}></input>
                <input onChange={handleChange} name='email' placeholder='email' value={email}></input>
                <input onChange={handleChange} name='password' placeholder='password' value={password}></input>
                <button type='submit'>Signup</button>
            </form>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleUsers}>List Users</button>
        </>
    )
};

export default Test;