import Navigation from "./Navigation";

const Header = ({ user }) => {
    return (
        <header className='h-16 bg-slate-200'>
            <Navigation user={user} />
        </header>
    )
};

export default Header; 