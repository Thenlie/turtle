import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

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
        <>
            <p>Locked Out!</p>
            <p>{time.hours} hours, {time.minutes} minutes and {time.seconds} seconds until you can play again!</p>
        </>
    );
};

export default LockOut;