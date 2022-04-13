import GameChart from "../../ProfileCharts/GameChart";
import GuessChart from "../../ProfileCharts/GuessChart";

const Charts = () => {
    return (
            <div className='bg-slate-100 rounded-md shadow-sm'>
                <GameChart />
                <GuessChart />
            </div>
    );
};

export default Charts;