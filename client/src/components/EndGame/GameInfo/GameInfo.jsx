import { useLocation } from 'react-router-dom'

const GameInfo = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div className='flex flex-col items-center '>
            <div className='flex flex-col bg-gray-100 w-1/2 items-center'>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <div className='m-2 p-4 text-4xl bg-gray-300 rounded-lg'>G</div>
                        <div className='m-2 p-4 text-4xl bg-gray-300 rounded-lg'>R</div>
                        <div className='m-2 p-4 text-4xl bg-gray-300 rounded-lg'>E</div>
                        <div className='m-2 p-4 text-4xl bg-gray-300 rounded-lg'>A</div>
                        <div className='m-2 p-4 text-4xl bg-gray-300 rounded-lg'>T</div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='m-2 p-4 text-4xl bg-gray-300 rounded-lg'>J</div>
                        <div className='m-2 p-4 text-4xl bg-gray-300 rounded-lg'>O</div>
                        <div className='m-2 p-4 text-4xl bg-gray-300 rounded-lg'>B</div>
                    </div>
                </div>
                <div>
                    <h3>Your Guesses:</h3>
                    {location.state.guessArr.length > 0 && (
                        location.state.guessArr.map((item, i) => (
                            <p key={i}>{item}</p>
                        ))
                    )}
                </div>
                <div>
                    <h3>Score:</h3>
                    <p>{location.state.guessArr.length}</p>
                </div>
            </div>
        </div>
    );
};

export default GameInfo;