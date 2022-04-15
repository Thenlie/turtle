import { Link, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_SCORE } from '../../../utils/mutations';
import { useEffect } from 'react';
import { GuessPerGameChart } from '../../Charts';

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
            <div>
                <Link to={'/'}><button className='mx-2 text-black'>Home</button></Link>
                <Link to={'/contgame'}><button className='mx-2 text-black'>Play Again</button ></Link>
            </div >
        </div>
    );
};

export default GameInfo;