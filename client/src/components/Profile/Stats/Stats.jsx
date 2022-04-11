import Calendar from "./Calendar";
import Charts from "./Charts";
import Info from "./Info";

const Stats = () => {
    return (
        <section className='bg-slate-200 m-4 rounded-md'>
            <div className='bg-slate-300 p-2 rounded-t-md'>
                <h2 className='font-bold'>Stats</h2>
            </div>
            <div className='p-4'>
                <Info />
                <Calendar />
                <Charts />
            </div>
        </section>
    );
};

export default Stats;