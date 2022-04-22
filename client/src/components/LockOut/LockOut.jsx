import { DateTime } from 'luxon';

const LockOut = () => {
    const now = DateTime.now();
    const tomorrow = DateTime.fromISO(now).plus({ days: 1 }).startOf('day');
    // console.log(now, tomorrow);
    const diff = tomorrow.diff(now).toObject();
    let s = Math.floor(diff.milliseconds / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    console.log(s, m, h)
    
    const time = {
        hours: h,
        minutes: Math.floor(m - (h * 60)),
        seconds: Math.floor(s - (m * 60)),
    };

    console.log(time)

    return (
        <>
            <p>Locked Out!</p>
            <p>{time.hours} hours, {time.minutes} minutes and {time.seconds} seconds until you can play again!</p>
        </>
    );
};

export default LockOut;