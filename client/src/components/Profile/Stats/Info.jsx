import { useQuery } from "@apollo/client";
import { QUERY_SCORE } from "../../../utils/queries";

const Info = ({ user }) => {
    const { loading, data } = useQuery(QUERY_SCORE, { variables: { userId: user }});
    let dailyGames = [], contGames = [];
    
    if (data) {
        dailyGames = data.scoresByUser.filter(score => score.type === 'daily');
        contGames = data.scoresByUser.filter(score => score.type === 'cont');
    };

    console.log(dailyGames, contGames)

    if (loading) {
        return (
            <p>Loading...</p>
        );
    };

    return (
        <div className='bg-slate-100 border border-slate-300 my-2 rounded-md shadow-sm'>
            <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Games Played</h3>
            <div className='p-1'>
                <p>Daily: {dailyGames.length}</p>
                <p>Continuous: {contGames.length}</p>
            </div>
            <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Total Guesses</h3>
            <div className='p-1'>
                <p>Daily:</p>
                <p>Continuous:</p>
            </div>
        </div>
    );
};

export default Info;