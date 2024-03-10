import React, { useEffect, useState } from 'react';
import daysOfMonth2024 from '../data/days.json'
import { Outlet, useParams, Link } from 'react-router-dom';
import { getDatabase, onValue, ref, set, push, get, update, child } from 'firebase/database';

export function Calendar(props) {
    return (
        <div className="layout d-flex flex-column flex-md-row">
            <Outlet />
            <Events userId={props.userId} />
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
    const [eventList, setEventList] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = (event) => {
        setIsVisible(!isVisible);
    }
    useEffect(() => {
        const db = getDatabase();
        const userEventsRef = ref(db, 'userEvents');
        console.log(props.userId);
        // const eventsRef = ref(userEventsRef, props.userId);
        get(child(userEventsRef, props.userId)).then((snapshot) => {
            if (!snapshot.exists()) {
              // Node doesn't exist, create it
              set(eventsRef, { dummyKey: true });
            }
            return Promise.resolve(); // Node already exists, resolve the promise
          }).then(() => {
            console.log('eventsNode created or already exists');
          }).catch((error) => {
            console.error('Error checking/creating eventsNode:', error);
          });
        const eventsRef = ref(userEventsRef, props.userId);
        const offFunction = onValue(eventsRef, (snapshot) => {
            const eventObjs = snapshot.val();
            if (eventObjs !== null) {
                const eventKeys = Object.keys(eventObjs);
                const eventArray = eventKeys.map((keyString) => {
                    const currEvent = eventObjs[keyString];
                    return (
                        <div className="event" key={currEvent.date + currEvent.time}>
                            <h2>{currEvent.title}</h2>
                            <p>{currEvent.date}</p>
                            <p>{currEvent.time}</p>
                            <p>{currEvent.type}</p>
                        </div>
                    );
                });
                setEventList(eventArray);
            } else {
                setEventList([]);
            }
        });
        function cleanup() {
            offFunction();
        };
        return cleanup;
    });
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
    const handleCreate = (event) => {
        const eventData = {title: titleValue, date: dateValue, time: timeValue, type: eventTypeValue};
        const db = getDatabase();
        const userEventsRef = ref(db, 'userEvents');
        const eventsRef = ref(userEventsRef, props.userId);
        const newEventRef = push(eventsRef);
        const newEventKey = newEventRef.key;
        const updatedEventRef = ref(eventsRef, newEventKey);
        update(updatedEventRef, eventData);
        setIsVisible(!isVisible);
    }
    return (
        <div>
            <section className="event-section d-flex flex-column">
                <h1 className="event-heading">Events</h1>
                <div className="events">
                    <button  className="add-event" onClick={handleClick}>
                        <img src="photos/calendar/event_plus.png" alt="plus icon"></img>
                    </button>
                    {eventList}
                </div>
            </section>
            {isVisible && <Popup isVisible={isVisible} setIsVisible={setIsVisible} userId={props.userId} handleClose={handleClick} handleCreate={handleCreate} titleValue={titleValue} handleTitleChange={handleTitleChange} timeValue={timeValue} handleTimeChange={handleTimeChange} dateValue={dateValue}  handleDateChange={handleDateChange} eventTypeValue={eventTypeValue} handleEventTypeChange={handleEventTypeChange} />}
        </div>
    );
}

function Popup(props) {
    // const [titleValue, setTitleValue] = useState('');
    // const [dateValue, setDateValue] = useState('');
    // const [timeValue, setTimeValue] = useState('');
    // const [eventTypeValue, setEventTypeValue] = useState('');
    // const handleTitleChange = (event) => {
    //     const newTitle = event.target.value;
    //     setTitleValue(newTitle);
    // }
    // const handleDateChange = (event) => {
    //     const newDate = event.target.value;
    //     setDateValue(newDate);
    // }
    // const handleTimeChange = (event) => {
    //     const newTime = event.target.value;
    //     setTimeValue(newTime);
    // }
    // const handleEventTypeChange = (event) => {
    //     const newEventType = event.target.value;
    //     setEventTypeValue(newEventType);
    // }
    // const handleClose = (event) => {
    //     props.setIsVisible(!props.isVisible);
    // }
    // const handleCreate = (event) => {
    //     const eventData = {title: titleValue, date: dateValue, time: timeValue, type: eventTypeValue};
    //     const db = getDatabase();
    //     const userEventsRef = ref(db, 'userEvents');
    //     const eventsRef = ref(userEventsRef, props.userId);
    //     const newEventKey = push(child(eventsRef)).key;
    //     const newEventRef = ref(eventsRef, newEventKey);
    //     update(newEventRef, eventData);
    //     props.setIsVisible(!props.isVisible);
    // }
    return (
        <div className="popup py-3" id="popup">
            <button className="btn-close" onClick={props.handleClose}></button>
            <form onSubmit={props.handleCreate}>
                <div className="popup-title">
                    <label htmlFor="title-input" className="title-label">Event Title:</label>
                    <input type="text" id="title-input" placeholder="My Event" value={props.titleValue} onChange={props.handleTitleChange} className="title-input"></input>
                </div>
                <div className="popup-date">
                    <label htmlFor="date-input" className="date-label">Date:</label>
                    <input type="date" id="date-input" value={props.dateValue} onChange={props.handleDateChange} className="date-input"></input>
                </div>
                <div className="popup-time">
                    <label htmlFor="time-input" className="time-label">Time:</label>
                    <input type="time" id="time-input" value={props.timeValue} onChange={props.handleTimeChange} className="time-input"></input>
                </div>
                <select className="popup-select" id='event-type-select' value={props.eventTypeValue} onChange={props.handleEventTypeChange}>
                    <option defaultValue>Livestream</option>
                    <option value="1">Concert</option>
                    <option value="2">Livestream</option>
                    <option value="3">Meet and Greet</option>
                </select>
                <button type="submit" className="create-event">Create Event</button>
            </form>
        </div>
    );
}