import { useState } from "react";
import { Upload, Eye, Loader2 } from "lucide-react";

export const uploadStatusDocuments = [
  { id: 1, name: "Project_Proposal.pdf", status: "success" },
  { id: 2, name: "Budget_Report.xlsx", status: "warning" },
  { id: 3, name: "Meeting_Notes.docx", status: "error" },
];

const getStatusColor = (status: string, isColorBlindMode: boolean) => {
  // this is simulating Red-Blind/Protanopia, a type of red/green color blindness
  if (isColorBlindMode) {
    switch (status) {
      case "success":
        return "bg-[#bcaa54]"; // Brownish for color blind simulation
      case "warning":
        return "bg-[#d4bc0c]";
      case "error":
        return "bg-[#8f845a]"; // Very similar to success for color blind
      default:
        return "bg-gray-300";
    }
  } else {
    switch (status) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  }
};

export const UploadStatusTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [isColorBlindMode, setIsColorBlindMode] = useState(false);

  const handleUpload = () => {
    setIsLoading(true);
    setShowStatus(false);
    setIsColorBlindMode(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowStatus(true);
    }, 1500);
  };

  const toggleColorBlindMode = () => {
    setIsColorBlindMode(!isColorBlindMode);
  };

  return (
    <>
      {/* Document Table */}
      <div className="rounded-lg p-6 mb-6 flex flex-row justify-center gap-8">
        <table className="w-fit bg-white rounded-md overflow-hidden shadow-md">
          <thead className="border-t border-gray-100">
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-2 px-4 font-semibold text-gray-700">
                Status
              </th>
              <th className="text-left py-2 px-4 font-semibold text-gray-700">
                Document Name
              </th>
            </tr>
          </thead>
          <tbody>
            {uploadStatusDocuments.map((doc) => (
              <tr key={doc.id} className="border-b border-gray-250">
                <td className="py-3 px-4">
                  <div className="flex items-center justify-center w-6 h-6">
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                    ) : showStatus ? (
                      <div
                        className={`w-4 h-4 rounded-full ${getStatusColor(
                          doc.status,
                          isColorBlindMode
                        )}`}
                      />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                    )}
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-700">{doc.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Upload Button */}
        <div className="flex items-center">
          <button
            onClick={handleUpload}
            disabled={isLoading}
            className="bg-blue-600 w-[210px] text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                Upload Documents
              </>
            )}
          </button>
        </div>
      </div>

      {/* Color Blindness Simulation Button */}
      <div className="flex justify-center min-h-16">
        {showStatus && (
          <button
            onClick={toggleColorBlindMode}
            className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 flex items-center gap-2 mb-6"
          >
            <Eye className="w-4 h-4" />
            {isColorBlindMode ? "End Simulation" : "Simulate Color Blindness"}
          </button>
        )}
      </div>

      {isColorBlindMode && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
          <p className="text-yellow-800">
            <strong>Red/Green Color Blindness Simulation:</strong> Notice how
            difficult it is to distinguish between the status indicators.
            Red/Green color blindness affects approximately 8% of
            men and 0.5% of women worldwide.
          </p>
        </div>
      )}
    </>
  );
};
