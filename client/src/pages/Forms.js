import { Signup, Login, Logout } from '../components/Forms';

const Forms = ({user, setUser}) => {
    return (
        <main className='grow'>
            <h1 className='text-center text-xl font-bold'>Forms</h1>
            <div className='flex flex-wrap justify-center'>
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