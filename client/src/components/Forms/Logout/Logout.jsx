import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../../utils/mutations';

const Logout = () => {
    const [logout] = useMutation(LOGOUT);

    const handleLogout = async () => {
        // await logout();
        const response = await fetch('/auth/logout', {
            method: 'POST',
        })
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