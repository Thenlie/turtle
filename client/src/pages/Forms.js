import { Signup, Login, Logout } from '../components/Forms';

const Forms = ({user, setUser}) => {
    return (
        <main className='grow'>
            <div className='flex flex-wrap justify-center'>
                <Signup />
                <Login setUser={setUser} />
                <Logout setUser={setUser} />
                <section className='p-4 m-4 w-1/3 text-center bg-slate-100 rounded-md'>
                    <h2 className='font-bold text-lg mb-2'>Logged In User ID</h2>
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