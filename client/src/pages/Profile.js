import { Info, Scores, Stats } from "../components/Profile";
import { useParams, useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
    const params = useParams();
    const navigate = useNavigate();
    let targetUser;    

    if (params.id) {
        targetUser = params.id;
    } else if (!user) {
        navigate('/forms', {replace: true});
    } else {
        targetUser = user;
    };

    return (
        <main className='grow'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <Info user={targetUser} />
                    <Scores />
                </div>
                <aside>
                    <Stats />
                </aside>
            </div>
        </main>
    );
};

export default Profile;