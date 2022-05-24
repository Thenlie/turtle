import { v4 as uuid } from 'uuid';

// display of each letter below the user input
const Alphabet = () => {
    const abc1 = Array.from('QWERTYUIOP');
    const abc2 = Array.from('ASDFGHJKL');
    const abc3 = Array.from('ZXCVBNM');
    return (
        <div className='' id='letter-container'>
            <div className='flex justify-center'>
                {abc1.map(letter => (
                    <span key={uuid()} id={letter} className='p-1 m-1 w-[30px] bg-slate-200 hover:opacity-75 rounded-sm text-center cursor-pointer'>{letter}</span>
                ))}
            </div>
            <div className='flex justify-center'>
                {abc2.map(letter => (
                    <span key={uuid()} id={letter} className='p-1 m-1 w-[30px] bg-slate-200 hover:opacity-75 rounded-sm text-center cursor-pointer'>{letter}</span>
                ))}
            </div>
            <div className='flex justify-center'>
                {abc3.map(letter => (
                    <span key={uuid()} id={letter} className='p-1 m-1 w-[30px] bg-slate-200 hover:opacity-75 rounded-sm text-center cursor-pointer'>{letter}</span>
                ))}
            </div>
            <div className='flex justify-center'>
                <span id={'BACKSPACE'} className='p-1 m-1 w-[100px] bg-slate-200 hover:opacity-75 rounded-sm text-center cursor-pointer'>BACKSPACE</span>
            </div>
        </div>
    );
};

export default Alphabet;