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
            <div className='bg-slate-400 p-2 block lg:hidden'><MenuIcon className='w-6 hover:stroke-slate-300' onClick={() => {toggleNav()}}/></div>
            <nav className='h-full hidden lg:flex flex-col justify-between'>
                <ul>
                    <Link to={'/profile/dashboard'} onClick={() => setCurrentPage('dash')}>
                        <li className={`p-2 hover:bg-slate-300 ${currentPage === 'dash' && 'bg-white'}`}><UserCircleIcon className='inline w-6'/>Dashboard</li>
                    </Link>
                    <Link to={'/daygame'} onClick={() => setCurrentPage('daygame')}>
                        <li className={`p-2 hover:bg-slate-300 ${currentPage === 'daygame' && 'bg-white'}`}><CalendarIcon className='inline w-6'/>Daily Game</li>
                    </Link>
                    <Link to={'/contgame'} onClick={() => setCurrentPage('contgame')}>
                        <li className={`p-2 hover:bg-slate-300 ${currentPage === 'contgame' && 'bg-white'}`}><PuzzleIcon className='inline w-6'/>Endless Game</li>
                    </Link>
                </ul>
                <ul>
                <Link to={'/logout'} onClick={() => setCurrentPage('logout')}>
                    <li className={`p-2 hover:bg-slate-300 ${currentPage === 'logout' && 'bg-white'}`}><LogoutIcon className='inline w-6'/>Logout</li>
                </Link>
                    {/* <li className='p-2 hover:bg-slate-300'><QuestionMarkCircleIcon className='inline w-6'/>Tutorial (WIP)</li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header; 