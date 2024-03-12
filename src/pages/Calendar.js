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
<<<<<<< HEAD
=======
}

function Events(props) {
    const [eventList, setEventList] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = (event) => {
        setIsVisible(!isVisible);
    }
    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState(null);
    const [placeholderEvent, setPlaceholderEvent] = useState();
    useEffect(() => {
        const db = getDatabase();
        const checkEventsHasUser = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                const userId = user.userId;
                const updateUserEvents = async (user) => {
                    const eventsDataSnapshot = ref(db, "eventsData");
                    if (!eventsDataSnapshot) {
                        try {
                            const newEventsDataRef = push(db, "eventsData");
                            const newUserRef = push(newEventsDataRef, userId);
                            await set(newUserRef, {
                                title: 'Event Example',
                                date: '0000/00/00',
                                time: '00:00',
                                type: 'Example'
                            });
                            setPlaceholderEvent(newUserRef.key);
                            console.log('Event Placeholder created successfully!');
                        } catch (error) {
                            console.error('Error creating eventsData:', error);
                        }
                    }
                    const userSnapshot = await get(child(eventsDataRef, userId));
                    if (!userSnapshot) {
                        try {
                            const eventsDataRef = get(db, "eventsData");
                            const newUserRef = push(eventsDataRef, userId);
                            await set(newUserRef, {
                                title: 'Event Example',
                                date: '0000/00/00',
                                time: '00:00',
                                type: 'Example'
                            });
                            setPlaceholderEvent(newUserRef.key);
                            console.log('Event Placeholder created successfully!');
                        }catch (error) {
                            console.error('Error creating userEvents:', error);
                        }
                    }
                }
                updateUserEvents(userId);
            } else {
                setCurrentUser(null);
            }
            return
        });
        checkEventsHasUser();
        const eventsDataRef = ref(db, 'eventsData'); 
        const userEventsRef = ref(eventsDataRef, auth.userId);
        const offFunction = onValue(userEventsRef, (snapshot) => {
            if (snapshot.exists()) {
                const eventObjs = snapshot.val();
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
            checkEventsHasUser();
            offFunction();
        };
        return cleanup;
    }, [auth]);
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
            {isVisible && <Popup isVisible={isVisible} setIsVisible={setIsVisible} currentUser={currentUser} placeholderEvent={placeholderEvent} />}
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
        if (!props.currentUser || !props.currentUser.userId) {
            console.error('Current user or userId is not available!');
            return;
        }
        const db = getDatabase();
        const userEventsRef = ref(db, 'userEvents');
        const userRef = ref(userEventsRef, props.currentUser.userId);
        const updateUserEvents = async () => {
            try {
                const eventsSnapshot = await get(child(userRef));
                if (eventsSnapshot.exists()) {
                    const userEventsKey = eventsSnapshot.key;
                    if (userEventsKey === props.placeholderEvent) {
                        await set(userRef, {title:titleValue, date:dateValue, time:timeValue, type:eventTypeValue} );
                    } else {
                        push(userRef, {title:titleValue, date:dateValue, time:timeValue, type:eventTypeValue} );
                    }
                } else {
                    console.log("user does not exist or does not have events.");
                }
            } catch (error) {
                console.error('Error updating user events:', error);
            }
        }
        updateUserEvents();
        props.setIsVisible(!props.isVisible);
    }
    return (
        <div className="popup py-3" id="popup">
            <button className="btn-close" onClick={handleClose}></button>
            <form>
                <div className="popup-title">
                    <label htmlFor="title-input" className="title-label">Event Title:</label>
                    <input type="text" id="title-input" placeholder="My Event" value={titleValue} onChange={handleTitleChange} className="title-input"></input>
                </div>
                <div className="popup-date">
                    <label htmlFor="date-input" className="date-label">Date:</label>
                    <input type="date" id="date-input" value={dateValue} onChange={handleDateChange} className="date-input"></input>
                </div>
                <div className="popup-time">
                    <label htmlFor="time-input" className="time-label">Time:</label>
                    <input type="time" id="time-input" value={timeValue} onChange={handleTimeChange} className="time-input"></input>
                </div>
                <select className="popup-select" id='event-type-select' value={eventTypeValue} onChange={handleEventTypeChange}>
                    <option defaultValue>Livestream</option>
                    <option value="1">Concert</option>
                    <option value="2">Livestream</option>
                    <option value="3">Meet and Greet</option>
                </select>
                <button className="create-event" onClick={handleCreate}>Create Event</button>
            </form>
        </div>
    );
>>>>>>> 88e602ca81df11007305981fc84ef55f433f0c50
}