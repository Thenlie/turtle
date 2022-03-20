import { useState } from 'react';
import dictionary from '../../utils/dictionary';

const UserInput = () => {
    const abc = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    const [input, setInput] = useState('');
    const [inputLength, setInputLength] = useState(0);

    const handleChange = (evt) => {
        if (evt.target.value.length > 5) {
            return;
        } 
        setInput(evt.target.value.toUpperCase());
        setInputLength(evt.target.value.length);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(input);
    }

    return (
        <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'>
            <h2 className='font-bold text-lg mb-2'>Input</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} className='block m-auto p-2 text-lg text-center border-2 border-slate-300 rounded-md focus-visible:border-slate-400 outline-none' value={input}></input>
                <button type='submit' className='w-1/4 mx-3 my-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Submit</button>
            </form>
            <div className='flex flex-wrap justify-center'>
                {abc.map(letter => (
                    <span key={letter} className='p-1 m-1 w-[30px] border bg-slate-200 rounded-sm'>{letter}</span>
                ))}
            </div>
            <p>{inputLength}</p>
        </section>
    )
};

export default UserInput;