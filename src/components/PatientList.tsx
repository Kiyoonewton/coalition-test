"use client";

import { PatientsListProps } from "@/app/patients/types";
import Image from "next/image";
import { useState } from "react";

export default function PatientsList({
  patients,
  selectedPatientId,
  onPatientSelect,
}: PatientsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="bg-white rounded-2xl h-[calc(100vh + 130px)] flex flex-col"
      style={{ maxHeight: "calc(100vh + 130px)" }}
    >
      {/* Header */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="card-title">Patients</h2>
          <button
            className="p-2 hover:bg-[#D8FCF7] rounded-lg transition-colors"
            style={{ color: "#072635" }}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search patients"
          >
            <Image
              src="/search.svg"
              alt="Search Icon"
              width={18}
              height={18}
              className="w-[18px] h-[18px] object-cover"
            />
          </button>
        </div>

        {isSearchOpen && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-[#EDEDED] rounded-lg focus:outline-none focus:border-[#01F0D0] body-regular"
              autoFocus
            />
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredPatients.length === 0 ? (
          <div className="p-8 text-center">
            <p className="body-secondary">No patients found</p>
          </div>
        ) : (
          filteredPatients.map((patient) => {
            const isSelected = patient.id === selectedPatientId;

            return (
              <div
                key={patient.id}
                className={`flex items-center justify-between px-5 py-4 cursor-pointer transition-colors ${
                  isSelected ? "bg-[#D8FCF7]" : "hover:bg-[#F6F6F6]"
                }`}
                onClick={() => onPatientSelect?.(patient.id)}
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <img
                      src={patient.avatar}
                      alt={patient.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-[700] text-sm leading-[19px] truncate"
                      style={{ color: "#072635" }}
                    >
                      {patient.name}
                    </h3>
                    <p
                      className="text-sm leading-[19px]"
                      style={{ color: "#707070" }}
                    >
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </div>

                {/* More Options Button */}
                <button
                  className="p-1 hover:bg-[#EDEDED] rounded transition-colors ml-2 flex-shrink-0"
                  style={{ color: "#072635" }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  aria-label={`More options for ${patient.name}`}
                >
                  <Image
                    src="/hamburger_vert.svg"
                    alt="More Options Icon"
                    width={3}
                    height={18}
                    className="w-[3px] h-[18px] object-cover"
                  />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
