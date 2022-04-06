import { Info, Scores, Stats } from "../components/Profile";
import { useParams } from "react-router-dom";

const Profile = ({ user }) => {
    const params = useParams();
    let targetUser;    

    if (params.id) {
        targetUser = params.id;
    } else if (!user) {
        document.location.assign('/forms');
    } else {
        targetUser = user;
    };

    return (
        <main className="grow">
            <Info user={targetUser} />
            <Scores />
            <Stats />
        </main>
    );
};

export default Profile;