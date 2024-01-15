
import React from "react";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { Line,Bar} from "react-chartjs-2";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June","July","Sept","Oct","Nov","Dec"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Report",
      backgroundColor: "rgba(22, 83, 251, 0.4)", 
      borderColor: "#015355",
      data: [2, 18, 8, 14, 20, 70, 10,6,21,14,65],
      fill: true,
      lineTension: 0.9,
      
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      grid: {
        display: true, // Hide y-axis grid lines
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="md:h-60 mb-10 bg-gray-50 rounded-lg shadow-md">
      <Bar data={data} options={options} style={{width:"100%"}}/>
    </div>
  );
};

export default LineChart;