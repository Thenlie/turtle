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
        <section className="p-4 m-4 w-1/3 text-center bg-slate-100 border border-black rounded-md">
            <h2 className='font-bold text-lg mb-2'>Login</h2>
            {/* login form */}
            <form onSubmit={handleLogin} className='flex flex-col'>
                <input className='m-2 p-2 rounded-sm' onChange={handleChange} name='email' placeholder='email' type='email' value={email}></input>
                <input className='m-2 p-2 rounded-sm' onChange={handleChange} name='password' placeholder='password' type='password' value={password}></input>
                <button type='submit' className='w-1/4 m-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Login</button>
            </form>
            {/* state variables */}
            <div className='test-info'>
                <p className='font-bold text-left'>Email: <span className='font-normal'>{email}</span></p>
                <p className='font-bold text-left'>Password: <span className='font-normal'>{password}</span></p>
            </div>
        </section>
    )
};

export default Login;