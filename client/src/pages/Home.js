import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USERS } from '../utils/queries';

const Home = ({user}) => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
    const myQuery = useQuery(QUERY_ME);
    const myData = myQuery.data?.me;

    if (loading) {
        return <p>Loading...</p>
    };

    return (
        <main className='grow'>
            <div className='flex flex-wrap justify-center'>
                <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'>
                    <h2 className='font-bold text-lg mb-2'>User List</h2>
                    <ul className='list-none p-0'>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <li key={user.username}>{user.username}</li>
                            ))) : (
                                <p>No Users</p>
                            )
                        }
                    </ul>
                </section>
                <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'>
                    <h2 className='font-bold text-lg mb-2'>Logged In User ID</h2>
                    {user ? (
                        <p className='pt-5'>{user}</p>
                    ) : (
                        <p className='pt-5'>Not logged in</p>
                    )}
                    {myData && (
                        <p>{myData.username}</p>
                    )}
                </section>
            </div>
        </main>        
    );
};

export default Home;