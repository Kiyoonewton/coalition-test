"use client";

import Image from "next/image";

interface PatientInfo {
  id: string;
  name: string;
  avatar: string;
  dateOfBirth: string;
  gender: string;
  phone: string;
  emergencyContact: string;
  insuranceProvider: string;
}

interface PatientInfoCardProps {
  patient?: PatientInfo;
}

export default function PatientInfoCard({ patient }: PatientInfoCardProps) {
  const patientData = patient || {
    id: "4",
    name: "Jessica Taylor",
    avatar: "/jessical_2.png",
    dateOfBirth: "August 23, 1996",
    gender: "Female",
    phone: "(415) 555-1234",
    emergencyContact: "(415) 555-5678",
    insuranceProvider: "Sunrise Health Assurance",
  };

  return (
    <div className="bg-white rounded-2xl p-6 max-w-md mx-auto mb-[30px]">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <Image
            src={patientData.avatar}
            alt={patientData.name}
            width={200}
            height={200}
            className="w-[200px] h-[200px] rounded-full object-cover"
            sizes="200px"
          />
        </div>
      </div>

      <h2 className="text-center card-title mb-8">{patientData.name}</h2>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-full flex items-center justify-center">
            <Image
              src="/calender_2.svg"
              alt="Calendar Icon"
              width={18}
              height={19}
              className="w-[18px] h-[20px] object-cover"
            />
          </div>
          <div className="flex-1">
            <p
              className="body-regular text-sm mb-1"
              style={{ color: "#072635" }}
            >
              Date Of Birth
            </p>
            <p className="body-emphasized" style={{ color: "#072635" }}>
              {patientData.dateOfBirth}
            </p>
          </div>
        </div>

        {/* Gender */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-full flex items-center justify-center">
            <Image
              src="/FemaleIcon.svg"
              alt="Female Icon"
              width={42}
              height={42}
              className="w-[42px] h-[42px] object-cover"
            />
          </div>
          <div className="flex-1">
            <p
              className="body-regular text-sm mb-1"
              style={{ color: "#072635" }}
            >
              Gender
            </p>
            <p className="body-emphasized" style={{ color: "#072635" }}>
              {patientData.gender}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-full flex items-center justify-center">
            <Image
              src="/PhoneIcon.svg"
              alt="Phone Icon"
              width={42}
              height={42}
              className="w-[42px] h-[42px] object-cover"
            />
          </div>
          <div className="flex-1">
            <p
              className="body-regular text-sm mb-1"
              style={{ color: "#072635" }}
            >
              Contact Info.
            </p>
            <p className="body-emphasized" style={{ color: "#072635" }}>
              {patientData.phone}
            </p>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-full flex items-center justify-center">
            <Image
              src="/PhoneIcon.svg"
              alt="Phone Icon"
              width={42}
              height={42}
              className="w-[42px] h-[42px] object-cover"
            />
          </div>
          <div className="flex-1">
            <p
              className="body-regular text-sm mb-1"
              style={{ color: "#072635" }}
            >
              Emergency Contacts
            </p>
            <p className="body-emphasized" style={{ color: "#072635" }}>
              {patientData.emergencyContact}
            </p>
          </div>
        </div>

        {/* Insurance Provider */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#F6F7F8] w-[42px] h-[42px] rounded-full flex items-center justify-center">
            <Image
              src="/InsuranceIcon.svg"
              alt="Insurance Icon"
              width={42}
              height={42}
              className="w-[42px] h-[42px] object-cover"
            />
          </div>
          <div className="flex-1">
            <p
              className="body-regular text-sm mb-1"
              style={{ color: "#072635" }}
            >
              Insurance Provider
            </p>
            <p className="body-emphasized" style={{ color: "#072635" }}>
              {patientData.insuranceProvider}
            </p>
          </div>
        </div>
      </div>

      {/* Show All Information Button */}
      <button
        onClick={() => {}}
        className="w-full mt-8 py-4 rounded-full font-[700] text-sm transition-opacity hover:opacity-90"
        style={{
          backgroundColor: "#01F0D0",
          color: "#072635",
          cursor: "pointer",
        }}
      >
        Show All Information
      </button>
    </div>
  );
}
