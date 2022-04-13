import { Info, Scores, Stats } from "../components/Profile";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = ({ user }) => {
    const params = useParams();
    const navigate = useNavigate();
    const [targetUser, setTargetUser] = useState('') 

    useEffect(() => {
        if (params.id) {
            setTargetUser(params.id);
            return;
        } else if (!params.id && user) {
            setTargetUser(user);
            return;
        } else {
            if (localStorage.getItem('turtleUID')) {
                setTargetUser(localStorage.getItem('turtleUID'));
                return;
            }
            navigate('/forms');
            return;
        };
    }, []);

    return (
        <main className='grow'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <Info user={targetUser} />
                    <Scores />
                </div>
                <aside>
                    <Stats user={targetUser} />
                </aside>
            </div>
        </main>
    );
};

export default Profile;