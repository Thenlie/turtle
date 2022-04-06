import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../../utils/queries'

const Info = ({ user }) => {
    const { loading, data } = useQuery(QUERY_USER, {
        variables: {id: user} 
    });

    if (loading) {
        return (
            <section>
                <p>Loading...</p>
            </section> 
        );
    };

    return (
        <section>
            <h2>Info</h2>
            <p>{user}</p>
            <p>Username: <span>{data.user.username}</span></p>
        </section>
    );
};

export default Info;