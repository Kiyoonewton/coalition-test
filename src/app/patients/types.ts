export interface Diagnostic {
  id: string;
  problem: string;
  description: string;
  status: "Under Observation" | "Cured" | "Inactive" | "Active";
}

export interface DiagnosticListProps {
  diagnostics?: Diagnostic[];
}

export interface BloodPressureData {
  month: string;
  year: string;
  systolic: number;
  diastolic: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    borderWidth: number;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointRadius: number;
    pointHoverRadius: number;
    tension: number;
    fill: boolean;
  }[];
}

export interface Patient {
  id: string;
  name: string;
  gender: "Male" | "Female";
  age: number;
  avatar: string;
}

export interface PatientsListProps {
  patients: Patient[];
  selectedPatientId?: string;
  onPatientSelect?: (patientId: string) => void;
}
