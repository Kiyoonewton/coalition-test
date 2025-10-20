"use client";

import React, { useState } from "react";
import DiagnosisHistory from "@/components/Diagonosishistory";
import DiagnosticList from "@/components/DiagonisticList";
import PatientInfoCard from "@/components/PatientInfoCard";
import LabResults from "@/components/LabResult";
import { BloodPressureData } from "./types";
import { BloodPressure } from "@/components/VitalSignsCards";
import PatientsList from "@/components/PatientList";

interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnostic_list: {
    name: string;
    description: string;
    status: string;
  }[];
  lab_results: string[];
  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: { value: number };
      diastolic: { value: number };
    };
    heart_rate: { value: number | string; levels: string };
    respiratory_rate: { value: number | string; levels: string };
    temperature: { value: number | string; levels: string };
  }[];
}

const PatientsWrapper = ({ patients }: { patients: Patient[] }) => {
  const [selectedPatientId, setSelectedPatientId] =
    useState<string>("Jessica Taylor");
  const handlePatientSelect = (patientId: string) => {
    setSelectedPatientId(patientId);
  };

  const patientData = patients.map(
    (patient: {
      name: string;
      gender: string;
      age: number;
      profile_picture: string;
    }) => ({
      id: patient.name,
      name: patient.name,
      gender:
        patient.gender === "Male" || patient.gender === "Female"
          ? (patient.gender as "Male" | "Female")
          : "Male",
      age: patient.age,
      avatar: patient.profile_picture,
    })
  );
  const currentPatient = patients.find((p) => p.name === selectedPatientId);
  if (!currentPatient) {
    return <div>No patient selected</div>;
  }
  const diagnosticsList = currentPatient.diagnostic_list.map(
    (diagnostic: { name: string; description: string; status: string }) => ({
      id: diagnostic.name,
      problem: diagnostic.name,
      description: diagnostic.description,
      status: diagnostic.status as
        | "Under Observation"
        | "Cured"
        | "Inactive"
        | "Active",
    })
  );

  const patientInfo = {
    id: currentPatient.name,
    name: currentPatient.name,
    avatar: currentPatient.profile_picture,
    dateOfBirth: currentPatient.date_of_birth,
    gender: currentPatient.gender,
    phone: currentPatient.phone_number,
    emergencyContact: currentPatient.emergency_contact,
    insuranceProvider: currentPatient.insurance_type,
  };

  const labResults = currentPatient.lab_results.map((labResult: string) => ({
    id: labResult,
    name: labResult,
    downloadUrl: "",
  }));

  type DiagnosisHistory = {
    month: string;
    year: number;
    blood_pressure: {
      systolic: { value: number };
      diastolic: { value: number };
    };
  };

  const sortedPatientsData = currentPatient.diagnosis_history.sort(
    (a: DiagnosisHistory, b: DiagnosisHistory) => {
      const dateA = new Date(`${a.month} 1, ${a.year}`);
      const dateB = new Date(`${b.month} 1, ${b.year}`);
      return dateA.getTime() - dateB.getTime();
    }
  );

  const bp = sortedPatientsData[sortedPatientsData.length - 1];
  const latestBloodPressure: BloodPressure = {
    latestBloodPressure: {
      heart_rate: {
        value: bp.heart_rate.value ? bp.heart_rate.value.toString() : "0",
        levels: bp.heart_rate.levels,
      },
      respiratory_rate: {
        value: bp.respiratory_rate.value
          ? bp.respiratory_rate.value.toString()
          : "0",
        levels: bp.respiratory_rate.levels,
      },
      temperature: {
        value: bp.temperature.value ? bp.temperature.value.toString() : "0",
        levels: bp.temperature.levels,
      },
    },
  };

  const bloodPressureData: BloodPressureData[] = sortedPatientsData.map(
    (history: {
      month: string;
      year: number;
      blood_pressure: {
        systolic: { value: number };
        diastolic: { value: number };
      };
    }) => ({
      month: history.month,
      year: history.year.toString(),
      systolic: history.blood_pressure.systolic.value,
      diastolic: history.blood_pressure.diastolic.value,
    })
  );

  const chartData = {
    labels: bloodPressureData.map((d) => d.month),
    datasets: [
      {
        label: "Systolic",
        data: bloodPressureData.map((d) => d.systolic),
        borderColor: "#E66FD2",
        backgroundColor: "rgba(230, 111, 210, 0.1)",
        borderWidth: 2,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#E66FD2",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Diastolic",
        data: bloodPressureData.map((d) => d.diastolic),
        borderColor: "#8C6FE6",
        backgroundColor: "rgba(140, 111, 230, 0.1)",
        borderWidth: 2,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#8C6FE6",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <section className="flex pt-8 gap-3">
      <aside className="w-1/4">
        <PatientsList
          patients={patientData}
          onPatientSelect={handlePatientSelect}
          selectedPatientId={selectedPatientId}
        />
      </aside>
      <main className="pb-6 w-2/4">
        <DiagnosisHistory
          bloodPressureData={bloodPressureData}
          chartData={chartData}
          latestBloodPressure={latestBloodPressure}
        />
        <DiagnosticList diagnostics={diagnosticsList} />
      </main>
      <aside className="w-1/4">
        <PatientInfoCard patient={patientInfo} />
        <LabResults labResults={labResults} />
      </aside>
    </section>
  );
};

export default PatientsWrapper;
