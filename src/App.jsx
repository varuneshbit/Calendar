import React, { useState } from 'react';
import Calendar from './pages/Calendar';
import { addMonths, subMonths, startOfMonth } from 'date-fns';
import { classNameChanger } from './utils/classNameChanger';
import EventDialogueBox from './components/EventDialogueBox';
import './App.css';

function App() {
  const today = startOfMonth(new Date());

  const [monthList, setMonthList] = useState(() =>
    Array.from({ length: 5 }, (_, i) => addMonths(today, i - 2))
  );

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [offset, setOffset] = useState(['', 0]);
  const [showEventDialogueBox, setShowEventDialogueBox] = useState(false);

  console.log(monthList);
  const handlePrevForCalendar = () => {
    setMonthList((prevList) => {
      let newList = [...prevList];
      const newMonth =
        offset[1] === 0
          ? addMonths(newList[4], 1)
          : addMonths(newList[offset[1]] % 5, 1);
      console.log('offset: ', offset, ' ', [offset[1] % 5]);
      // newList = newList.slice((offset[1] + 1) % 5);
      // newList = [newList.slice()]
      // newList.pop();
      // newList.unshift(newMonth);
      // console.log("next month", newMonth)
      return newList; // remove leftmost, add rightmost
    });
  };

  const handleNextForCalendar = () => {
    // console.log("handled next")
    setMonthList((prevList) => {
      const newList = [...prevList];
      const firstMonth = newList[0];

      const newMonth =
        offset[1] === 0
          ? subMonths(prevList[0], 1)
          : subMonths(prevList[5 - offset[1]], 1);
      // console.log("newMonth :", newMonth);
      newList[4 - offset[1]] = newMonth;
      return newList; // remove rightmost, add leftmost
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
