import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../../utils/queries';
import ReactCountryFlag from "react-country-flag"
import { formatAge, formatDateFull } from '../../../utils/helper';

const Info = ({ user }) => {
    const { loading, data } = useQuery(QUERY_USER, {
        variables: {id: user} 
    });

    if (loading || !data) {
        return (
            <section>
                <p>Loading...</p>
            </section> 
        );
    };

    return (
        <section className='bg-slate-300 m-4 p-4 flex flex-col sm:flex-row rounded-md'>
            <div className='text-center sm:text-left'>
                <img src='http://placehold.jp/150x150.png' className='inline' alt='placeholder'></img>
            </div>
            <div className='pt-2 sm:pl-4 sm:pt-0 sm:self-center'>
                <p className='text-2xl font-bold my-1'>{data.user.username}</p>
                <p className='text-xl my-1'>Last Active: <span className='italic'>{formatDateFull(data.user.lastActive)}</span></p>
                <p className='text-xl my-1'>Account Age: <span className='italic'>{formatAge(data.user.createdAt)}</span></p>
                <p className='text-xl my-1'><ReactCountryFlag countryCode={data.user.country} svg /></p>
            </div>
        </section>
    );
};

export default Info;