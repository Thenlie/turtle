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
import { useEffect } from 'react';

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
    const currentGuesses = location.state.guessArr.length;

    let labelArr = [];
    let dataArr = [];
    let indexOne = [];
    let indexTwo = [];
    let indexThree = [];
    let indexFour = []
    let indexFive = [];

    // useEffect(() => {
    if (currentGuesses > 4) {
        labelArr = [currentGuesses - 2, currentGuesses - 1, currentGuesses, currentGuesses + 1, currentGuesses + 2];
        // dataArr = data.scoresByUser.filter((item) => item.guesses <= location.state.guessArr.length + 2 && item.guesses >= location.state.guessArr.length + -2)
        indexOne = data.scoresByUser.filter((item) => item.guesses === currentGuesses - 2)
        indexTwo = data.scoresByuser.filter((item) => item.guesses === currentGuesses - 1)
        indexThree = data.scoresByuser.filter((item) => item.guesses === currentGuesses)
        indexFour = data.scoresByuser.filter((item) => item.guesses === currentGuesses + 1)
        indexFive = data.scoresByuser.filter((item) => item.guesses === currentGuesses + 2)

        dataArr.push(indexOne.length)
        dataArr.push(indexTwo.length)
        dataArr.push(indexThree.length)
        dataArr.push(indexFour.length)
        dataArr.push(indexFive.length)
    } else {
        labelArr = [1, 2, 3, 4, 5]
        dataArr = data.scoresByUser.filter((item) => item.guesses >= 1 && item.guesses <= 5)
    }
    console.log(dataArr)

    // }, [data.scoresByUser])




    return (

        <Bar
            data={{
                labels: labelArr,
                datasets: [
                    {
                        label: 'Guesses',
                        data: [4, 1, 1, 1, 56],
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