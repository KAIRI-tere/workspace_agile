import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
 
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
 
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Radar Chart",
    },
  },
};
 
const labels = ["January", "February", "March"];
const data1 = [12, 11, 14];
const data2 = [22, 31, 17];
 
const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: data1,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: data2,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
 
export const RadarChart = () => {
  return <Radar options={options} data={data} />;
};