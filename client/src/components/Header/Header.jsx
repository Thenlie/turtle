import Navigation from "./Navigation";

const Header = ({ user }) => {
    return (
        <header className='bg-slate-200'>
            <Navigation user={user} />
        </header>
    )
};

export default Header; 