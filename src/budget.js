import React from "react";

function BudgetsSection() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">ΠΡΟΥΠΟΛΟΓΙΣΜΟΙ</h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">
          Εδώ μπορείτε να βρείτε τα τελευταία αρχεία του προϋπολογισμού μας για
          λήψη.
        </p>

        {/* PDF Section */}
        <div className="flex items-center mb-4">
          {/* PDF Icon */}
          <div className="mr-4">
            <svg
              className="w-12 h-12 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7V4a2 2 0 0 1 2-2h5l2 2 5 .03L22 4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"></path>
              <line x1="4" y1="7" x2="22" y2="7"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="2" y1="16" x2="6" y2="16"></line>
              <line x1="18" y1="16" x2="22" y2="16"></line>
            </svg>
          </div>

          {/* PDF Info & Download */}
          <div>
            <h2 className="text-xl font-semibold">
              Αναφορά προϋπολογισμών 2017
            </h2>
            <a
              href="#"
              className="mt-2 inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetsSection;
