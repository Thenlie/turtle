import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USERS } from '../utils/queries';

const Home = ({user}) => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
    const myQuery = useQuery(QUERY_ME);
    const myData = myQuery.data?.me;

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <main className='grow'>
            <h1 className='text-center text-xl font-bold'>Home</h1>
            <div className='flex flex-wrap justify-center'>
                <section className="user-list">
                    <h2>User List</h2>
                    <ul>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <li key={user.username}>{user.username}</li>
                            ))) : (
                                <p>No Users</p>
                            )
                        }
                    </ul>
                </section>
                <section className='logged-in'>
                    <h2>Logged In User ID</h2>
                    {user ? (
                        <p>{user}</p>
                    ) : (
                        <p>Not logged in</p>
                    )}
                    {myData && (
                        <p>{myData.username}</p>
                    )}
                </section>
            </div>
        </main>        
    )
};

export default Home;