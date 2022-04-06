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

    console.log(data)

    return (
        <section>
            <h2>Info</h2>
            <p>{user}</p>
        </section>
    );
};

export default Info;