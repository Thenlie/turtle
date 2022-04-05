import { useEffect, useState } from 'react';
import dictionary from '../utils/dictionary';
import UserInput from '../components/Game/UserInput';
import Display from '../components/Game/Display';
import Alphabet from '../components/Game/Alphabet';

const DailyGame = () => {
    const [guessArr, setGuessArr] = useState([]);
    const [dayTarget, setDayTarget] = useState('');
    
    useEffect(() => {
        const randInt = Math.floor(Math.random() * 2314);
        setDayTarget(dictionary[randInt].toUpperCase());
    }, []);

    return (
        <main className='grow m-auto'>
            <Display guessArr={guessArr} target={dayTarget} />
            <section className='p-4 mx-auto my-4 w-1/2 text-center bg-slate-100 rounded-md'>
                <UserInput guessArr={guessArr} setGuessArr={setGuessArr} />
                <Alphabet />
            </section>
        </main>
    );
};

export default DailyGame;