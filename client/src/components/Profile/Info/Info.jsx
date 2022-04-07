import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../../utils/queries';
import { PencilAltIcon } from '@heroicons/react/outline';
import { formatAge, formatLastActive } from '../../../utils/helper';

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
        <section className='bg-slate-200 m-4 p-4 flex'>
            <div>
                <img src='http://placehold.jp/150x150.png' className='inline'></img>
            </div>
            <div className='pl-4 self-center'>
                <p className='text-xl my-1'>Username: <span>{data.user.username}</span></p>
                <p className='text-xl my-1'>Last Active: <span>{formatLastActive(data.user.lastActive)}</span></p>
                <p className='text-xl my-1'>Account Age: <span>{formatAge(data.user.createdAt)}</span></p>
                <p className='text-xl my-1'>Flag: </p>
            </div>
            <div className='ml-auto self-end'>
                <PencilAltIcon width={25} className=''/>
            </div>
        </section>
    );
};

export default Info;