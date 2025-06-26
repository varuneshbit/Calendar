import React, { useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
} from 'date-fns';
import { days, months } from '../constants/CalendarConstants';
import '../components/Months.css';
import { eventDates } from '../constants/eventConstants';

function Months({ selectedMonth, setShowEventDialogueBox }) {
  const year = 2025;
  const currentDate = new Date(year, selectedMonth);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const handleEventClick = (date) => {
    setShowEventDialogueBox((prev) => !prev);
    console.log('Clicked event date:', date);
  };

  const generateDays = () => {
    const daysArray = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isToday =
          day.getDate() === todayDate &&
          day.getMonth() === todayMonth &&
          day.getFullYear() === todayYear;

        const dateFormatted = format(day, 'yyyy-MM-dd');
        const isEventDate = eventDates.includes(dateFormatted);

        daysArray.push(
          <div
            key={day}
            className={`dayCell 
              ${!isSameMonth(day, monthStart) ? 'outsideMonth' : ''} 
              ${isToday ? 'todayCell' : ''}
              ${isEventDate ? 'eventCell' : ''}`}
            onClick={
              isEventDate ? () => handleEventClick(dateFormatted) : undefined
            }
            style={{ cursor: isEventDate ? 'pointer' : 'default' }}
          >
            {format(day, 'd')}
          </div>
        );

        day = addDays(day, 1);
      }
    }

    return daysArray;
  };

  return (
    <>
      <div className="calendarContainer">
        <div className="daysOfCalendarMain">
          {days.map((currDay, index) => (
            <>
              <div className="daysOfCalendarTitle" key={index}>
                <p>{currDay}</p>
              </div>
            </>
          ))}
        </div>
        <div className="datesOfMonth">{generateDays()}</div>
      </div>
    </>
  );
}

export default Months;
