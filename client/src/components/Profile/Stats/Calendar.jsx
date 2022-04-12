import React, { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatScoreDate, formatCalendarDate } from '../../../utils/helper';

const Calendar = ({ data }) => {
    const [value, onChange] = useState(new Date());
    
    let dates = data.scoresByUser.map(score => { return formatScoreDate(score.createdAt) });

    return (
        <div className='bg-slate-100 border border-slate-300 my-2 rounded-md shadow-sm'>
            <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Calendar</h3>
            <ReactCalendar 
                onChange={onChange} 
                value={value} 
                className='!w-full !bg-slate-100 !border-none !rounded-b-md'
                tileClassName={({ date, view }) => {
                    if (dates.find(x => x === formatCalendarDate(date))) {
                        return  '!bg-green-200'
                    }
                }}
            />
        </div>
    );
};

export default Calendar;