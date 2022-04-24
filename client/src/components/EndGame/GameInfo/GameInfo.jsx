import { Link, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_SCORE } from '../../../utils/mutations';
import { useEffect } from 'react';
import { GuessPerGameChart } from '../../Charts';

import { UserCircleIcon } from '@heroicons/react/outline'
import { RefreshIcon } from '@heroicons/react/outline'

const GameInfo = ({ user, data, refetch }) => {
    const [addScore] = useMutation(ADD_SCORE);
    const location = useLocation();

    useEffect(() => {
        addScore({
            variables: { userId: user, guesses: location.state.guessArr.length, word: location.state.target, type: location.state.type }
        });
        refetch();
    }, [addScore, location.state.guessArr.length, location.state.target, location.state.type, user, refetch]);

    return (
        <div className='flex flex-col items-center'>
            <div className='h-[250px]'>
                {data && <GuessPerGameChart data={data} />}
            </div>
            <div className='flex my-6'>
                <div className='bg-[#7B7B7B] p-2 mx-2 rounded-full'>
                    <Link to={'/'}><UserCircleIcon className='text-black h-8 w-8' /></Link>
                </div>
                <div className='bg-[#7B7B7B] p-2 mx-2 rounded-full'>
                    <Link to={'/profile/dashboard'}><RefreshIcon className='text-black h-8 w-8' /></Link>
                </div>
            </div >
        </div>
    );
};

export default GameInfo;