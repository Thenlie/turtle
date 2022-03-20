import { useEffect, useState } from 'react';
import dictionary from '../../utils/dictionary';
import UserInput from './UserInput/UserInput';
import Display from './Display/Display';
import Alphabet from './Alphabet/Alphabet';

const Game = () => {
    const [guessArr, setGuessArr] = useState([]);
    const [target, setTarget] = useState('');
    
    useEffect(() => {
        const randInt = Math.floor(Math.random() * 2314);
        setTarget(dictionary[randInt].toUpperCase());
    }, []);

    return (
        <>
            <Display guessArr={guessArr} target={target} />
            <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'>
                <UserInput guessArr={guessArr} setGuessArr={setGuessArr} />
                <Alphabet />
            </section>
        </>
    )
};

export default Game;