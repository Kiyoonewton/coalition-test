"use client";

import BloodPressureChart from "./BloodPressureChart";
import VitalSignsCards, { BloodPressure } from "./VitalSignsCards";
import { BloodPressureData, ChartData } from "@/app/patients/types";

export default function DiagnosisHistory({
  bloodPressureData,
  chartData,
  latestBloodPressure,
}: {
  bloodPressureData: BloodPressureData[];
  chartData: ChartData;
  latestBloodPressure: BloodPressure;
}) {
  return (
    <div className="w-full p-5 bg-white rounded-2xl">
      <h1 className="card-title pb-10">Diagnosis History</h1>
      <BloodPressureChart bloodPressureData={bloodPressureData} />
      <VitalSignsCards
        latestBloodPressure={latestBloodPressure.latestBloodPressure}
      />
    </div>
  );
}
