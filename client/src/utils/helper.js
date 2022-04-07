import { DateTime } from 'luxon';

export const formatAge = (time) => {
    // get createdAt
    // compare to now
    // conditionally return based on age
    return time;
};

export const formatLastActive = (time) => {
    let d = DateTime.fromMillis(parseInt(time));
    return d.toLocaleString(DateTime.DATE_FULL);
};