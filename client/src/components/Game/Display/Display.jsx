import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const Display = ({ guessArr }) => {
    const target = 'LUPUS';
    const targetArr = target.split('');
    const onTargetArr = targetArr.map((target, i) => target + i);

    useEffect(() => {
        // get all guess elements
        const guesses = Array.from(document.getElementById('guess-container').children);
        if (guesses.length < 1) {
            return;
        };

        // create array of letters from guesses
        let letters = [];
        guesses.map(child => { letters.push(...child.children) });

        for (let i = 0; i < letters.length; i++) {
            // green styling
            if (onTargetArr.includes(letters[i].attributes.name.value)) {
                letters[i].classList.add('bg-green-200');
            };
            // yellow styling
            if (targetArr.includes(letters[i].textContent)) {
                if (!letters[i].classList.contains('bg-green-200')) {
                    letters[i].classList.add('bg-yellow-200');
                }
            }
        };
    }, [guessArr]);

    return (
        <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'> 
            <h2 className='font-bold text-lg mb-2'>Display</h2>
            <p className='text-lg pt-5 font-bold'>{target}</p>
            <div id='guess-container' className='pt-5'>
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