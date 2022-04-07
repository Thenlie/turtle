import { useLocation } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { ADD_SCORE } from '../../../utils/mutations';
import { useEffect } from 'react';

const GameInfo = ({ user }) => {
    const [addScore] = useMutation(ADD_SCORE)
    const location = useLocation();

    useEffect(() => {
        addScore({
            variables: { userID: user, guesses: location.state.guessArr.length }
        })
    }, [])

    console.log(location);
    console.log(user);

    return (
        <div>
            <div>
                {location.state.guessArr.length > 3 ? (
                    <ul>
                        <li>{location.state.guessArr.length - 2}</li>
                        <li>{location.state.guessArr.length - 1}</li>
                        <li>{location.state.guessArr.length}</li>
                        <li>{location.state.guessArr.length + 1}</li>
                        <li>{location.state.guessArr.length + 2}</li>
                    </ul>
                ) :
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                }
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