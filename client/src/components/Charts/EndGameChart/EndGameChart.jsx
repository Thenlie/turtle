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
    let currentGuesses = 3;
    // ------------

    if (location.state) {
        currentGuesses = location.state.guessArr.length;
    };

    // ------------

    // const currentGuesses = location.state.guessArr.length;

    let labelArr = [];
    let dataArr = [];

    if (currentGuesses > 4) {
        labelArr = [currentGuesses - 2, currentGuesses - 1, currentGuesses, currentGuesses + 1, currentGuesses + 2];

        dataArr.push(data.scoresByUser.filter((item) => item.guesses === currentGuesses - 2).length)
        dataArr.push(data.scoresByUser.filter((item) => item.guesses === currentGuesses - 1).length)
        dataArr.push(data.scoresByUser.filter((item) => item.guesses === currentGuesses).length)
        dataArr.push(data.scoresByUser.filter((item) => item.guesses === currentGuesses + 1).length)
        dataArr.push(data.scoresByUser.filter((item) => item.guesses === currentGuesses + 2).length)
    } else {
        labelArr = [1, 2, 3, 4, 5]
        dataArr.push(data.scoresByUser.filter((item) => item.guesses === 1).length)
        dataArr.push(data.scoresByUser.filter((item) => item.guesses === 2).length)
        dataArr.push(data.scoresByUser.filter((item) => item.guesses === 3).length)
        dataArr.push(data.scoresByUser.filter((item) => item.guesses === 4).length)
        dataArr.push(data.scoresByUser.filter((item) => item.guesses === 5).length)
    }

    return (
        <div className='h-full'>
            <Bar
                data={{
                    labels: labelArr,
                    datasets: [
                        {
                            label: 'Guesses',
                            data: dataArr,
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
                            display: false,
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
        </div>
    );
};


export default EndGameChart;