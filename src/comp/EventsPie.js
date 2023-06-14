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
          backgroundColor: ['#1af203', '#ff1748', '#e5f900'], // Green, Red, Yellow
            hoverBackgroundColor: ['#1af203', '#ff1748', '#e5f900'],
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