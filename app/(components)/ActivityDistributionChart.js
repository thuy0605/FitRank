"use client";

import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const ActivityDistributionChart = ({ fitnessHistory }) => {
  const activityCounts = {};

  fitnessHistory.forEach((entry) => {
    entry.activeInfo.choosenActivity.forEach((activity) => {
      const activityName = activity.activityName;
      activityCounts[activityName] = (activityCounts[activityName] || 0) + 1;
    });
  });

  const labels = Object.keys(activityCounts);
  const data = Object.values(activityCounts);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div>
      <h2>Activity Distribution in Last 30 Days</h2>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default ActivityDistributionChart;
