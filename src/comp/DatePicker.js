import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);   // state variable for start date
  const [endDate, setEndDate] = useState(null);      // state variable for end date

  const handleStartDateChange = (date) => {         // function to update start date
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {           // function to update end date
    setEndDate(date);
  };

  return (
    <div className="container">
        <h2>Date Picker</h2>
        <div className="row">
            <div className="col">
                <DatePicker
                    selected={startDate}                // current value of start date
                    onChange={handleStartDateChange}    // function to update start date
                    startDate={startDate}               // minimum date that can be selected
                    endDate={endDate}                   // maximum date that can be selected
                    selectsStart                      // indicate that this DatePicker is for selecting the start date
                    placeholderText="Start Date"
                    className="form-control"
                />
            </div>
            <div className="col">
                <DatePicker
                    selected={endDate}                  // current value of end date
                    onChange={handleEndDateChange}     // function to update end date
                    startDate={startDate}               // minimum date that can be selected
                    endDate={endDate}               // maximum date that can be selected
                    selectsEnd                    // indicate that this DatePicker is for selecting the end date
                    placeholderText="End Date"
                    className="form-control"
                />
            </div>
        </div>
    </div>
  );
};