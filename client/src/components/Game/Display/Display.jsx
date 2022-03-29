import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const Display = ({ target, guessArr }) => {
    const targetArr = target.split('').map((target, i) => { return {name: target + i, value: target}});
    
    useEffect(() => {
        // get all guess elements, return if no guesses
        const guesses = Array.from(document.getElementById('guess-container').children);
        if (guesses.length < 1) {
            return;
        };

        // create array of letters from guesses
        let letters = [];
        guesses.map(child => { letters.push(...child.children) });
        
        let tmpArr = [];
        let c = 0;
        for (let i = 0; i < letters.length; i++) {
            if (c % 5 === 0) {
                tmpArr = [...targetArr]; // reset when checking new word
            };
            // green styling
            if (tmpArr.some(target => target.name === letters[i].attributes.name.value)) {
                letters[i].classList.add('bg-green-200');
                tmpArr.splice(tmpArr.findIndex(obj => {return obj.name === letters[i].attributes.name.value}), 1);
                document.getElementById(letters[i].textContent).classList.remove('bg-yellow-200');
                document.getElementById(letters[i].textContent).classList.add('bg-green-200');
            };
            // yellow styling
            if (tmpArr.some(target => target.value === letters[i].textContent)) {
                if (!letters[i].classList.contains('bg-green-200')) {
                    letters[i].classList.add('bg-yellow-200');
                    tmpArr.splice(tmpArr.findIndex(obj => {return obj.value === letters[i].textContent}), 1);
                } ;
                if (!document.getElementById(letters[i].textContent).classList.contains('bg-green-200')) {
                    document.getElementById(letters[i].textContent).classList.add('bg-yellow-200');
                };
                // grey styling
            } else {
                if (!document.getElementById(letters[i].textContent).classList.contains('bg-green-200')) {
                    document.getElementById(letters[i].textContent).classList.add('bg-slate-400');
                };
            }
            c++;
        };
    }, [guessArr]);

    return (
        <section className='p-4 mx-auto my-4 w-1/2 text-center bg-slate-100 rounded-md'> 
            <p className='text-lg pt-5 font-bold'>{target}</p>
            <div id='guess-container' className='pt-5'>
                {guessArr.map(guess => (
                    <div key={uuid()} className='flex flex-wrap justify-center' >
                        {guess.split('').map((letter, i) => (
                            <span key={uuid()} name={letter + i} className='p-1 m-1 w-[30px] bg-slate-200 rounded-sm text-center'>{letter}</span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Display;