import React from 'react';
import { Pie } from 'react-chartjs-2';

/**
 * A component that displays a pie chart representing presence data for a user.
 * @param {Object} props - The component props.
 * @param {string} props.userId - The ID of the user.
 * @param {Array} props.data - An array of events data.
 * @returns {JSX.Element|null} - The rendered pie chart component or null if no events match the current date.
 */

export const UserPieChart = ({ userId, data }) => {
  // Extrahuje typy přítomnosti a počítá jejich výskyty
  const userEvents = data.filter(event => event.presences.find(presence => presence.user.id === userId) !== undefined);
  
  // Sbírá všechny počáteční a koncové datumy událostí
  const startDates = userEvents.map(event => new Date(event.startdate));
  const endDates = userEvents.map(event => new Date(event.enddate));

  // Získá aktuální datum nebo vybrané.
  const chosedate = "2022-04-19T08:00:00";
  const currentDate = new Date(chosedate);   

  // Najde indexy událostí, které zahrnují aktuální datum
  const currentIndexes = startDates.reduce((indexes, startDate, index) => {
    if (startDate <= currentDate && currentDate <= endDates[index]) {
      indexes.push(index);
    }
    return indexes;
  }, []);

  // Pokud neobsahuje žádná událost aktuální datum, vrátí null
  if (currentIndexes.length === 0) {
    return null;
  }

  // Extrahuje typy přítomnosti a počítá jejich výskyty pro dané události a uživatele
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
 
  // Připraví data pro koláčový graf
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
            return '#1af203'; // Zelená
          } else if (presenceType === 'Neomluven') {
            return '#ff1748'; // Červená
          } else {
            return '#e5f900'; // Žlutá (pro 'Dovolená')
          }
        }),
      },
    ],
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={chartData} />
      {currentDate.toLocaleString()}
    </div>
  );
};