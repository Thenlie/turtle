import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

const Navigation = () => {
    return (
        <nav>
            <ul className='flex justify-end'>
                <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/'}>Home</Link></li>
                <li className='list-none m-5 text-xl hover:text-slate-500'><Link to={'/forms'}>Forms</Link></li>
                <a className='list-none m-5 text-xl hover:text-slate-500'><MdMenu /></a>
            </ul>
        </nav>
    )
};

const Menu = () => {
    return (
       <nav>
           <ul>
               <li>Hello!</li>
               <li>Hello!</li>
               <li>Hello!</li>
           </ul>
       </nav> 
    )
}

export default Navigation;