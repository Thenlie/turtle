import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const Display = ({guessArr, target}) => {
    const targetArr = target.split('');
    console.log(targetArr)

    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            let elem = document.getElementsByName(targetArr[i] + i)
            if (elem.length > 0) {
                elem.forEach((currentValue) => {
                    currentValue.classList.add('bg-green-200')
                })
            }
        };  
    }, [guessArr])

    return (
        <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'> 
            <h2 className='font-bold text-lg mb-2'>Display</h2>
            <p className='text-lg pt-5 font-bold'>{target}</p>
            <div className='pt-5'>
                {guessArr.map(guess => (
                    <div key={uuid()}>
                        {guess.split('').map((letter, i) => (
                            <span key={uuid()} name={letter + i}>{letter}</span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Display;