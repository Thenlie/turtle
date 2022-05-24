import { useEffect, useState } from 'react';
import dictionary from '../../../utils/dictionary';
import { v4 as uuid } from 'uuid';
import Alphabet from '../Alphabet';

const UserInput = ({guessArr, setGuessArr}) => {
    const [input, setInput] = useState('');
    const [key, setKey] = useState('');
    const [validGuess, setValidGuess] = useState(true);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const handleChange = (evt) => {
        setKey({key: evt.key.toUpperCase(), id: uuid});
    };

    const handleSubmit = () => {
        if (dictionary.includes(input.toLowerCase())) {
            setGuessArr([...guessArr, input]);
            setInput('');
        } else {
            setValidGuess(false);
            setTimeout(() => {
                setValidGuess(true);
            }, 2500);
        };
    };

    useEffect(() => {
        document.addEventListener('keydown', handleChange);
        return () => {
            document.removeEventListener("keydown", handleChange);
        };
    }, []);

    useEffect(() => {
        return;
    }, [input]);

    useEffect(() => {
        if (key) {
            if (key.key === 'BACKSPACE') {
                if (input.length > 0) {
                    let tmpArr = input.split('');
                    tmpArr.pop();
                    let tmp = tmpArr.join('').trim();
                    setInput(tmp);
                };
            } else if (key.key === 'ENTER') {
                handleSubmit();
            } else if (key.key.length === 1 && input.length < 5) {
                if (letters.includes(key.key)) {
                    let tmp = input + key.key;
                    setInput(tmp);
                };
            };
        };
    }, [key]);

    const test = (evt) => {
        let curr = evt.target.id
        if (letters.includes(curr) || curr == 'BACKSPACE') {
            setKey({key: curr, id: uuid});
        }
    };

    return (
        <>
            {!validGuess && (
                <p className='text-red-500'>Invalid Word!</p>
            )}
            <div className='flex justify-center'>
                <div className='w-12 md:w-20 h-12 md:h-20 m-1 pt-1 md:pt-4 bg-white text-2xl md:text-3xl border-2 border-slate-300 rounded-md shadow-md'>
                    {input.length > 0 ? (input[0]) : ('')}
                </div>
                <div className='w-12 md:w-20 h-12 md:h-20 m-1 pt-1 md:pt-4 bg-white text-2xl md:text-3xl border-2 border-slate-300 rounded-md shadow-md'>
                    {input.length > 1 ? (input[1]) : ('')}
                </div>
                <div className='w-12 md:w-20 h-12 md:h-20 m-1 pt-1 md:pt-4 bg-white text-2xl md:text-3xl border-2 border-slate-300 rounded-md shadow-md'>
                    {input.length > 2 ? (input[2]) : ('')}
                </div>
                <div className='w-12 md:w-20 h-12 md:h-20 m-1 pt-1 md:pt-4 bg-white text-2xl md:text-3xl border-2 border-slate-300 rounded-md shadow-md'>
                    {input.length > 3 ? (input[3]) : ('')}
                </div>
                <div className='w-12 md:w-20 h-12 md:h-20 m-1 pt-1 md:pt-4 bg-white text-2xl md:text-3xl border-2 border-slate-300 rounded-md shadow-md'>
                    {input.length > 4 ? (input[4]) : ('')}
                </div>
            </div>
            <button onClick={handleSubmit} className='w-1/2 md:w-1/4 my-3 mx-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Submit</button>
            <div onClick={test}>
                <Alphabet />
            </div>
        </>
    );
};

export default UserInput;