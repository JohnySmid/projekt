import React from 'react';
import { Pie } from 'react-chartjs-2';

export const MembershipPieChart = ({ groupId, data }) => {
    // Filtruje události patřící do dané skupiny
    const groupEvents = data.filter(event =>
      event.presences.find(
        presence => presence.user.membership[0].group.id === groupId
      )
    );
  
    // Sbírá všechny počáteční a koncové datumy událostí
    const startDates = groupEvents.map(event => new Date(event.startdate));
    const endDates = groupEvents.map(event => new Date(event.enddate));
  
    // Získá aktuální datum
    const chosedate = "2024-04-19T08:00:00";
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
  
    // Extrahuje typy přítomnosti a počítá jejich výskyty pro konkrétní skupinu
    const presenceCounts = currentIndexes.reduce((counts, currentIndex) => {
      const currentEvent = groupEvents[currentIndex];
      console.log(currentEvent);
      currentEvent.presences.forEach(presence => {
        if (presence.user.membership[0].group.id === groupId) {
          const presenceType = presence.presenceType.name;
          counts[presenceType] = (counts[presenceType] || 0) + 1;
        }
      });
      return counts;
    }, {});
    console.log(presenceCounts);
  
    // Připraví data pro koláčový graf
    const chartData = {
      labels: Object.keys(presenceCounts).map(presenceType => {
        if (presenceType === 'Přítomen') {
          return `Přítomen - ${groupEvents[0].presences.find(presence => presence.user.membership[0].group.id === groupId).user.membership[0].group.name}`;
        } else if (presenceType === 'Neomluven') {
          return `Neomluven - ${groupEvents[0].presences.find(presence => presence.user.membership[0].group.id === groupId).user.membership[0].group.name}`;
        } else {
          return `Dovolená - ${groupEvents[0].presences.find(presence => presence.user.membership[0].group.id === groupId).user.membership[0].group.name}`;
        }
      }),
      datasets: [
        {
          data: Object.values(presenceCounts),
          backgroundColor: Object.keys(presenceCounts).map(presenceType => {
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