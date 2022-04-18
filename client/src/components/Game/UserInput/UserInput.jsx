import { useEffect, useState } from 'react';
import dictionary from '../../../utils/dictionary';
import { v4 as uuid } from 'uuid';

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

    return (
        <>
            {!validGuess && (
                <p className='text-red-500'>Invalid Word!</p>
            )}
            <div className='flex justify-center'>
                <div className='w-20 h-20 m-1 pt-4 bg-white text-3xl border-2 border-slate-300 rounded-md shadow-md'>{input.length > 0 ? (input[0]) : ('')}</div>
                <div className='w-20 h-20 m-1 pt-4 bg-white text-3xl border-2 border-slate-300 rounded-md shadow-md'>{input.length > 1 ? (input[1]) : ('')}</div>
                <div className='w-20 h-20 m-1 pt-4 bg-white text-3xl border-2 border-slate-300 rounded-md shadow-md'>{input.length > 2 ? (input[2]) : ('')}</div>
                <div className='w-20 h-20 m-1 pt-4 bg-white text-3xl border-2 border-slate-300 rounded-md shadow-md'>{input.length > 3 ? (input[3]) : ('')}</div>
                <div className='w-20 h-20 m-1 pt-4 bg-white text-3xl border-2 border-slate-300 rounded-md shadow-md'>{input.length > 4 ? (input[4]) : ('')}</div>
            </div>
            <form onSubmit={handleSubmit}>
                {/* <input id='input' onChange={handleChange} className=' m-auto my-2 p-2 text-lg text-center border-2 border-slate-300 rounded-md focus-visible:border-slate-400 outline-none hidden' value={input}></input> */}
                <div className='flex justify-between'>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${input.length > 0 && 'bg-blue-300'}`}></div>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${input.length > 1 && 'bg-blue-300'}`}></div>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${input.length > 2 && 'bg-blue-300'}`}></div>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${input.length > 3 && 'bg-blue-300'}`}></div>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${input.length > 4 && 'bg-blue-300'}`}></div>
                </div>
                <button type='submit' className='w-1/4 my-3 mx-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Submit</button>
            </form>
        </>
    );
};

export default UserInput;