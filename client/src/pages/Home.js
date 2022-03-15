import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Home = ({user}) => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <main>
            <h1>Home</h1>
            <div className='home'>
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
                <section className='logged-in'>
                    <h2>Logged In User ID</h2>
                    {user ? (
                        <p>{user}</p>
                    ) : (
                        <p>Not logged in</p>
                    )}
                </section>
            </div>
            <Link to='/forms'>Forms</Link>
        </main>        
    )
};

export default Home;