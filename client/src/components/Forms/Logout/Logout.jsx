import React from 'react';

const Logout = ({setUser}) => {
    const handleLogout = async () => {
        const response = await fetch('/auth/logout', {
            method: 'POST',
        })
        setUser(null);
        return response;
    };

    return (
        <section className="p-4 m-4 w-1/3 text-center bg-slate-100 border border-black rounded-md">
            <h2>Logout</h2>
            <button onClick={handleLogout} className='w-1/4 m-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Logout</button>
        </section>
    )
};

export default Logout;