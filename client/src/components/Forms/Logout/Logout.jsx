import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../../utils/mutations';

const Logout = () => {
    const [logout] = useMutation(LOGOUT);

    const handleLogout = async () => {
        await logout();
        return;
    };

    return (
        <section>
            <button onClick={handleLogout}>Logout</button>
        </section>
    )
};

export default Logout;