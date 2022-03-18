import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../utils/mutations';

const Login = ({setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useMutation(LOGIN);

    const handleLogin = async (evt) => {
        evt.preventDefault();
        // const response = await fetch('/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "email": email,
        //         "password": password,
        //     })
        // })
        // const data = await response.json();
        const { data } = await login({
            variables: {
                "email": email,
                "password": password,
            }
        })
        setUser(data.login._id)
        return data;
    };

    const handleChange = (evt) => {
        switch (evt.target.name) {
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
        <section className="login">
            <h2>Login</h2>
            {/* login form */}
            <form onSubmit={handleLogin} className='flex flex-col'>
                <input onChange={handleChange} name='email' placeholder='email' type='email' value={email}></input>
                <input onChange={handleChange} name='password' placeholder='password' type='password' value={password}></input>
                <button type='submit'>Login</button>
            </form>
            {/* state variables */}
            <div className='test-info'>
                <p>Email: <span>{email}</span></p>
                <p>Password: <span>{password}</span></p>
            </div>
        </section>
    )
};

export default Login;