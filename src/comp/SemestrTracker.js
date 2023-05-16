import React, { useState } from 'react';

export const SemesterTracker = () => {
    /* Pro debugovani, lze nastavit vlastni datum... */
    /*  const newDate = new Date();
        newDate.setDate(1);
        newDate.setMonth(8);
        newDate.setFullYear(new Date().getFullYear());
    */
    const [currentDate, setCurrentDate] = useState(new Date()); // pro debug: useState(newDate); | state variable for the current date
    const currentMonth = currentDate.getMonth();                // get the current month from the date object
    const [currentSemester, setCurrentSemester] = useState(GetCurrentSemester(currentMonth));       // state variable for the current semester

    function GetCurrentSemester(month) {
        // determine the current semester based on the month
        if (month >= 2 && month <= 7) {     // od brezna do srpna
            return "letni";
        } else {                            // od zari do unora
            return "zimni";
        }
    }

    return (
        <div className="container">
            <h2>Semester Tracker</h2>
            <p>Current Semester: {currentSemester}</p>
            <p>Selected Date: {currentDate.toDateString()}</p>
        </div>
    );
};