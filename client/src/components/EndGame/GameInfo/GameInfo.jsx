import { useLocation } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client';
import { ADD_SCORE } from '../../../utils/mutations';
import { useEffect } from 'react';

import { EndGameChart } from '../../Charts';

const GameInfo = ({ user }) => {
    const [addScore] = useMutation(ADD_SCORE)
    const location = useLocation();

    useEffect(() => {
        addScore({
            variables: { userID: user, guesses: location.state.guessArr.length, word: location.state.target, type: location.state.type }
        })
    }, [])

    console.log(location);
    console.log(user);

    return (
        <div className='flex flex-col items-center'>
            <div>
                <EndGameChart />
            </div>
            <div>
                <button className='mx-2'>Home</button>
                < button className='mx-2' > Next</button >
                <button className='mx-2'>Replay</button>
            </div >
        </div >
    );
};

export default GameInfo;