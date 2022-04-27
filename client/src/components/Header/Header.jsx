import { LogoutIcon, UserCircleIcon, CalendarIcon, PuzzleIcon, MenuIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = ({ currentPage, setCurrentPage }) => {
    const toggleNav = () => {
        console.log('hit')
        const nav = document.getElementsByTagName('nav');
        if (nav[0].classList.contains('hidden')) {
            nav[0].classList.remove('hidden');
        } else {
            nav[0].classList.add('hidden');
        };
    };

    return (
        <header className='lg:h-full bg-slate-200 min-w-fit'>
            <div className='bg-slate-200 p-2 block lg:hidden'><MenuIcon className='w-6 ml-auto' onClick={() => {toggleNav()}}/></div>
            <nav className='h-full hidden lg:flex flex-col justify-between'>
                <ul>
                    <li className='p-2 hover:bg-slate-300'><UserCircleIcon className='inline w-6'/><Link to={'/profile/dashboard'} onClick={() => setCurrentPage('dash')} className={`${currentPage === 'dash' && 'text-green-600'}`}>Dashboard</Link></li>
                    <li className='p-2 hover:bg-slate-300'><CalendarIcon className='inline w-6'/><Link to={'/daygame'} onClick={() => setCurrentPage('daygame')} className={`${currentPage === 'daygame' && 'text-green-600'}`}>Daily Game</Link></li>
                    <li className='p-2 hover:bg-slate-300'><PuzzleIcon className='inline w-6'/><Link to={'/contgame'} onClick={() => setCurrentPage('contgame')} className={`${currentPage === 'contgame' && 'text-green-600'}`}>Endless Game</Link></li>
                </ul>
                <ul>
                    <li className='p-2 hover:bg-slate-300'><LogoutIcon className='inline w-6'/><Link to={'/logout'} onClick={() => setCurrentPage('logout')} className={`${currentPage === 'logout' && 'text-green-600'}`}>Logout</Link></li>
                    {/* <li className='p-2 hover:bg-slate-300'><QuestionMarkCircleIcon className='inline w-6'/>Tutorial (WIP)</li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header; 