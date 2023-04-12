import React, { useState } from 'react';

const SemesterTracker = () => {
    /* Pro debugovani, lze nastavit vlastni datum... */
    /*  const newDate = new Date();
        newDate.setDate(1);
        newDate.setMonth(8);
        newDate.setFullYear(new Date().getFullYear());
    */
    const [currentDate, setCurrentDate] = useState(new Date()); // pro debug: useState(newDate);
    const currentMonth = currentDate.getMonth();
    const [currentSemester, setCurrentSemester] = useState(GetCurrentSemester(currentMonth));

    function GetCurrentSemester(month) {
        //indexy mesicu 
        if (month >= 2 && month <= 7) {
            return "letni";
        } else {
            return "zimni";
        }
    }

    return (
        <div>
            <h2>Semester Tracker</h2>
            <p>Current Semester: {currentSemester}</p>
            <p>Selected Date: {currentDate.toDateString()}</p>
        </div>
    );
};

export default SemesterTracker;
