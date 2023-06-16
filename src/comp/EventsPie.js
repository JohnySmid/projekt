import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';


export const MyPieChart = ({ data }) => {
    // Count the number of people with each presence type
    const presenceCounts = data.reduce((counts, presence) => {
      const presenceType = presence.presenceType.name;
      counts[presenceType] = (counts[presenceType] || 0) + 1;
      return counts;
    }, {});
  
    // Prepare the data object for the pie chart
    const chartData = {
      labels: Object.keys(presenceCounts),
      datasets: [
        {
          data: Object.values(presenceCounts),
          backgroundColor: Object.keys(presenceCounts).map((presenceType) => {
            if (presenceType === 'Přítomen') {
              return '#1af203'; // Green
            } else if (presenceType === 'Neomluven') {
              return '#ff1748'; // Red
            } else {
              return '#e5f900'; // Yellow (for other types)
            }
          }),
        },
      ],
    };
  
  
    return (
      <>
        <table className="table table-hover table-light table-bordered">
          {/* Table content */}
        </table>
        <div style={{ width: '300px', height: '300px' }}>
          <Pie data={chartData} />
        </div>
      </>
    );
  };