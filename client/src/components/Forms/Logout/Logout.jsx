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
        <section className="logout">
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </section>
    )
};

export default Logout;