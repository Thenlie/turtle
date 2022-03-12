import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN, LOGOUT } from '../../utils/mutations';

const Test = () => {
    const [login] = useMutation(LOGIN);
    const [logout] = useMutation(LOGOUT);

    const handleLogin = async () => {
        await login({ variables: {"email": "test123@email.com", "password": "password"}})
        return
    };

    const handleLogout = async () => {
        await logout();
        return
    };

    return (
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
};

export default Test;