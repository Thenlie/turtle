import { useQuery } from "@apollo/client";
import { QUERY_SCORE } from "../../../utils/queries";

const Info = ({ user }) => {
    const { loading, data } = useQuery(QUERY_SCORE, { variables: { userId: user }});
    let dailyGames = [], contGames = [], dailyGuesses = 0, contGuesses = 0;
    
    if (data) {
        dailyGames = data.scoresByUser.filter(score => score.type === 'daily');
        contGames = data.scoresByUser.filter(score => score.type === 'cont');
        // sum number of guesses
        if (dailyGames.length > 0) {
            dailyGuesses = dailyGames.reduce((a, b) => ({ guesses: a.guesses + b.guesses })).guesses;
        };
        if (contGames.length > 0) {
            contGuesses = contGames.reduce((a, b) => ({ guesses: a.guesses + b.guesses })).guesses;
        };
    };

    if (loading) {
        return (
            <p>Loading...</p>
        );
    };

    return (
        <div className='bg-slate-100 border border-slate-300 my-2 rounded-md shadow-sm'>
            <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Games Played <span className='font-normal'>| {dailyGames.length + contGames.length}</span></h3>
            <div className='p-1'>
                <p>Daily: {dailyGames.length}</p>
                <p>Continuous: {contGames.length}</p>
            </div>
            <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Total Guesses <span className='font-normal'>| {dailyGuesses + contGuesses}</span></h3>
            <div className='p-1'>
                <p>Daily: {dailyGuesses}</p>
                <p>Continuous: {contGuesses}</p>
            </div>
        </div>
    );
};

export default Info;