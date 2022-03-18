import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className='flex justify-end'>
                <li className='list-none m-5 text-xl'><Link to={'/'}>Home</Link></li>
                <li className='list-none m-5 text-xl'><Link to={'/forms'}>Forms</Link></li>
            </ul>
        </nav>
    )
};

export default Navigation;