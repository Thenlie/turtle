import { v4 as uuid } from 'uuid';

const Display = ({guessArr, target}) => {
    return (
        <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'> 
            <h2 className='font-bold text-lg mb-2'>Display</h2>
            <p className='text-lg pt-5 font-bold'>{target}</p>
            <div className='pt-5'>
                {guessArr.map(guess => (
                    <p key={uuid()}>{guess}</p>
                ))}
            </div>
        </section>
    )
};

export default Display;