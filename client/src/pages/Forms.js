import { Signup, Login, Logout } from '../components/Forms';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Forms = () => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];

    return (
        <main>
            <h1>Forms</h1>
            <Signup />
            <Login />
            <Logout />
            <section>
                <h2>User List</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.username}>{user.username}</li>
                        ))}
                </ul>
            </section>
            <Link to='/'>Home</Link>
        </main>
    )
};

export default Forms;