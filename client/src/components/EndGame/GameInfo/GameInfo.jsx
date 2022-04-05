import { useLocation } from 'react-router-dom'

const GameInfo = () => {
    const location = useLocation();
    console.log(location);

    return (
        <h2>Game Info</h2>
    );
};

export default GameInfo;