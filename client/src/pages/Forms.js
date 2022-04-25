import { Outlet } from 'react-router-dom';

const Forms = () => {
    return (
        <main className='grow flex flex-col justify-center'>
            <Outlet />
        </main>
    );
};

export default Forms;