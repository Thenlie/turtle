import { useEffect, useState } from 'react';
import dictionary from '../utils/dictionary';
import UserInput from '../components/Game/UserInput';
import Display from '../components/Game/Display';
import Alphabet from '../components/Game/Alphabet';

const ContGame = ({ setCurrentPage }) => {
    const [guessArr, setGuessArr] = useState([]);
    const [target, setTarget] = useState('');

    useEffect(() => {
        const randInt = Math.floor(Math.random() * 2314);
        setTarget(dictionary[randInt].toUpperCase());
    }, []);

    useEffect(() => {
        setCurrentPage('contgame');
    });

    return (
        <main className='grow m-auto flex flex-col justify-center w-full'>
            <Display guessArr={guessArr} target={target} type={'cont'} />
            <section className='p-4 mx-auto my-4 w-3/4 md:w-1/2 text-center bg-slate-100 rounded-md'>
                <UserInput guessArr={guessArr} setGuessArr={setGuessArr} />
                <Alphabet />
            </section>
        </main>
    );
};

export default ContGame;