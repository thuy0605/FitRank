"use client";

import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export function ActivityDistributionChart({ fitnessHistory }) {
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
          "rgba(245, 40, 145, 0.8)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(56, 39, 245, 0.8)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(245, 40, 145, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(56, 39, 245, 1)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 20, // Reduce the legend's box width if possible
          font: {
            size: 15 // Set your desired size here
          },
          padding: 10 // Reduce padding to fit labels in one line
        }
      }
    }
  };
  
  
  return (
    <div className="mx-4">
      <h3 className="flex justify-center text-sm py-4">Activity Distribution in Last 30 Days</h3>

      <Doughnut data={chartData} options={options} />
    </div>
  );
};