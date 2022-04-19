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
        <main className='grow flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row text-4xl my-8'>
                    <div className='bg-[#86CF84] m-2 py-2 px-4 rounded rotate-[345deg]'>T</div>
                    <div className='bg-[#F4F59F] m-2 py-2 px-4 rounded'>U</div>
                    <div className='bg-[#C4C4C4] m-2 py-2 px-4 rounded'>R</div>
                    <div className='bg-[#86CF84] m-2 py-2 px-4 rounded'>T</div>
                    <div className='bg-[#F4F59F] m-2 py-2 px-4 rounded'>L</div>
                    <div className='bg-[#C4C4C4] m-2 py-2 px-4 rounded'>E</div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='mb-8'>
                        <button className='text-2xl bg-[#C4C4C4] rounded-lg py-2 px-6'><Link to="/signup" className='text-black'>Get Started</Link></button>
                    </div>
                    <div>
                        <span>Already have an account?<Link to="/login" className='text-[#86CF84]'> Login</Link></span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;