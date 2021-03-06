import { formatDateFull } from '../../../utils/helper';
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

const GamePerDayChart = ({ data }) => {
    let games = [], dates = [];
    let dataArr = [...data.scoresByUser]
    // sort score array by date
    let sortedData = dataArr.sort((a, b) => { return a.createdAt - b.createdAt })
    // create array of total games played per day and array of unique days
    for (let i = 0; i < sortedData.length; i++) {
        if (!dates.includes(formatDateFull(sortedData[i].createdAt))) {
            dates.push(formatDateFull(sortedData[i].createdAt));
            games.push(1);
        } else {
            const c = games.pop();
            games.push(c + 1);
        };
    };

    return (
    <div className='bg-slate-100 rounded-t-md shadow-sm'>
        <h3 className='bg-slate-400 font-bold p-1 rounded-t-md'>Game per Day</h3>
        <div className='p-1'>
            <Line
                data={{
                    labels: dates,
                    datasets: [{
                            label: '# of Games',
                            data: games,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            fill: true,
                            stepped: true
                        }],
                }}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: false,
                            text: 'Games Played',
                            font: { size: 20 },
                            color: '#6b7280',
                        },
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#6b7280',
                                autoSkip: true,
                                precision: 0
                            },
                            beginAtZero: true
                        },
                        x: {
                            ticks: {
                                color: '#6b7280',
                                autoSkip: true,
                                maxTicksLimit: 5,
                            },
                            display: false
                        }
                    },
                    color: '#6b7280',
                }}
            />
        </div>
    </div>
    );
};

export default GamePerDayChart;