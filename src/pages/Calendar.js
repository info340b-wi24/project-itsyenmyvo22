import React, { useState } from 'react';
import daysOfMonth2024 from '../data/days.json';
//import { getDatabase, onValue, ref, set as firebaseSet } from 'firebase/database';

export default function Calendar(props) {
    const months = Object.keys(daysOfMonth2024);
    const [displayMonth, setDisplayMonth] = useState(months[2]);
    return (
        <div className="layout d-flex flex-column flex-md-row">
            <section className="calendar">
                <MonthBar displayMonth={displayMonth} setDisplayMonth={setDisplayMonth} months={months} />
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
            <Events />
        </div>
    );
}

function MonthBar(props) {
    let prevClass = 'cal-prev';
    let nextClass = 'cal-next';
    if (props.displayMonth === 'January') {
        prevClass = 'no-cal-prev';
    } else if (props.displayMonth === 'December') {
        nextClass = 'no-cal-next';
    }
    const handlePrevMonth = (event) => {
        if (props.displayMonth !== 'January') {
            const currMonth = props.months.indexOf(props.displayMonth);
            props.setDisplayMonth(props.months[currMonth - 1]);
        }
    }
    const handleNextMonth = (event) => {
        if (props.displayMonth !== 'December') {
            const currMonth = props.months.indexOf(props.displayMonth);
            props.setDisplayMonth(props.months[currMonth + 1]);
        }
    }
    return (
        <div className="month">
            <button onClick={handlePrevMonth} className={prevClass}>
                <img src="photos/calendar/month-arrow.png" alt="back arrow"></img>
            </button>
            <h1>{props.displayMonth} 2024</h1>
            <button onClick={handleNextMonth} className={nextClass}>
                <img src="photos/calendar/month-arrow.png" alt="forward arrow"></img>
            </button>
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
            return (
                <td key={key}>{day}
                    <span></span>
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

function Events(props) {
    const [eventList, setEventList] = useState([{title:'Event 1', date:'March 8, 2024', time:'6:00 pm PST', type:'Concert'}]);
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = (event) => {
        setIsVisible(!isVisible);
    }
    // allEvents should be established in effectHook
    // there should be an onValue event listener inside this eventHook
    const allEvents = eventList.map((event) => {
        return (
            <div className="event" key={event.date + event.time}>
                <h2>{event.title}</h2>
                <p>{event.date}</p>
                <p>{event.time}</p>
                <p>{event.type}</p>
            </div>
        );
    });
    return (
        <div>
            <section className="event-section d-flex flex-column">
                <h1 className="event-heading">Events</h1>
                <div className="events">
                    <button  className="add-event" aria-label='Add event' onClick={handleClick}>
                        <img src="photos/calendar/event_plus.png" alt="plus icon"></img>
                    </button>
                    {allEvents}
                </div>
            </section>
            {isVisible && <Popup isVisible={isVisible} setIsVisible={setIsVisible} eventList={eventList} setEventList={setEventList} />}
        </div>
    );
}

function Popup(props) {
    const [titleValue, setTitleValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [eventTypeValue, setEventTypeValue] = useState('');
    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setTitleValue(newTitle);
    }
    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setDateValue(newDate);
    }
    const handleTimeChange = (event) => {
        const newTime = event.target.value;
        setTimeValue(newTime);
    }
    const handleEventTypeChange = (event) => {
        const newEventType = event.target.value;
        setEventTypeValue(newEventType);
    }
    const handleClose = (event) => {
        props.setIsVisible(!props.isVisible);
    }
    const handleCreate = (event) => {
        // const db = getDatabase();
        // const eventsRef = ref(db, "events");
        // const newEventRef = ref(eventsRef, titleValue)
        // firebaseSet(newEventRef, {title:titleValue, date:dateValue, time:timeValue, type:eventTypeValue});
        props.setIsVisible(!props.isVisible);
    }
    return (
        <div className="popup py-3" id="popup">
            <button className="btn-close" aria-label='Close event popup' onClick={handleClose}></button>
            <form>
                <div className="popup-title">
                    <label htmlFor="title-input" className="title-label">Event Title:</label>
                    <input type="text" id="title-input" placeholder="My Event" value={titleValue} className="title-input"></input>
                </div>
                <div className="popup-date">
                    <label htmlFor="date-input" className="date-label">Date:</label>
                    <input type="date" id="date-input" value={dateValue} className="date-input"></input>
                </div>
                <div className="popup-time">
                    <label htmlFor="time-input" className="time-label">Time:</label>
                    <input type="time" id="time-input" value={timeValue} className="time-input"></input>
                </div>
                <div className='popup-event-type'>
                    <label htmlFor='event-type-select' className='event-type-label'></label>
                    <select className="popup-select" id='event-type-select' value={eventTypeValue}>
                        <option defaultValue>Livestream</option>
                        <option value="1">Concert</option>
                        <option value="2">Meet and Greet</option>
                    </select>
                </div>
                <button className="create-event" aria-label='Save event' onSubmit={handleCreate}>Create Event</button>
            </form>
        </div>
    );
}