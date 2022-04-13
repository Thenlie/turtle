import GameChart from "../../ProfileCharts/GameChart";
import GuessChart from "../../ProfileCharts/GuessChart";

const Charts = ({ data }) => {
    return (
            <div className='bg-slate-100 rounded-md shadow-sm'>
                <GameChart data={data}/>
                <GuessChart data={data} />
            </div>
    );
};

export default Charts;