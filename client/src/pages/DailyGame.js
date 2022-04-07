import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import randomDictionary from '../utils/randomDictionary';
import UserInput from '../components/Game/UserInput';
import Display from '../components/Game/Display';
import Alphabet from '../components/Game/Alphabet';

const DailyGame = () => {
    const [guessArr, setGuessArr] = useState([]);
    const [dayTarget, setDayTarget] = useState('');

    useEffect(() => {
        const now = DateTime.now();
        const start = DateTime.fromISO("2022-04-04");
        const diff = Math.floor((now.diff(start, ['days']).toObject().days));
        setDayTarget(randomDictionary[diff].toUpperCase())
    }, []);

    return (
        <main className='grow m-auto'>
            <Display guessArr={guessArr} target={dayTarget} daily='true' />
            <section className='p-4 mx-auto my-4 w-1/2 text-center bg-slate-100 rounded-md'>
                <UserInput guessArr={guessArr} setGuessArr={setGuessArr} />
                <Alphabet />
            </section>
        </main>
    );
};

export default DailyGame;