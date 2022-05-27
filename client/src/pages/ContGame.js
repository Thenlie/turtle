import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import dictionary from '../utils/dictionary';
import UserInput from '../components/Game/UserInput';
import Display from '../components/Game/Display';
import Alphabet from '../components/Game/Alphabet';

const ContGame = ({ setCurrentPage }) => {
    const [key, setKey] = useState('');
    const [guessArr, setGuessArr] = useState([]);
    const [target, setTarget] = useState('');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // generate random word
    useEffect(() => {
        const randInt = Math.floor(Math.random() * 2314);
        setTarget(dictionary[randInt].toUpperCase());
    }, []);
    
    useEffect(() => {
        setCurrentPage('contgame');
    });
    
    // run anytime a letter on the built in keyboard is pressed
    const letterClickHandler = (evt) => {
        let curr = evt.target.id
        if (curr.length > 0) {
            if (letters.includes(curr) || curr == 'BACKSPACE') {
                setKey({key: curr, id: uuid});
            };
        };
    };

    return (
        <main className='grow m-auto flex flex-col justify-center w-full'>
            <Display guessArr={guessArr} target={target} type={'cont'} />
            <section className='px-1 py-4 sm:px-4 mx-0 sm:mx-auto my-4 w-full sm:w-3/4 md:w-1/2 text-center bg-slate-100 rounded-md text-sm sm:text-base'>
                <UserInput guessArr={guessArr} setGuessArr={setGuessArr} myKey={key} setKey={setKey}/>
                <div onClick={letterClickHandler}>
                    <Alphabet />
                </div>
            </section>
        </main>
    );
};

export default ContGame;