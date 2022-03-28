import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { EyeIcon, EyeOffIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import { QUERY_USER } from '../../../utils/queries'; 
import validator from 'validator';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [validUsername, setValidUsername] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: username }
    });

    const handleSignup = async (evt) => {
        evt.preventDefault();
        if (password === confirmPassword) {
            const response = await fetch('/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "email": email,
                    "password": password,
                })
            });
            return response;
        } else {
            // toggle error message
            console.log('passwords must match');
        }
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
            case 'confirmPassword': 
                setConfirmPassword(evt.target.value);
                return ;
            default: 
                return;
        }
    };

    const togglePasswordVisible = () => {
        if (passwordVisible) {
            setPasswordVisible(false);
            document.getElementById('password').type = 'password';
        } else {
            setPasswordVisible(true);
            document.getElementById('password').type = 'text';
        };
    };

    const toggleConfirmPasswordVisible = () => {
        if (confirmPasswordVisible) {
            setConfirmPasswordVisible(false);
            document.getElementById('confirmPassword').type = 'password';
        } else {
            setConfirmPasswordVisible(true);
            document.getElementById('confirmPassword').type = 'text';
        };
    };

    // check if username is available
    useEffect(() => {
        if (data) {
            if (!data.user && username.length > 2) {
                setValidUsername(true);
            } else {
                setValidUsername(false);
            }
        };
    }, [data])

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
            <h2 className='font-bold text-lg mb-2'>Signup</h2>
            {/* signup form */}
            <form onSubmit={handleSignup} className='flex flex-col'>
                <div className='flex items-center'>
                    <input className='m-2 p-2 rounded-l-md grow mr-0' onChange={handleChange} name='username' placeholder='username' type='text' value={username}></input>
                    <div title={validUsername ? ('Username Available') : ('Username Unavailable')} className='bg-white p-2 rounded-r-md'>{validUsername ? (<CheckCircleIcon width={25} className='stroke-green-400'/>) : (<XCircleIcon width={25} className='stroke-red-400'/>)}</div>
                </div>
                <div className='flex items-center'>
                    <input className='m-2 p-2 rounded-l-md grow mr-0' onChange={handleChange} name='email' placeholder='email' type='email' value={email}></input>
                    <div title={validEmail ? ('Email Valid') : ('Email Invalid')} className='bg-white p-2 rounded-r-md'>{validEmail ? (<CheckCircleIcon width={25} className='stroke-green-400'/>) : (<XCircleIcon width={25} className='stroke-red-400'/>)}</div>
                </div>
                <div className='flex items-center'>
                    <input className='m-2 p-2 rounded-l-md grow mr-0' onChange={handleChange} name='password' placeholder='password' type='password' id='password' value={password}></input>
                    <div title='Toggle Password Visibility' onClick={togglePasswordVisible} className='bg-white p-2 rounded-r-md'>{passwordVisible ? (<EyeIcon width={25} className='stroke-slate-500'/>) : (<EyeOffIcon width={25} className='stroke-slate-500'/>)}</div>
                </div>
                <div className='flex items-center'>
                    <input className='m-2 p-2 rounded-l-md grow mr-0' onChange={handleChange} name='confirmPassword' placeholder='confirmPassword' type='password' id='confirmPassword' value={confirmPassword}></input>
                    <div title='Toggle Password Visibility' onClick={toggleConfirmPasswordVisible} className='bg-white p-2 rounded-r-md'>{confirmPasswordVisible ? (<EyeIcon width={25} className='stroke-slate-500'/>) : (<EyeOffIcon width={25} className='stroke-slate-500'/>)}</div>
                </div>
                <button type='submit' className='w-1/4 m-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Signup</button>
            </form>
        </section>
    )
};

export default Signup;