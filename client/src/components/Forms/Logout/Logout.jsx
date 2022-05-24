import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({setUser}) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await fetch('/auth/logout', {
            method: 'POST',
        });
        setUser(null);
        localStorage.clear();
        navigate('/');
    };

    return (
        <section className="p-4 mt-6 mx-auto w-2/3 lg:w-1/2 xl:w-1/3 text-center bg-slate-100 rounded-md">
            <h2 className='font-bold text-lg mb-2'>Logout</h2>
            <button onClick={handleLogout} className='w-1/2 sm:w-1/4 m-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Logout</button>
        </section>
    );
};

export default Logout;