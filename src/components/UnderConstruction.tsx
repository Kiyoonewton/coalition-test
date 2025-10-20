"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

const UnderConstruction: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Only show on non-patients pages
  if (pathname === "/patients") {
    return null;
  }

  const handleNavigate = (): void => {
    router.push("/patients");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="hammer-container">
            <svg
              className="w-12 h-12 text-gray-700 hammer"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.78 15.3l-2.08-2.08 7.07-7.07 2.08 2.08-7.07 7.07zm-8.49 8.49L2 21.5l3.54-3.54 1.41 1.41-.71.71 1.41 1.41-.71.71 1.41 1.41-.71.71 1.41 1.41zm6.36-11.31L3.51 20.62 1.38 18.5l8.49-8.49 2.08 2.08.71-.71-1.01-1.01zM20 5.5l-2-2-7.5 7.5 2 2L20 5.5z" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Under Construction
        </h1>

        <p className="text-gray-600 mb-6">
          This page is currently under development.
        </p>

        <button
          onClick={handleNavigate}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition-colors duration-200"
        >
          Go to Patients
        </button>
      </div>

      <style jsx>{`
        @keyframes hammerHit {
          0% {
            transform: rotate(-15deg);
          }
          15% {
            transform: rotate(25deg);
          }
          30% {
            transform: rotate(-15deg);
          }
          100% {
            transform: rotate(-15deg);
          }
        }

        .hammer-container {
          display: inline-block;
        }

        .hammer {
          animation: hammerHit 1.2s ease-in-out infinite;
          transform-origin: bottom right;
        }
      `}</style>
    </div>
  );
};

export default UnderConstruction;
