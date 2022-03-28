import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../utils/mutations';
import { EyeIcon, EyeOffIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import validator from 'validator';

const Login = ({setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
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

    const togglePasswordVisible = () => {
        if (passwordVisible) {
            setPasswordVisible(false);
            document.getElementById('login-password').type = 'password';
        } else {
            setPasswordVisible(true);
            document.getElementById('login-password').type = 'text';
        }
    };

    // check if email input is valid
    useEffect(() => {
        if (validator.isEmail(email)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    }, [email]);
    
    return (
        <section className="p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md">
            <h2 className='font-bold text-lg mb-2'>Login</h2>
            {/* login form */}
            <form onSubmit={handleLogin} className='flex flex-col'>
            <div className='flex items-center'>
                    <input className='m-2 p-2 rounded-l-md grow mr-0' onChange={handleChange} name='email' placeholder='email' type='email' value={email}></input>
                    <div title={validEmail ? ('Email Valid') : ('Email Invalid')} className='bg-white p-2 rounded-r-md'>{validEmail ? (<CheckCircleIcon width={25} className='stroke-green-400'/>) : (<XCircleIcon width={25} className='stroke-red-400'/>)}</div>
                </div>
                <div className='flex items-center'>
                    <input className='m-2 p-2 rounded-l-md grow mr-0' onChange={handleChange} name='password' placeholder='password' type='password' id='login-password' value={password}></input>
                    <div title='Toggle Password Visibility' onClick={togglePasswordVisible} className='bg-white p-2 rounded-r-md'>{passwordVisible ? (<EyeIcon width={25} className='stroke-slate-500'/>) : (<EyeOffIcon width={25} className='stroke-slate-500'/>)}</div>
                </div>
                <button type='submit' className='w-1/4 m-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Login</button>
            </form>
        </section>
    )
};

export default Login;