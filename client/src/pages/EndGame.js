import { GameInfo, Message } from '../components/EndGame';
import { EndGameChart } from '../components/Charts';

const EndGame = ({ user }) => {
    return (
        <main className='grow flex flex-col items-center justify-center'>
            <div className='p-8 bg-gray-200 rounded-lg my-2 '>
                <div>
                    <Message />
                </div>
                <div className='bg-gray-300 rounded-lg my-2 p-4'>
                    <GameInfo user={user} />
                </div>
                <div>
                    <EndGameChart />
                </div>
            </div>
        </main>
    );
};

export default EndGame;