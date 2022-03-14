import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../utils/mutations';

const Login = () => {
    const [login] = useMutation(LOGIN);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (evt) => {
        evt.preventDefault();
        await login({ variables: {"email": email, "password": password}});
        return;
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
            <form onSubmit={handleLogin}>
                <input onChange={handleChange} name='email' placeholder='email' value={email}></input>
                <input onChange={handleChange} name='password' placeholder='password' value={password}></input>
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