import { LogoutIcon, UserCircleIcon, CalendarIcon, PuzzleIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className='h-full bg-slate-200 flex flex-col justify-between'>
            <ul>
                <li className='p-2 hover:bg-slate-300'><UserCircleIcon className='inline w-6'/> Dashboard</li>
                <li className='p-2 hover:bg-slate-300'><CalendarIcon className='inline w-6'/> Daily Game</li>
                <li className='p-2 hover:bg-slate-300'><PuzzleIcon className='inline w-6'/> Continuous Game</li>
            </ul>
            <ul className=''>
                <li className='p-2 hover:bg-slate-300'><LogoutIcon className='inline w-6'/> Logout</li>
                <li className='p-2 hover:bg-slate-300'><QuestionMarkCircleIcon className='inline w-6'/> Tutorial</li>
            </ul>
        </header>
    );
};

export default Header; 