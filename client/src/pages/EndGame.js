import { GameInfo, Message } from '../components/EndGame';
import { useQuery } from '@apollo/client';
import { QUERY_SCORE } from '../utils/queries';

const EndGame = ({ user }) => {
    const { loading, data } = useQuery(QUERY_SCORE, {
        variables: { userId: user }
    });

    if (loading) {
        return (
            <p>Loading...</p>
        );
    };

    return (
        <main className='grow flex flex-col items-center justify-center'>
            <div className='p-8 bg-gray-200 rounded-lg my-2 '>
                <div>
                    <Message />
                </div>
                <div className='bg-gray-300 rounded-lg my-2 p-4'>
                    <GameInfo user={user} data={data} />
                </div>
            </div>
        </main>
    );
};

export default EndGame;