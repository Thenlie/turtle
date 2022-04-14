import React, { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatScoreDate, formatCalendarDate } from '../../../utils/helper';

const Calendar = ({ data }) => {
    const [value, onChange] = useState(new Date());

    let dates = data.scoresByUser.map(score => { return formatScoreDate(score.createdAt) });

    return (
        <div className='bg-slate-100 mb-3 sm:ml-3 rounded-md shadow-sm sm:w-1/2 lg:w-full lg:ml-0'>
            <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Calendar</h3>
            <ReactCalendar 
                onChange={onChange} 
                value={value} 
                className='!w-full !bg-slate-100 !border-none !rounded-b-md'
                tileClassName={({ date }) => {
                    if (dates.find(d => d === formatCalendarDate(date))) {
                        return  '!bg-green-200'
                    }
                }}
            />
        </div>
    );
};

export default Calendar;