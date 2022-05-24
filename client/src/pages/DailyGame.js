import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { useQuery } from "@apollo/client";
import { QUERY_SCORE } from "../utils/queries";
import randomDictionary from '../utils/randomDictionary';
import UserInput from '../components/Game/UserInput';
import Display from '../components/Game/Display';
import Alphabet from '../components/Game/Alphabet';
import LockOut from '../components/LockOut';

const DailyGame = ({ user, setCurrentPage }) => {
    const [guessArr, setGuessArr] = useState([]);
    const [dayTarget, setDayTarget] = useState('');
    const { loading, data } = useQuery(QUERY_SCORE, { variables: { userId: user }});
    const scoreData = data?.scoresByUser || [];

    useEffect(() => {
        const now = DateTime.now();
        const start = DateTime.fromISO("2022-04-04");
        const diff = Math.floor((now.diff(start, ['days']).toObject().days));
        setDayTarget(randomDictionary[diff].toUpperCase())
    }, []);

    let daily = scoreData.filter(score => score.type === 'daily' && score.word === dayTarget);

    useEffect(() => {
        setCurrentPage('daygame');
    });
    
    if (daily.length > 0) {
        return (
            <LockOut />
        );
    };

    if (loading) {
        return (
            <p>Loading...</p>
        );
    };

    return (
        <main className='grow m-auto flex flex-col justify-center w-full'>
            <Display guessArr={guessArr} target={dayTarget} type={'daily'} />
            <section className='px-1 py-4 sm:px-4 mx-0 sm:mx-auto my-4 w-full sm:w-3/4 md:w-1/2 text-center bg-slate-100 rounded-md text-sm sm:text-base'>
                <UserInput guessArr={guessArr} setGuessArr={setGuessArr} />
                {/* <Alphabet /> */}
            </section>
        </main>
    );
};

export default DailyGame;