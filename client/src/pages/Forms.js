import { Signup, Login, Logout } from '../components/Forms';

const Forms = ({user, setUser}) => {
    return (
        <main>
            <h1>Forms</h1>
            <div className='forms'>
                <Signup />
                <Login setUser={setUser} />
                <Logout setUser={setUser} />
                <section className='logged-in'>
                    <h2>Logged In User ID</h2>
                    {user ? (
                        <p>{user}</p>
                        ) : (
                            <p>Not logged in</p>
                            )}
                </section>
            </div>
        </main>
    )
};

export default Forms;