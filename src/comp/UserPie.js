import React from 'react';
import { Pie } from 'react-chartjs-2';

export const UserPieChart = ({ userId, data }) => {
    // Extract presence types and count their occurrences
    const userEvents = data.presences.filter((presence) => presence.user.id === userId);

  
    // Extract presence types and count their occurrences
    const presenceCounts = userEvents.reduce((counts, presence) => {
        const presenceType = presence.presenceType.name;
        counts[presenceType] = (counts[presenceType] || 0) + 1;
        return counts;
      }, {});
  
    // Prepare data for the pie chart
    const chartData = {
        labels: Object.keys(presenceCounts).map((presenceType) => {
            if (presenceType === 'Přítomen') {
              return `Přítomen - ${data.presences.find((presence) => presence.user.id === userId).user.name}`;
            } else if (presenceType === 'Neomluven') {
              return `Neomluven - ${data.presences.find((presence) => presence.user.id === userId).user.name}`;
            } else {
              return `Dovolená - ${data.presences.find((presence) => presence.user.id === userId).user.name}`;
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