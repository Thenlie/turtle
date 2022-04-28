import { GuessPerGameChart } from "../../Charts";

const Scores = ({ data }) => {
    return (
        <section className='bg-slate-300 m-4 rounded-md'>
            <div className='bg-slate-400 p-2 rounded-t-md'>
                <h2 className='font-bold'>Scores</h2>
            </div>
            <div className='p-4 h-96'>
                <GuessPerGameChart data={data} />
            </div>
        </section>
    );
};

export default Scores;