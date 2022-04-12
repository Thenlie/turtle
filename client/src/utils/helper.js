import { DateTime } from 'luxon';

export const formatAge = (time) => {
    let y, m, d;
    const now = DateTime.now();
    const start = DateTime.fromMillis(parseInt(time));
    let diff = now.diff(start, ['years', 'months', 'days']).toObject();
    diff.years > 0 ? y = Math.floor(diff.years) : y = 0;
    diff.months > 0 ? m = Math.floor(diff.months) : m = 0;
    diff.days > 1 ? d = Math.floor(diff.days) : d = 1;
    return (`${y > 0 ? y + ` year${y > 1 ? 's,' : ','}` : ''} ${m > 0 ? m + ` month${m > 1 ? 's, ' : ', '}` : ''}` + d + ` day${d > 1 ? 's' : ''}`);
};

export const formatLastActive = (time) => {
    let date = DateTime.fromMillis(parseInt(time));
    return date.toLocaleString(DateTime.DATE_FULL);
};

export const formatScoreDate = (time) => {
    let date = DateTime.fromMillis(parseInt(time));
    return date.toISODate()
};

export const formatCalendarDate = (date) => {
    return DateTime.fromJSDate(date).toISODate()
};