import { GameInfo, Message } from '../components/EndGame';

const EndGame = ({ user }) => {
    return (
        <main className='grow'>
            <GameInfo user={user} />
            <Message />
        </main>
    );
};

export default EndGame;