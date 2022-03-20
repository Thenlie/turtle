import { v4 as uuid } from 'uuid';

const Alphabet = () => {
    const abc = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    return (
        <div className='flex flex-wrap justify-center' id='letter-container'>
            {abc.map(letter => (
                <span key={uuid()} id={letter} className='p-1 m-1 w-[30px] bg-slate-200 rounded-sm text-center'>{letter}</span>
            ))}
        </div>
    )
}

export default Alphabet;