"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import Image from "next/image";
import { BloodPressureData, ChartData } from "@/app/patients/types";
import { useState, useMemo } from "react";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type TimePeriod = "all" | "6months" | "3months" | "1year";

export default function BloodPressureChart({
  bloodPressureData,
}: {
  bloodPressureData: BloodPressureData[];
}) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("all");

  // Filter data based on selected time period
  const filteredData = useMemo(() => {
    if (timePeriod === "all") {
      return bloodPressureData;
    }
    const monthsToShow =
      timePeriod === "3months" ? 3 : timePeriod === "6months" ? 6 : 12;
    return bloodPressureData.slice(-monthsToShow);
  }, [bloodPressureData, timePeriod]);

  const chartData: ChartData = useMemo(() => {
    return {
      labels: filteredData.map((data) => `${data.month} ${data.year}`),
      datasets: [
        {
          label: "Systolic",
          data: filteredData.map((data) => data.systolic),
          borderColor: "#E66FD2",
          backgroundColor: "rgba(230, 111, 210, 0.1)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          pointRadius: 6,
          pointBackgroundColor: "#E66FD2",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointHoverRadius: 8,
        },
        {
          label: "Diastolic",
          data: filteredData.map((data) => data.diastolic),
          borderColor: "#8C6FE6",
          backgroundColor: "rgba(140, 111, 230, 0.1)",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          pointRadius: 6,
          pointBackgroundColor: "#8C6FE6",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointHoverRadius: 8,
        },
      ],
    };
  }, [filteredData]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#072635",
        bodyColor: "#072635",
        borderColor: "#EDEDED",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (
            context: import("chart.js").TooltipItem<"line">
          ): string {
            return context.dataset.label + ": " + context.parsed.y;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#072635",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: "#072635",
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
  };

  // Get latest readings
  const latestData = bloodPressureData[bloodPressureData.length - 1];

  return (
    <div className="bg-[#F4F0FE] rounded-2xl p-6 w-full mb-5">
      <div className="flex ">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between mb-6">
            <h2 className="inner-card-title">Blood Pressure</h2>
            <select
              className="px-3 mr-6 py-1 rounded-lg border border-[#EDEDED] focus:outline-none body-regular"
              style={{ color: "#072635" }}
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value as TimePeriod)}
            >
              <option value="all">All</option>
              <option value="6months">Last 6 months</option>
              <option value="3months">Last 3 months</option>
              <option value="1year">Last year</option>
            </select>
          </div>
          <div style={{ height: "187px", width: "513px" }}>
            <Line data={chartData} options={options} className="!w-full" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="space-y-6">
          {/* Systolic */}
          <div>
            <div className="flex space-x-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#E66FD2]"></div>
              <span className="text-[14px] font-[800] leading-[16px]">
                Systolic
              </span>
            </div>
            <div
              className="text-[22px] font-[500] leading-[22px]"
              style={{ color: "#072635" }}
            >
              {latestData.systolic}
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <Image
                src="/ArrowUp.svg"
                alt={`Higher than Average Icon`}
                width={10}
                height={6}
                className="w-[10px] h-[6px] object-cover"
              />
              <span className="text-sm" style={{ color: "#072635" }}>
                Higher than Average
              </span>
            </div>
          </div>

          <hr className="border-[#EDEDED]" />

          {/* Diastolic */}
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-3 h-3 rounded-full bg-[#8C6FE6]"></div>
              <span className="text-[14px] font-[800] leading-[16px]">
                Diastolic
              </span>
            </div>
            <div
              className="text-[22px] font-[500] leading-[22px]"
              style={{ color: "#072635" }}
            >
              {latestData.diastolic}
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <Image
                src="/ArrowDown.svg"
                alt={`Lower than Average Icon`}
                width={10}
                height={6}
                className="w-[10px] h-[6px] object-cover"
              />
              <span className="text-sm" style={{ color: "#072635" }}>
                Lower than Average
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
