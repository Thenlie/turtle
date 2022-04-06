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
                <div className='flex flex-col justify-center items-center bg-gray-400 w-3/4 h-full rounded-lg'>
                    <div>
                        <ul>
                            <li className=''>1 |</li>
                            <li className=''>2 |</li>
                            <li className=''>3 |</li>
                            <li className=''>4 |</li>
                            <li className=''>5 |</li>
                        </ul>
                    </div>
                    <div>
                        <button>Home</button>
                        <button>Next</button>
                        <button>Replay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameInfo;