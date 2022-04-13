import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const EndGameChart = () => {
    const location = useLocation();

    let labelArr = [];

    if (location.state.guessArr.length > 4) {
        labelArr = [location.state.guessArr.length - 2, location.state.guessArr.length - 1, location.state.guessArr.length, location.state.guessArr.length + 1, location.state.guessArr.length + 2]
    } else {
        labelArr = [1, 2, 3, 4, 5]
    }


    return (
        <>
            <Bar
                data={{
                    labels: labelArr,
                    datasets: [
                        {
                            label: 'guesses',
                            data: [1, 2, 3, 4],
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            fill: true,
                            tension: 0.1,
                        }
                    ],
                }}
                options={{
                    indexAxis: 'y',
                    maintainAspectRatio: false,
                    elements: {
                        bar: {
                            borderWidth: 2,
                        }
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'History',
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
                        },
                    },
                    color: '#6b7280',
                }}
            />
        </>
    );
};


export default EndGameChart;