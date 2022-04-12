import { Info, Scores, Stats } from "../components/Profile";

const Profile = ({ user }) => {
    return (
        <main className="grow">
            <Info user={user} />
            <Scores />
            <Stats />
        </main>
    );
};

export default Profile;