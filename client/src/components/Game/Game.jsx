import { useState } from 'react';
import UserInput from './UserInput/UserInput';
import Display from './Display/Display';

const Game = () => {
    const [guessArr, setGuessArr] = useState([]);

    return (
        <>
            <Display guessArr={guessArr} />
            <UserInput guessArr={guessArr} setGuessArr={setGuessArr} />
        </>
    )
};

export default Game;