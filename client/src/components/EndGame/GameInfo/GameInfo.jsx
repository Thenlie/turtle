import { useLocation } from 'react-router-dom'

const GameInfo = () => {
    const location = useLocation();
    console.log(location);

    return (
        <>
            <div>
                <h3>{location.state.target}</h3>
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
        </>
    );
};

export default GameInfo;