import { useState } from 'react';
import dictionary from '../../../utils/dictionary';

const UserInput = ({guessArr, setGuessArr}) => {
    const [input, setInput] = useState('');
    const [inputLength, setInputLength] = useState(0);
    const [validGuess, setValidGuess] = useState(true);

    const handleChange = (evt) => {
        if (evt.target.value.length <= 5) {
            setInput(evt.target.value.toUpperCase());
            setInputLength(evt.target.value.length);
        }; 
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (dictionary.includes(input.toLowerCase())) {
            setGuessArr([...guessArr, input]);
            setInput('');
            setInputLength(0);
        } else {
            setValidGuess(false);
            setTimeout(() => {
                setValidGuess(true);
            }, 2500);
        };
    };

    return (
        <>
            {!validGuess && (
                <p className='text-red-500'>Invalid Word!</p>
            )}
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} className='block m-auto my-2 p-2 text-lg text-center border-2 border-slate-300 rounded-md focus-visible:border-slate-400 outline-none' value={input}></input>
                <div className='flex justify-between'>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${inputLength > 0 && 'bg-blue-300'}`}></div>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${inputLength > 1 && 'bg-blue-300'}`}></div>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${inputLength > 2 && 'bg-blue-300'}`}></div>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${inputLength > 3 && 'bg-blue-300'}`}></div>
                    <div className={`w-1/5 my-1 h-2 bg-slate-200 ${inputLength > 4 && 'bg-blue-300'}`}></div>
                </div>
                <button type='submit' className='w-1/4 my-3 mx-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Submit</button>
            </form>
        </>
    );
};

export default UserInput;