"use client";

import Image from "next/image";

interface VitalSign {
  id: string;
  image: string;
  label: string;
  value: string;
  status: string;
  bgColor: string;
}

export interface BloodPressure {
  latestBloodPressure: {
    heart_rate: {
      value: string;
      levels: string;
    };
    respiratory_rate: {
      value: string;
      levels: string;
    };
    temperature: {
      value: string;
      levels: string;
    };
  };
}

export default function VitalSignsCards({
  latestBloodPressure,
}: BloodPressure) {
  const vitalSigns: VitalSign[] = [
    {
      id: "respiratory",
      image: "/lung.svg",
      label: "Respiratory Rate",
      value: ` ${latestBloodPressure.respiratory_rate.value} bpm`,
      status: latestBloodPressure.respiratory_rate.levels,
      bgColor: "#E0F3FA",
    },
    {
      id: "temperature",
      image: "/temperature.svg",
      label: "Temperature",
      value: ` ${latestBloodPressure.temperature.value} °F`,
      status: latestBloodPressure.temperature.levels,
      bgColor: "#FFE6E9",
    },
    {
      id: "heartrate",
      image: "/HeartBPM.svg",
      label: "Heart Rate",
      value: ` ${latestBloodPressure.heart_rate.value} bpm`,
      status: latestBloodPressure.heart_rate.levels,
      bgColor: "#FFE6F1",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {vitalSigns.map((vital) => (
        <div
          key={vital.id}
          className="rounded-2xl p-6 transition-transform hover:scale-105"
          style={{ backgroundColor: vital.bgColor }}
        >
          <div className="flex mb-3">
            <Image
              src={vital.image}
              alt={`${vital.label} Icon`}
              width={96}
              height={96}
              className="w-[96px] h-[96px] object-cover"
            />
          </div>

          <p className="body-regular  mb-1.5" style={{ color: "#072635" }}>
            {vital.label}
          </p>

          <div
            className=" text-[30px] font-[800] leading-[40px] mb-1"
            style={{ color: "#072635" }}
          >
            {vital.value}
          </div>

          <div className="flex items-center space-x-2">
            {vital.status === "Lower than Average" && (
              <Image
                src="/ArrowDown.svg"
                alt={`Lower than Average Icon`}
                width={10}
                height={6}
                className="w-[10px] h-[6px] object-cover"
              />
            )}
            <span className="body-regular" style={{ color: "#072635" }}>
              {vital.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
