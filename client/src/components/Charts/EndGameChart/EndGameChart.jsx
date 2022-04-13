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

const EndGameChart = ({ data }) => {
    const location = useLocation();

    let labelArr = [];
    let dataArr = [];

    if (location.state.guessArr.length > 4) {
        labelArr = [location.state.guessArr.length - 2, location.state.guessArr.length - 1, location.state.guessArr.length, location.state.guessArr.length + 1, location.state.guessArr.length + 2];
        dataArr = data.scoresByUser.filter((item) => item.guesses <= location.state.guessArr.length + 2 && item.guesses >= location.state.guessArr.length + -2)
    } else {
        labelArr = [1, 2, 3, 4, 5]
        dataArr = data.scoresByUser.filter((item) => item.guesses >= 1 && item.guesses <= 5)
    }

    console.log(dataArr)


    return (

        <Bar
            data={{
                labels: labelArr,
                datasets: [
                    {
                        label: 'Guesses',
                        data: [1, 4, 4, 4, 5],
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
                            autoSkip: false,
                        },
                    },

                },
                color: '#6b7280',
            }}
        />

    );
};


export default EndGameChart;