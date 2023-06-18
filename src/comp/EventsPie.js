import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';


export const MyPieChart = ({ data, event }) => {
    
  const chosedate = "2023-04-19T08:00:00";
  const date = new Date(chosedate); // new Date() → aktuální datum
  const Enddate = new Date(event.enddate);
  const Startdate = new Date(event.startdate);

  let valid = false;
  if (date <= Enddate && date >= Startdate) {
    valid = true;
  }

  // Počítá počet lidí s každým typem přítomnosti
  const presenceCounts = data.reduce((counts, presence) => {
    const presenceType = presence.presenceType.name;
    counts[presenceType] = (counts[presenceType] || 0) + 1;
    return counts;
  }, {});

  // Připravuje objekt dat pro koláčový graf
  const chartData = {
    labels: Object.keys(presenceCounts).map(presenceType => {
      if (presenceType === 'Přítomen') {
        return 'Přítomen';
      } else if (presenceType === 'Neomluven') {
        return 'Neomluven';
      } else if (presenceType === 'Dovolená') {
        return 'Dovolená';
      } else {
        return 'Ostatní';
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
          } else if (presenceType === 'Dovolená') {
            return '#e5f900'; // Žlutá
          } else {
            return '#eb8109'; // Oranžová (pro ostatní typy)
          }
        }),
      },
    ],
  };

  // Pokud zvolené datum je v rozmezí události, zobrazi kolač
   if (valid){
    return (
      <>
        <div style={{ width: '300px', height: '300px' }}>
          <Pie data={chartData} />
          {date.toLocaleString()}
        </div>
      </>
    );
   }
   else{
    // Pokud zvolené datum není v rozmezí události, nezobrazuje se nic
    return null
   }
  };