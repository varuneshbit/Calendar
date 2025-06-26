import React, { useState } from 'react';
import Header from '../components/Header';
import Months from '../components/Months';
import '../pages/Calendar.css';
import { months } from '../constants/CalendarConstants';


function Calendar({
  className,
  customStyle,
  setOffset,
  selectedMonth,
  setSelectedMonth,
  handlePrevForCalendar,
  handleNextForCalendar,
  anchorMonth,
  showEventDialogueBox,
  setShowEventDialogueBox,
}) {
  // console.log("received anchorMonth: ", anchorMonth);
  return (
    <>
      <div className={`calendarMain ${className}`}>
        <Header
          setSelectedMonth={setSelectedMonth}
          selectedMonth={selectedMonth}
          setOffset={setOffset}
          handlePrevForCalendar={handlePrevForCalendar}
          handleNextForCalendar={handleNextForCalendar}
          anchorMonth={anchorMonth}
        />
        <Months
          selectedMonth={anchorMonth.getMonth()}
          showEventDialogueBox={showEventDialogueBox}
          setShowEventDialogueBox={setShowEventDialogueBox}
        />
      </div>
      
    </>
  );
}

export default Calendar;
