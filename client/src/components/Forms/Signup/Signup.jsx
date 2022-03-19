import React, { useState } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (evt) => {
        evt.preventDefault();
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
        <section className="p-4 m-4 w-1/3 text-center bg-slate-100 border border-black rounded-md">
            <h2>Signup</h2>
            {/* signup form */}
            <form onSubmit={handleSignup} className='flex flex-col'>
                <input className='m-2 p-2 rounded-sm' onChange={handleChange} name='username' placeholder='username' type='text' value={username}></input>
                <input className='m-2 p-2 rounded-sm' onChange={handleChange} name='email' placeholder='email' type='email' value={email}></input>
                <input className='m-2 p-2 rounded-sm' onChange={handleChange} name='password' placeholder='password' type='password' value={password}></input>
                <button type='submit' className='w-1/4 m-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Signup</button>
            </form>
            {/* state variables */}
            <div className='test-info'>
                <p className='font-bold text-left'>Username: <span className='font-normal'>{username}</span></p>
                <p className='font-bold text-left'>Email: <span className='font-normal'>{email}</span></p>
                <p className='font-bold text-left'>Password: <span className='font-normal'>{password}</span></p>
            </div>
        </section>
    )
};

export default Signup;