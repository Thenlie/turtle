import GamePerDayChart from "../../Charts/GamePerDayChart/GamePerDayChart";
import GuessPerDayChart from "../../Charts/GuessPerDayChart/GuessPerDayChart";

const Charts = ({ data }) => {
    return (
            <div className='bg-slate-100 rounded-md shadow-sm'>
                <GamePerDayChart data={data} />
                <GuessPerDayChart data={data} />
            </div>
    );
};

export default Charts;