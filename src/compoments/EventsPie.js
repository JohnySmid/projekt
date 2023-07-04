import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';


/**
 * A component that displays a pie chart showing the presence distribution for a specific date.
 * @param {Object} data - The data containing presence information.
 * @param {Object} event - The event object containing start and end dates.
 * @returns {JSX.Element|null} - The rendered pie chart component or null if the date is outside the event range.
 */

// Slovník typů přítomnosti a jejich popisků a barev
const presenceTypeDictionary = {
  'Přítomen': {
    label: 'Přítomen',
    color: '#1af203', // Zelená
  },
  'Neomluven': {
    label: 'Neomluven',
    color: '#ff1748', // Červená
  },
  'Dovolená': {
    label: 'Dovolená',
    color: '#e5f900', // Žlutá
  },
  'Neuvedeno': {
    label: 'Neuvedeno',
    color: '#eb8109', // Oranžová (pro ostatní typy)
  },
};

export const MyPieChart = ({ data, event }) => {
    
  const chosedate = "2023-04-19T08:00:00";
  const date = new Date(chosedate); // new Date() → aktuální datum
  const Enddate = new Date(event.enddate)
  const Startdate = new Date(event.startdate)

  let valid = false;
  if (date <= Enddate && date >= Startdate) {
    valid = true
  }

  // Počítá počet lidí s každým typem přítomnosti
  const presenceCounts = data.reduce((counts, presence) => {
    const presenceType = presence.presenceType.name
    counts[presenceType] = (counts[presenceType] || 0) + 1
    return counts
  }, {})

  // Připravuje objekt dat pro koláčový graf
  const chartData = {
    labels: Object.keys(presenceCounts).map(presenceType => {
      const { label } = presenceTypeDictionary[presenceType];
      return `${label}`;
    }),
    datasets: [
      {
        data: Object.values(presenceCounts),
        backgroundColor: Object.keys(presenceCounts).map(presenceType => {
          return presenceTypeDictionary[presenceType].color;
        }),
      },
    ],
  }

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