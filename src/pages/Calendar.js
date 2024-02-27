import React, { useState } from 'react';

// data:
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysOfMonth2024 = {
    January:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0],
    February:[0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 0, 0],
    March:[0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0, 0, 0, 0],
    April:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 0, 0, 0, 0],
    May:[0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0],
    June:[0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 0, 0, 0, 0, 0, 0],
    July:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0],
    August:[0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    September:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 0, 0, 0, 0, 0],
    October:[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0],
    November:[0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    December:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0, 0]
};

// Calendar:
export default function Calendar(props) {
    const [displayMonth, setDisplayMonth] = useState(months[2]);
    return (
        <div className="layout d-flex flex-column flex-md-row">
            <section className="calendar">
                <MonthBar displayMonth={displayMonth} setDisplayMonth={setDisplayMonth} />
                <table>
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
                </table>
            </section>
            <Events />
        </div>
    );
}

// Calendar Components:
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
            const currMonth = months.indexOf(props.displayMonth);
            props.setDisplayMonth(months[currMonth - 1]);
        }
    }
    const handleNextMonth = (event) => {
        if (props.displayMonth !== 'December') {
            const currMonth = months.indexOf(props.displayMonth);
            props.setDisplayMonth(months[currMonth + 1]);
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
    const dayArray = daysOfMonth2024[props.displayMonth].map((day) => {
        if (day === 0) {
            return (
                <td className='no-hover'>
                    <span></span>
                </td>
            );
        } else {
            return (
                <td>{day}
                    <span></span>
                </td>
            )
        }
    });
    const rowArray = [];
    let startIndex = 0;
    while (startIndex < dayArray.length) {
        rowArray.push(<CalendarRow startIndex={startIndex} dayArray={dayArray} />);
        startIndex = startIndex + 7;
    }
    return rowArray;
}

function CalendarRow(props) {
    const initialIndex = props.startIndex;
    const dayCells = [];
    for (let i = initialIndex; i < (initialIndex + 7); i++) {
        dayCells.push(props.dayArray[i]);
    }
    return (
        <tr>
            {dayCells}
        </tr>
    );
}

// Event Components:
function Events(props) {
    const [eventList, setEventList] = useState([{title:'Event 1', date:'March 8, 2024', time:'6:00 pm PST', type:'Concert'}]);
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = (event) => {
        setIsVisible(!isVisible);
    }
    const allEvents = eventList.map((event) => {
        return (
            <div className="event">
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
                    <button  className="add-event" onClick={handleClick}>
                        <img src="photos/calendar/event_plus.png" alt="plus icon"></img>
                    </button>
                    {allEvents}
                </div>
            </section>
            <Popup isVisible={isVisible} setIsVisible={setIsVisible} eventList={eventList} setEventList={setEventList} />
        </div>
    );
}

function Popup(props) {
    if (!props.isVisible) {
        return null;
    }
    const handleClose = (event) => {
        props.setIsVisible(!props.isVisible);
    }
    const handleCreate = (event) => {
        const newEventList = [...props.eventList, {title:'Event 2', date:'March 27, 2024', time:'4:00 pm PST', type:'Livestream'}];
        props.setEventList(newEventList);
        props.setIsVisible(!props.isVisible);
    }
    return (
        <div class="popup py-3" id="popup">
            <button class="btn-close" onClick={handleClose}></button>
            <form>
                <div class="popup-title">
                    <label for="title-input" class="title-label">Event Title:</label>
                    <input type="text" id="title-input" placeholder="My Event" class="title-input"></input>
                </div>
                <div class="popup-date">
                    <label for="date-input" class="date-label">Date:</label>
                    <input type="date" id="date-input" class="date-input"></input>
                </div>
                <div class="popup-time">
                    <label for="time-input" class="time-label">Time:</label>
                    <input type="time" id="time-input" class="time-input"></input>
                </div>
                <select class="popup-select">
                    <option selected>Type of Event</option>
                    <option value="1">Concert</option>
                    <option value="2">Livestream</option>
                    <option value="3">Meet and Greet</option>
                </select>
                <button class="create-event" onSubmit={handleCreate}>Create Event</button>
            </form>
        </div>
    );
}