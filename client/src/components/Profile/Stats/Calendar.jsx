import React, { useState } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='bg-slate-100 border border-slate-300 my-2 rounded-md shadow-sm'>
            <h3 className='bg-slate-300 font-bold p-1 rounded-t-md'>Calendar</h3>
            <ReactCalendar onChange={onChange} value={value} className='!w-full !bg-slate-100 !border-none !rounded-b-md'/>
        </div>
    );
};

export default Calendar;