import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className='flex justify-end'>
                <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/'}>Home</Link></li>
                <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/forms'}>Forms</Link></li>
            </ul>
        </nav>
    )
};

export default Navigation;