import { GameInfo, Message } from '../components/EndGame';

const EndGame = ({ user }) => {
    return (
        <main className='grow flex flex-col items-center justify-center'>
            <div className='p-8 bg-gray-200 rounded-lg '>
                <div>
                    <Message />
                </div>
                <div className=''>
                    <GameInfo user={user} />
                </div>
            </div>
        </main>
    );
};

export default EndGame;