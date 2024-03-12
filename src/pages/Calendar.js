import React, { useEffect, useState } from 'react';
import daysOfMonth2024 from '../data/days.json'
// import eventsOf2024 from '../data/EVENTS_JSON'
import { Outlet, useParams, Link } from 'react-router-dom';

export function Calendar(props) {
    return (
        <div className="layout d-flex flex-column flex-md-row">
            <Outlet />
         </div>
    );
}
export function DefaultCalendarTable(props) {
    const months = Object.keys(daysOfMonth2024);
    const displayMonth = months[2];
    return (
        <section className="calendar">
            <DefaultMonthBar displayMonth={displayMonth} months={months} />
            <table>
                <tbody>
                    <tr>
                        <th>SUN</th>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THU</th>
                        <th>FRI</th>
                        <th>SAT</th>
                    </tr>
                    {<CalendarBody displayMonth={displayMonth} />}
                </tbody>
            </table>
        </section>
    );
}
export function CalendarTable(props) {
    const months = Object.keys(daysOfMonth2024);
    const { currMonth } = useParams();
    const displayMonth = currMonth;
    return (
        <section className="calendar">
            <MonthBar displayMonth={displayMonth} months={months} />
            <table>
                <tbody>
                    <tr>
                        <th>SUN</th>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THU</th>
                        <th>FRI</th>
                        <th>SAT</th>
                    </tr>
                    {<CalendarBody displayMonth={displayMonth} />}
                </tbody>
            </table>
        </section>
    );
}
function DefaultMonthBar(props) {
    let prevClass = 'cal-prev';
    let nextClass = 'cal-next';
    let prevMonth = props.displayMonth;
    let nextMonth = props.displayMonth;
    const month = props.months.indexOf(props.displayMonth);
    if (props.displayMonth === 'January') {
        prevClass = 'no-cal-prev';
        nextMonth = props.months[month + 1];
    } else if (props.displayMonth === 'December') {
        nextClass = 'no-cal-next';
        prevMonth = props.months[month - 1];
    } else {
        prevMonth = props.months[month - 1];
        nextMonth = props.months[month + 1];
    };
    return (
        <div className="month">
            <Link to={`${prevMonth}`} className={prevClass}>
                <img src="photos/calendar/month-arrow.png" alt="back arrow"></img>
            </Link>
            <h1>{props.displayMonth} 2024</h1>
            <Link to={`${nextMonth}`} className={nextClass}>
                <img src="photos/calendar/month-arrow.png" alt="forward arrow"></img>
            </Link>
        </div>
    );
}
function MonthBar(props) {
    let prevClass = 'cal-prev';
    let nextClass = 'cal-next';
    let prevMonth = props.displayMonth;
    let nextMonth = props.displayMonth;
    const month = props.months.indexOf(props.displayMonth);
    if (props.displayMonth === 'January') {
        prevClass = 'no-cal-prev';
        nextMonth = props.months[month + 1];
    } else if (props.displayMonth === 'December') {
        nextClass = 'no-cal-next';
        prevMonth = props.months[month - 1];
    } else {
        prevMonth = props.months[month - 1];
        nextMonth = props.months[month + 1];
    };
    return (
        <div className="month">
            <Link to={`../${prevMonth}`} className={prevClass}>
                <img src="../photos/calendar/month-arrow.png" alt="back arrow"></img>
            </Link>
            <h1>{props.displayMonth} 2024</h1>
            <Link to={`../${nextMonth}`} className={nextClass}>
                <img src="../photos/calendar/month-arrow.png" alt="forward arrow"></img>
            </Link>
        </div>
    );
}
function CalendarBody(props) {
    const rowArray = [];
    const dayArray = daysOfMonth2024[props.displayMonth].map((day, index) => {
        const key = index;
        if (day === 0) {
            return (
                <td className='no-hover' key={key}>
                    <span></span>
                </td>
            );
        } else {
            let event = '';
            if (eventsOf2024.hasOwnProperty(props.displayMonth)) {
                const eventMonth = eventsOf2024[props.displayMonth];
                if(eventMonth.hasOwnProperty(day)) {
                    event = eventMonth[day]
                }
            }
            return (
                <td key={key}>{day}
                    <span>{event}</span>
                </td>
            );
        };
    });
    let startIndex = 0;
    while (startIndex < dayArray.length) {
        rowArray.push(<CalendarRow key={startIndex} startIndex={startIndex} dayArray={dayArray} />);
        startIndex = startIndex + 7;
    }
    return rowArray;
}
function CalendarRow(props) {
    const initialIndex = props.startIndex;
    const dayCells = [];
    for (let i = '' + initialIndex; i < (initialIndex + 7); i++) {
        dayCells.push(props.dayArray[i]);
    };
    return (
        <tr key={initialIndex}>
            {dayCells}
        </tr>
    );
}