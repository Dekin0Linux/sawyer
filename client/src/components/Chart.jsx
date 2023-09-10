
import React from "react";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { Line,Bar} from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June","July","Sept","Oct","Nov","Dec"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Monthly Report",
      // backgroundColor: "#0153fb",
      backgroundColor: "rgba(1, 83, 251, 0.4)", 
      borderColor: "#0153fb",
      data: [2, 50, 8, 84, 20, 70, 10,0,0,0,0,0],
      fill: true,
      lineTension: 0.4,
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
        display: false, // Hide y-axis grid lines
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="h-60">
      <Line data={data} options={options} style={{width:"100%"}}/>
    </div>
  );
};

export default LineChart;