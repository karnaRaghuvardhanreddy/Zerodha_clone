import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.jsx";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  return <Doughnut data={data} />;
}