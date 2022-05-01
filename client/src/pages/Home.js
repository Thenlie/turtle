import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Home = ({ user, setCurrentPage }) => {

    useEffect(() => {
        setCurrentPage('home');
    });

    return (
        <main className='grow flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row text-4xl my-8'>
                    <div className='bg-[#86CF84] m-1 md:m-2 py-1 md:py-2 px-3 md:px-4 rounded rotate-[345deg]'>T</div>
                    <div className='bg-[#F4F59F] m-1 md:m-2 py-1 md:py-2 px-3 md:px-4 rounded'>U</div>
                    <div className='bg-[#C4C4C4] m-1 md:m-2 py-1 md:py-2 px-3 md:px-4 rounded'>R</div>
                    <div className='bg-[#86CF84] m-1 md:m-2 py-1 md:py-2 px-3 md:px-4 rounded'>T</div>
                    <div className='bg-[#F4F59F] m-1 md:m-2 py-1 md:py-2 px-3 md:px-4 rounded'>L</div>
                    <div className='bg-[#C4C4C4] m-1 md:m-2 py-1 md:py-2 px-3 md:px-4 rounded'>E</div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='mb-8'>
                    <Link to={`${user ? ('/profile/dashboard') : ('/signup')}`} onClick={() => setCurrentPage('dash')} className='text-black'><button className='text-2xl bg-[#C4C4C4] hover:bg-slate-300 rounded-lg py-2 px-6'>Get Started</button></Link>
                    </div>
                    {!user &&
                        <div>
                            <span>Already have an account?<Link to="/login" className='text-[#86CF84] hover:text-green-700'> Login</Link></span>
                        </div>
                    }
                </div>
            </div>
        </main>
    );
};

export default Home;