import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { QUERY_ME, QUERY_USERS } from '../utils/queries';

const Home = ({ user }) => {
    const { loading, data } = useQuery(QUERY_USERS);
    const users = data?.users || [];
    const myQuery = useQuery(QUERY_ME);
    const myData = myQuery.data?.me;

    if (loading) {
        return <p>Loading...</p>
    };

    return (
        <main className='grow flex flex-col justify-center'>
            <div className='flex flex-wrap justify-center'>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-row text-4xl'>
                        <div className='bg-slate-400 m-2 p-4 rounded'>T</div>
                        <div className='bg-slate-400 m-2 p-4 rounded'>U</div>
                        <div className='bg-slate-400 m-2 p-4 rounded'>R</div>
                        <div className='bg-slate-400 m-2 p-4 rounded'>T</div>
                        <div className='bg-slate-400 m-2 p-4 rounded'>L</div>
                        <div className='bg-slate-400 m-2 p-4 rounded'>E</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>
                            <button className='text-2xl bg-slate-400 rounded-lg py-2 px-6'><Link to="/signup">Get Started</Link></button>
                        </div>
                        <div>
                            <span>Already have an account?<Link to="/login"> Login</Link></span>
                        </div>
                    </div>
                </div>
                {/* <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'> */}
                {/* <h2 className='font-bold text-lg mb-2'>User List</h2>
                    <ul className='list-none p-0'>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <li key={user.username}><a href={`/profile/${user._id}`}>{user.username}</a></li>
                            ))) : (
                                <p>No Users</p>
                            )
                        }
                    </ul> */}
                {/* </section> */}
                {/* <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'>
                    <h2 className='font-bold text-lg mb-2'>Logged In User ID</h2>
                    {user ? (
                        <p className='pt-5'>{user}</p>
                    ) : (
                        <p className='pt-5'>Not logged in</p>
                    )}
                    {myData && (
                        <p>{myData.username}</p>
                    )}
                </section> */}
            </div>
        </main>
    );
};

export default Home;