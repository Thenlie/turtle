import { EndGameChart } from "../../Charts";

const Scores = ({ data }) => {
    return (
        <section className='bg-slate-200 m-4 rounded-md'>
            <div className='bg-slate-300 p-2 rounded-t-md'>
                <h2 className='font-bold'>Scores</h2>
            </div>
            <div className='p-4'>
                <p>In development...</p>
                <EndGameChart data={data} />
            </div>
        </section>
    );
};

export default Scores;