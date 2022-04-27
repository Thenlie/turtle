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
        <header className='min-w-fit shadow-md lg:shadow-none'>
            <nav className='h-full hidden lg:flex flex-col justify-between'>
                <div className='flex justify-between'>
                    <div className='bg-slate-400 p-2 lg:hidden'><MenuIcon className='w-6 hover:stroke-slate-300' onClick={() => {toggleNav()}}/></div>
                    <Link to={'/'} onClick={() => setCurrentPage('home')} className='grow'>
                        <div className={`p-2 bg-slate-400 hover:bg-slate-500 text-center font-bold text-xl ${currentPage === 'dash' && 'lg:rounded-br-md'}`}>Turtle 🐢</div>
                    </Link>
                </div>
                <ul>
                    <Link to={'/profile/dashboard'} onClick={() => setCurrentPage('dash')}>
                        <li className={`p-2 hover:bg-slate-500 ${currentPage === 'dash' ? ('bg-slate-200 hover:bg-slate-200') : ('bg-slate-400')} ${currentPage === 'daygame' && 'lg:rounded-br-md'}`}><UserCircleIcon className='inline w-6'/> Dashboard</li>
                    </Link>
                    <Link to={'/daygame'} onClick={() => setCurrentPage('daygame')}>
                        <li className={`p-2 hover:bg-slate-500 ${currentPage === 'daygame' ? ('bg-slate-200 hover:bg-slate-200') : ('bg-slate-400')} ${currentPage === 'dash' && 'lg:rounded-tr-md'} ${currentPage === 'contgame' && 'lg:rounded-br-md'}`}><CalendarIcon className='inline w-6'/> Daily Game</li>
                    </Link>
                    <Link to={'/contgame'} onClick={() => setCurrentPage('contgame')}>
                        <li className={`p-2 hover:bg-slate-500 ${currentPage === 'contgame' ? ('bg-slate-200 hover:bg-slate-200') : ('bg-slate-400')} ${currentPage === 'daygame' && 'lg:rounded-tr-md'}`}><PuzzleIcon className='inline w-6'/> Endless Game</li>
                    </Link>
                </ul>
                <div className={`grow bg-slate-400 ${currentPage === 'contgame' && 'lg:rounded-tr-md'} ${currentPage === 'logout' && 'lg:rounded-br-md'}`}></div>
                <ul>
                <Link to={'/logout'} onClick={() => setCurrentPage('logout')}>
                    <li className={`p-2 hover:bg-slate-500 ${currentPage === 'logout' ? ('bg-slate-200 hover:bg-slate-200') : ('bg-slate-400')}`}><LogoutIcon className='inline w-6'/> Logout</li>
                </Link>
                    {/* <li className='p-2 hover:bg-slate-300'><QuestionMarkCircleIcon className='inline w-6'/>Tutorial (WIP)</li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header; 