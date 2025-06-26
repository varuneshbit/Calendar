import React, { useState } from 'react';
import Calendar from './pages/Calendar';
import { addMonths, subMonths, startOfMonth } from 'date-fns';
import { classNameChanger } from './utils/classNameChanger';
import EventDialogueBox from './components/EventDialogueBox';
import './App.css';

function App() {
  const today = startOfMonth(new Date());

  // Initialize 5 months: prev2 to next2
  const [monthList, setMonthList] = useState(() =>
    Array.from({ length: 5 }, (_, i) => addMonths(today, i - 2))
  );

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [offset, setOffset] = useState(['', 0]);
  const [showEventDialogueBox, setShowEventDialogueBox] = useState(false);

  console.log(monthList)
  const handlePrevForCalendar = () => {
    setMonthList((prevList) => {
      const newMonth = addMonths(prevList[4], 1);
      return [...prevList.slice(1), newMonth]; // remove leftmost, add rightmost
    });
  };

  const handleNextForCalendar = () => {
    setMonthList((prevList) => {
      const newMonth = subMonths(prevList[0], 1);
      return [newMonth, ...prevList.slice(0, 4)]; // add leftmost, remove rightmost
    });
  };

  return (
    <div className="mainApp">
      {monthList.map((currMonth, index) => (
        <Calendar
          key={index}
          offset={offset}
          className={classNameChanger(index + 1, offset)}
          setOffset={setOffset}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          handlePrevForCalendar={handlePrevForCalendar}
          handleNextForCalendar={handleNextForCalendar}
          anchorMonth={currMonth}
          showEventDialogueBox={showEventDialogueBox}
          setShowEventDialogueBox={setShowEventDialogueBox}
        />
      ))}
      <EventDialogueBox showEventDialogueBox={showEventDialogueBox} />
    </div>
  );
}

export default App;
