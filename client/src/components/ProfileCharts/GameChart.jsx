import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const GameChart = () => {
    return (
    <div className='bg-slate-100 rounded-t-md shadow-sm'>
        <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Game Chart</h3>
        <div className='p-1'>
            <p>In development...</p>
        </div>
    </div>
    );
};

export default GameChart;