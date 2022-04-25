import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className='grow text-center'>
            <div className='flex justify-center my-4'>
                <div className='text-2xl w-14 h-14 text-center bg-[#86CF84] m-2 pt-3 px-4 rounded shadow-lg rotate-[345deg]'>4</div>
                <div className='text-2xl w-14 h-14 text-center bg-[#C4C4C4] m-2 pt-3 px-4 rounded shadow-lg'>0</div>
                <div className='text-2xl w-14 h-14 text-center bg-[#F4F59F] m-2 pt-3 px-4 rounded shadow-lg'>4</div>
            </div>
            <h1 className='text-center font-bold my-4 text-3xl'>Sorry, we couldn't find that!</h1>
            <Link to={'/'} className='text-black'><button className='text-2xl bg-[#C4C4C4] hover:bg-slate-300 rounded-lg py-2 px-6'>Return Home</button></Link>
        </main>
    );
};

export default NotFound;