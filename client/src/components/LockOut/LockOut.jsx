import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LockOut = () => {
    const [time, setTime] = useState({});

    const getTime = () => {
        let now = DateTime.now();
        const tomorrow = DateTime.fromISO(now).plus({ days: 1 }).startOf('day');
        const diff = tomorrow.diff(now).toObject();
        let s = Math.floor(diff.milliseconds / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        const countDown = {
            hours: h,
            minutes: Math.floor(m - (h * 60)),
            seconds: Math.floor(s - (m * 60))
        };
        setTime(countDown);
    };

    useEffect(() => {
        let timer = setInterval(() => {
            getTime();
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    });

    useEffect(() => {
        getTime()
    }, []);

    return (
        <main className='h-full text-center flex flex-col justify-center'>
            <h1 className='text-center font-bold text-3xl'>Locked Out!</h1>
            <div className='flex justify-center my-4'>
                <div className='text-2xl w-14 h-14 text-center bg-[#86CF84] m-2 pt-3 px-4 rounded shadow-lg rotate-[345deg]'>{time.hours}</div>
                <p className='py-2 text-3xl'>:</p>
                <div className='text-2xl w-14 h-14 text-center bg-[#C4C4C4] m-2 pt-3 px-4 rounded shadow-lg'>{time.minutes > 9 ? (time.minutes) : ('0' + time.minutes)}</div>
                <p className='py-2 text-3xl self-end'>.</p>
                <div className='text-2xl w-14 h-14 text-center bg-[#F4F59F] m-2 pt-3 px-4 rounded shadow-lg'>{time.seconds > 9 ? (time.seconds) : ('0' + time.seconds)}</div>
            </div>
            <Link to={'/'} className='text-black'><button className='text-2xl bg-[#C4C4C4] hover:bg-slate-300 rounded-lg py-2 px-6'>Return Home</button></Link>
        </main>
    );
};

export default LockOut;