import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
function PieChart({ approved, declined, awaiting }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ['Approved', 'Declined', 'Awaiting'],
    datasets: [
      {
        label: 'Driver Verification',
        data: [approved, declined, awaiting],
        backgroundColor: ['#34D399', '#60A5FA', '#FBBF24']
      }
    ],
  };
  const options = {
    legend: {
      display: false,
      position: 'left'
    },
  }
  return (
     <div>
      <Doughnut data={data} options= {{
            cornerRadius: 5,
            plugins: {
                legend: {
                    display:false 
                }
            }
      }} />
    </div>
  );
}

export default PieChart;
