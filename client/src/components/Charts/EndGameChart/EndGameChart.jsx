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


    return (
        <>
            <Bar
                data={{
                    labels: 'score',
                    datasets: [
                        {
                            label: 'Words Per Minute',
                            data: 1,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            fill: true,
                            tension: 0.1,
                        },
                        {
                            label: 'Accuracy',
                            data: 1,
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
                            display: true,
                            text: 'Typing Progress',
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