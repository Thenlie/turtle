import { useState } from 'react';

const UserInput = () => {
    const [input, setInput] = useState('');

    const handleChange = (evt) => {
        setInput(evt.target.value.toUpperCase());
    };

    return (
        <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'>
            <h2 className='font-bold text-lg mb-2'>Input</h2>
            <input onChange={handleChange} className='block m-auto p-2 text-lg text-center border-2 border-slate-300 rounded-md focus-visible:border-slate-400 outline-none' value={input}></input>
            <button className='w-1/4 mt-3 my-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Submit</button>
        </section>
    )
};

export default UserInput;