"use client";

import { useState } from "react";
import PatientsList from "./PatientList";
import { Patient } from "@/app/patients/types";

export default function PatientsWrapper({ patients }: { patients: Patient[] }) {
  const [selectedPatientId, setSelectedPatientId] = useState<string>();

  const handlePatientSelect = (patientId: string) => {
    setSelectedPatientId(patientId);
  };

  return (
    <PatientsList
      patients={patients}
      selectedPatientId={selectedPatientId}
      onPatientSelect={handlePatientSelect}
    />
  );
}
