"use client";

import Image from "next/image";

interface LabResult {
  id: string;
  name: string;
  downloadUrl?: string;
}

interface LabResultsProps {
  labResults: LabResult[];
  onDownload?: (id: string) => void;
}

export default function LabResults({
  labResults,
  onDownload,
}: LabResultsProps) {
  const results = labResults;

  const handleDownload = (id: string) => {
    if (onDownload) {
      onDownload(id);
    } else {
      const result = results.find((r) => r.id === id);
      if (result?.downloadUrl) {
        window.open(result.downloadUrl, "_blank");
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl px-6 pt-6 pb-2 h-[290px] w-full">
      <h2 className="card-title mb-4">Lab Results</h2>

      <div
        className="space-y-0 overflow-y-auto"
        style={{
          maxHeight: "195px",
          scrollbarWidth: "thin",
          scrollbarColor: "#072635 #F6F6F6",
        }}
      >
        {results.map((result, index) => (
          <div
            key={result.id}
            className="flex items-center justify-between hover:bg-[#F6F6F6] transition-colors px-[11px] cursor-pointer h-[40px] mb-1"
          >
            <span className="body-regular" style={{ color: "#072635" }}>
              {result.name}
            </span>

            <button
              onClick={() => handleDownload(result.id)}
              className="p-2 hover:bg-[#EDEDED] rounded-lg transition-colors"
              style={{ color: "#072635" }}
              aria-label={`Download ${result.name}`}
            >
              <Image
                src="/download.svg"
                alt="Download Icon"
                width={18}
                height={18}
                className="w-[18px] h-[18px] object-cover"
              />
            </button>
          </div>
        ))}
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
