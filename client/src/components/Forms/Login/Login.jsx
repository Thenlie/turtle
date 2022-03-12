import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../utils/mutations';

const Login = () => {
    const [login] = useMutation(LOGIN);

    const handleLogin = async () => {
        await login({ variables: {"email": "test123@email.com", "password": "password"}});
        return;
    };
    
    return (
        <section>
            <button onClick={handleLogin}>Login</button>
        </section>
    )
};

export default Login;