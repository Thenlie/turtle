import { Signup, Login, Logout } from '../components/Forms';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Forms = ({user}) => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];

    return (
        <main>
            <h1>Forms</h1>
            <div className='forms'>
                <Signup />
                <Login />
                <Logout />
            </div>
            <section className='logged-in'>
                <h2>Logged In User ID</h2>
                <p>{user}</p>
            </section>
            <Link to='/'>Home</Link>
        </main>
    )
};

export default Forms;