import { formatDateFull } from '../../utils/helper';
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
    let guesses = [], dates = [];
    let dataArr = [...data.scoresByUser]
    // sort score array by date
    let sortedData = dataArr.sort((a, b) => { return a.createdAt - b.createdAt })
    // create array of total guesses per day and array of unique days
    for (let i = 0; i < sortedData.length; i++) {
        if (!dates.includes(formatDateFull(sortedData[i].createdAt))) {
            dates.push(formatDateFull(sortedData[i].createdAt));
            guesses.push(sortedData[i].guesses);
        } else {
            const c = guesses.pop();
            guesses.push(c + sortedData[i].guesses);
        };
    };

    return (
    <div className='bg-slate-100 rounded-t-md shadow-sm'>
        <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Guesses per Day</h3>
        <div className='p-1'>
            <Line
                data={{
                    labels: dates,
                    datasets: [{
                            label: '# of Guesses',
                            data: guesses,
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
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