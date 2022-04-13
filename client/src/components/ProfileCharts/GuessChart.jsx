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

const GuessChart = ({ data }) => {
    let games, dates;
    if (data) {
        games = data.scoresByUser.map(score => { return score.guesses });
        dates = data.scoresByUser.map(score => { return score.createdAt });
    }

    return (
    <div className='bg-slate-100 rounded-t-md shadow-sm'>
        <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Game Chart</h3>
        <div className='p-1'>
        <Line
                data={{
                    labels: dates,
                    datasets: [
                        {
                            label: '# of Guesses',
                            data: games,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            fill: true,
                            tension: 0.1,
                        },
                    ],
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
                            font: {
                                size: 20,
                            },
                            color: '#6b7280',
                        },
                    },
                    scales: {
                        y: {
                            ticks: {
                                color: '#6b7280',
                                autoSkip: true,
                            },
                        },
                        x: {
                            ticks: {
                                color: '#6b7280',
                                autoSkip: true,
                                maxTicksLimit: 5,
                            },
                            display: false
                        },
                    },
                    color: '#6b7280',
                }}
            />
        </div>
    </div>
    );
};
export default GuessChart;