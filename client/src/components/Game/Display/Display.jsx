import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom'

const Display = ({ target, guessArr, type }) => {
    const targetArr = target.split('').map((target, i) => { return { name: target + i, value: target } });
    const navigate = useNavigate();

    useEffect(() => {
        console.log('effecting')
        // get all guess elements, return if no guesses
        const guesses = Array.from(document.getElementById('guess-container').children);
        if (guesses.length < 1) {
            return;
        };

        // create array of letters from guesses
        let letters = [];
        guesses.map(child => ( letters.push(...child.children) ));

        let tmpArr = [];
        let c = 0;
        let win = 0
        for (let i = 0; i < letters.length; i++) {
            const cur = document.getElementById(letters[i].textContent);
            if (c % 5 === 0) {
                tmpArr = [...targetArr]; // reset when checking new word
                win = 0;
            };
            // green styling
            if (tmpArr.some(target => target.name === letters[i].attributes.name.value)) {
                letters[i].classList.add('bg-green-200');
                tmpArr.splice(tmpArr.findIndex(obj => { return obj.name === letters[i].attributes.name.value }), 1);
                cur.classList.remove('bg-yellow-200');
                cur.classList.add('bg-green-200');
                win++
                // check if game is won
                if (win === 5) {
                    navigate("/endgame", { state: { target, guessArr, type } });
                };
            };
            // yellow styling
            if (tmpArr.some(target => target.value === letters[i].textContent)) {
                if (!letters[i].classList.contains('bg-green-200')) {
                    letters[i].classList.add('bg-yellow-200');
                    tmpArr.splice(tmpArr.findIndex(obj => { return obj.value === letters[i].textContent }), 1);
                };
                if (!cur.classList.contains('bg-green-200')) {
                    cur.classList.add('bg-yellow-200');
                };
                // grey styling
            } else {
                if (!cur.classList.contains('bg-green-200')) {
                    cur.classList.add('bg-slate-400');
                    letters[i].classList.add('bg-slate-300');
                };
            }
            c++;
        };
    }, [guessArr, navigate, target, targetArr, type]);

    return (
        <section className='p-4 mx-none sm:mx-auto my-4 w-full sm:w-3/4 md:w-1/2 text-center bg-slate-100 rounded-md'>
            {/* <p className='text-lg pt-5 font-bold'>{target}</p> */}
            <div id='guess-container' className={`pt-5 ${guessArr.length === 6 && 'pb-5'}`}>
                {guessArr.map(guess => (
                    <div key={uuid()} className='flex flex-wrap justify-center'>
                        {guess.split('').map((letter, i) => (
                            <span key={uuid()} name={letter + i} className='w-12 md:w-16 h-12 md:h-16 m-1 pt-1 md:pt-3 text-3xl rounded-md shadow-md'>{letter}</span>
                        ))}
                    </div>
                ))}
            </div>
            {guessArr.length < 6 ? (
                <div className='flex justify-center pb-5'>
                    <div className='w-12 md:w-16 h-12 md:h-16 m-1 pt-4 bg-white text-3xl rounded-md shadow-md'></div>
                    <div className='w-12 md:w-16 h-12 md:h-16 m-1 pt-4 bg-white text-3xl rounded-md shadow-md'></div>
                    <div className='w-12 md:w-16 h-12 md:h-16 m-1 pt-4 bg-white text-3xl rounded-md shadow-md'></div>
                    <div className='w-12 md:w-16 h-12 md:h-16 m-1 pt-4 bg-white text-3xl rounded-md shadow-md'></div>
                    <div className='w-12 md:w-16 h-12 md:h-16 m-1 pt-4 bg-white text-3xl rounded-md shadow-md'></div>
                </div>
            ) : (
                <></>
            )}
        </section>
    );
};

export default Display;