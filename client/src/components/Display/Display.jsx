import { useEffect, useState } from 'react';
import dictionary from '../../utils/dictionary';

const Display = () => {
    const [target, setTarget] = useState('')
    
    useEffect(() => {
        const randInt = Math.floor(Math.random() * 2314);
        setTarget(dictionary[randInt]);
    }, [])

    return (
        <section className='display'> 
            <h2>Display</h2>
            <p>{target}</p>
        </section>
    )
};

export default Display;