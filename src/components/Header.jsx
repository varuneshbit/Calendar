import React, { useEffect } from 'react';
import '../components/Header.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { months } from '../constants/CalendarConstants';

function Header({
  selectedMonth,
  setSelectedMonth,
  setOffset,
  handlePrevForCalendar,
  handleNextForCalendar,
  anchorMonth }) {
  useEffect(() => {
    console.log('selectedMonth: ', selectedMonth);
  }, [selectedMonth]);

  const incrementMonth = () => {
    handleNextForCalendar();
    // if (selectedMonth < 11) {
    //   setSelectedMonth((prev) => prev + 1);
      setOffset((prev) => ['incremented', (prev[1] + 1) % 5]);
    // } else setSelectedMonth(0);
  };

  const decrementMonth = () => {
    handlePrevForCalendar();
    // if (selectedMonth > 0) {
    //   setSelectedMonth((prev) => prev - 1);
      setOffset((prev) => ['decremented', (prev[1] + 1) % 5]);
    // } else setSelectedMonth(11);
  };
  const anchorMonthDate = new Date(anchorMonth);
  // console.log('anchorMonth from calendar: ', anchorMonthDate.getMonth());
  return (
    <div className="headerMain">
      <p className="headerMainMonthName">
        {anchorMonth && months[anchorMonthDate.getMonth()].slice(0, 3)}'25
      </p>
      <div className="headerMainButtons">
        <div
          className="headerMainButton headerPrevButton"
          onClick={decrementMonth}
        >
          <ArrowLeft />
        </div>
        <div
          className="headerMainButton headerNextButton"
          onClick={incrementMonth}
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Header;
