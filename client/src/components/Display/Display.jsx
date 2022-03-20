import { useEffect, useState } from 'react';
import dictionary from '../../utils/dictionary';

const Display = () => {
    const [target, setTarget] = useState('')
    
    useEffect(() => {
        const randInt = Math.floor(Math.random() * 2314);
        setTarget(dictionary[randInt].toUpperCase());
    }, [])

    return (
        <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'> 
            <h2 className='font-bold text-lg mb-2'>Display</h2>
            <p className='text-lg pt-5'>{target}</p>
        </section>
    )
};

export default Display;