import { GameInfo } from '../components/EndGame';

const EndGame = ({ user }) => {
    return (
        <main className='grow'>
            <GameInfo user={user} />
        </main>
    );
};

export default EndGame;