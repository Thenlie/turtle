import { Signup, Login, Logout } from '../components/Forms';
import { Link } from 'react-router-dom';

const Forms = () => {
    return (
        <main>
            <h1>Forms</h1>
            <Signup />
            <Login />
            <Logout />
            <Link to='/'>Home</Link>
        </main>
    )
};

export default Forms;