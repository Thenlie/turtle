import { Signup, Login, Logout } from '../components/Forms';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Forms = ({user, setUser}) => {
    const { loading, data, refetch } = useQuery(QUERY_USERS);
    const users = data?.users || [];

    return (
        <main>
            <h1>Forms</h1>
            <div className='forms'>
                <Signup refetch={refetch} />
                <Login setUser={setUser} />
                <Logout setUser={setUser} />
                <section className='logged-in'>
                    <h2>Logged In User ID</h2>
                    {user ? (
                        <p>{user}</p>
                        ) : (
                            <p>Not logged in</p>
                            )}
                </section>
            </div>
            <Link to='/'>Home</Link>
        </main>
    )
};

export default Forms;