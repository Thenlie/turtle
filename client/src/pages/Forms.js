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
            <div className='forms'>
                <Signup />
                <Login />
                <Logout />
                <section className="user-list">
                    <h2>User List</h2>
                    <ul>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <li key={user.username}>{user.username}</li>
                                ))
                        ) : (
                            <p>No Users</p>
                        )}
                    </ul>
                </section>
            </div>
            <Link to='/'>Home</Link>
        </main>
    )
};

export default Forms;