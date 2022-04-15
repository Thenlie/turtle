import { Info, Scores, Stats } from "../components/Profile";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const Profile = ({ user }) => {
    const params = useParams();
    const navigate = useNavigate();
    const [targetUser, setTargetUser] = useState('') 

    const assignUser = useCallback(() => {
        if (params.id) {
            setTargetUser(params.id);
        } else if (user) {
            setTargetUser(user);
            localStorage.setItem('turtleUID', user);
        } else {
            if (localStorage.getItem('turtleUID')) {
                setTargetUser(localStorage.getItem('turtleUID'));
            } else {
                navigate('/forms');
            };
        };
    }, [navigate, params.id, user]);

    useEffect(() => {
        assignUser();
    }, [assignUser]);

    return (
        <main className='grow'>
            <div className='lg:grid grid-cols-3'>
                <div className='lg:col-span-2'>
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