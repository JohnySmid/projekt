import React from 'react';
import { Pie } from 'react-chartjs-2';

export const UserPieChart = ({ userId, data }) => {
    // Extract presence types and count their occurrences
    const userEvents = data.filter(event => event.presences.find(presence => presence.user.id === userId)!==undefined);
    
    
    // Collect all start dates and end dates
    const startDates = userEvents.map(event => new Date(event.startdate));
    const endDates = userEvents.map(event => new Date(event.enddate));

    // Get the current date
    const chosedate = "2022-04-19T08:00:00";
    const currentDate = new Date(chosedate);   

    // Find the indexes of the events that include the current date
    const currentIndexes = startDates.reduce((indexes, startDate, index) => {
      if (startDate <= currentDate && currentDate <= endDates[index]) {
        indexes.push(index);
      }
      return indexes;
    }, []);

    // If no events include the current date, return null
    if (currentIndexes.length === 0) {
      return null;
    }

  // Extract presence types and count their occurrences for the specific events and user
    const presenceCounts = currentIndexes.reduce((counts, currentIndex) => {
      const currentEvent = userEvents[currentIndex];
      console.log(currentEvent);
      currentEvent.presences.forEach(presence => {
        if (presence.user.id === userId) {
          const presenceType = presence.presenceType.name;
          counts[presenceType] = (counts[presenceType] || 0) + 1;
        }
      });
      return counts;
    }, {});
    console.log(presenceCounts);
 
  
    // Prepare data for the pie chart
    const chartData = {
        labels: Object.keys(presenceCounts).map((presenceType) => {
            if (presenceType === 'Přítomen') {
              return `Přítomen - ${userEvents[0]?.presences.find((presence) => presence.user.id === userId).user.name}`;
            } else if (presenceType === 'Neomluven') {
              return `Neomluven - ${userEvents[0]?.presences.find((presence) => presence.user.id === userId).user.name}`;
            } else {
              return `Dovolená - ${userEvents[0]?.presences.find((presence) => presence.user.id === userId).user.name}`;
            }
          }),
      datasets: [
        {
          data: Object.values(presenceCounts),
          backgroundColor: Object.keys(presenceCounts).map((presenceType) => {
            if (presenceType === 'Přítomen') {
                return '#1af203'; // Green
              } else if (presenceType === 'Neomluven') {
                return '#ff1748'; // Red
              } else {
                return '#e5f900'; // Yellow (for 'Dovolená')
              }
        
          }),
        },
      ],
    };
  
    return (
      <div style={{ width: '300px', height: '300px' }}>
        <Pie data={chartData} />
      </div>
    );
  };