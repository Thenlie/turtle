import { Info, Scores, Stats } from "../components/Profile";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SCORE } from "../utils/queries";

const Profile = ({ user, setCurrentPage }) => {
    const params = useParams();
    const navigate = useNavigate();
    const [targetUser, setTargetUser] = useState('') 
    const { loading, data } = useQuery(QUERY_SCORE, { variables: { userId: targetUser }});

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
                navigate('/login');
            };
        };
    }, [navigate, params.id, user]);

    useEffect(() => {
        assignUser();
    }, [assignUser]);
    
    useEffect(() => {
        setCurrentPage('dash');
    });

    if (loading) {
        return (
            <p>Loading...</p>
        );
    };

    return (
        <main className='grow'>
            <div className='lg:grid grid-cols-3'>
                <div className='lg:col-span-2'>
                    <Info user={targetUser} />
                    <Scores data={data} />
                </div>
                <aside>
                    <Stats data={data} />
                </aside>
            </div>
        </main>
    );
};

export default Profile;