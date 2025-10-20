"use client";

import { DiagnosticListProps } from "@/app/patients/types";

export default function DiagnosticList({ diagnostics }: DiagnosticListProps) {
  const diagnosticData = diagnostics || [];

  return (
    <div className="bg-white rounded-2xl p-6 h-[349px] mt-5  w-full">
      <h2 className="card-title mb-10">Diagnostic List</h2>

      <div
        className="overflow-hidden rounded-xl"
        // style={{ backgroundColor: "#F6F6F6" }}
      >
        <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 px-6 py-4 bg-[#F6F6F6] rounded-[25px]">
          <div className="body-emphasized" style={{ color: "#072635" }}>
            Problem/Diagnosis
          </div>
          <div className="body-emphasized" style={{ color: "#072635" }}>
            Description
          </div>
          <div className="body-emphasized" style={{ color: "#072635" }}>
            Status
          </div>
        </div>

        <div
          className="overflow-y-auto"
          style={{
            maxHeight: "180px",
            scrollbarWidth: "thin",
            scrollbarColor: "#072635 #F6F6F6",
          }}
        >
          {diagnosticData.map((diagnostic, index) => (
            <div
              key={diagnostic.id + index}
              className="grid grid-cols-[1fr_2fr_1fr] gap-4 px-6 py-5 bg-white transition-colors"
              style={{
                borderTop: index === 0 ? "none" : "1px solid #F6F6F6",
              }}
            >
              <div className="body-regular" style={{ color: "#072635" }}>
                {diagnostic.problem}
              </div>

              <div className="body-regular" style={{ color: "#072635" }}>
                {diagnostic.description}
              </div>

              <div className="body-regular" style={{ color: "#072635" }}>
                {diagnostic.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          width: 8px;
        }
        div::-webkit-scrollbar-track {
          background: #f6f6f6;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background: #072635;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #0c3d5d;
        }
      `}</style>
    </div>
  );
}
