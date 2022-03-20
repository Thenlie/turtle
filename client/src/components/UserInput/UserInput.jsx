const UserInput = () => {
    return (
        <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'>
            <h2 className='font-bold text-lg mb-2'>Input</h2>
            <textarea className='block m-auto p-2 text-lg' rows={1} cols={40}></textarea>
            <button className='w-1/4 mt-3 my-auto p-2 rounded-lg bg-slate-300 hover:bg-slate-400'>Submit</button>
        </section>
    )
};

export default UserInput;