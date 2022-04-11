const Info = () => {
    return (
        <div className='bg-slate-100 border border-slate-300 my-2 rounded-md shadow-sm'>
            <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Games Played</h3>
            <div className='p-1'>
                <p>Daily:</p>
                <p>Continuous:</p>
            </div>
            <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Total Guesses</h3>
            <div className='p-1'>
                <p>Daily:</p>
                <p>Continuous:</p>
            </div>
        </div>
    );
};

export default Info;