import { GameInfo, Message } from '../components/EndGame';
import { useQuery } from '@apollo/client';
import { QUERY_SCORE } from '../utils/queries';

const EndGame = ({ user }) => {
    const { loading, data, refetch } = useQuery(QUERY_SCORE, {
        variables: { userId: user }
    });

    if (loading) {
        return (
            <p>Loading...</p>
        );
    };

    return (
        <main className='grow flex flex-col items-center justify-center'>
            <div className='p-8 bg-[#E5E5E5] rounded-lg my-2 px-16 '>
                <div className='mb-8' >
                    <Message />
                </div>
                <div className='bg-[#C4C4C4] rounded-lg my-2 px-12 py-6'>
                    <GameInfo user={user} data={data} refetch={refetch} />
                </div>
            </div>
        </main>
    );
};

export default EndGame;