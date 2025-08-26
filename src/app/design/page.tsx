"use client";

import { useState } from "react";
import {
  Upload,
  Eye,
  ChevronDown,
  ChevronRight,
  Check,
  AlertTriangle,
  X,
  Loader2,
} from "lucide-react";

import { NavHeader } from "../../components/layout/NavHeader";

export default function VisualDemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [isColorBlindMode, setIsColorBlindMode] = useState(false);
  const [isAccessibleSectionOpen, setIsAccessibleSectionOpen] = useState(false);

  const documents = [
    { id: 1, name: "Project_Proposal.pdf", status: "success" },
    { id: 2, name: "Budget_Report.xlsx", status: "warning" },
    { id: 3, name: "Meeting_Notes.docx", status: "error" },
  ];

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

  const getStatusColor = (status: string) => {
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

  const getAccessibleStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <Check className="w-4 h-4 text-green-600" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case "error":
        return <X className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavHeader />

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              Understanding How Design Affects Accessibility
            </h2>
            <p className="text-gray-700 mb-6">
              It's easy to assume that web accessibility is only about screen
              readers and code, but visual design plays a crucial role in making
              content accessible to everyone.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Design and Color Blindness
            </h3>

            {/* Document Table */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 flex flex-row justify-center gap-8">
              <table className="w-fit">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-4 font-medium text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-2 px-4 font-medium text-gray-700">
                      Document Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id} className="border-b border-gray-250">
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-center w-6 h-6">
                          {isLoading ? (
                            <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                          ) : showStatus ? (
                            <div
                              className={`w-4 h-4 rounded-full ${getStatusColor(
                                doc.status
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
                  {isColorBlindMode
                    ? "End Simulation"
                    : "Simulate Color Blindness"}
                </button>
              )}
            </div>

            {isColorBlindMode && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
                <p className="text-yellow-800">
                  <strong>Color Blindness Simulation Active:</strong> Notice how
                  difficult it is to distinguish between the status indicators.
                  Red/Green color blindness, such as this, affects approximately
                  8% of men and 0.5% of women worldwide.
                </p>
              </div>
            )}
          </section>

          {/* Accessible Design Section */}
          <section className="mb-8">
            <button
              onClick={() =>
                setIsAccessibleSectionOpen(!isAccessibleSectionOpen)
              }
              className="flex items-center gap-2 text-lg font-semibold text-blue-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
              aria-expanded={isAccessibleSectionOpen}
            >
              {isAccessibleSectionOpen ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
              How to design this with accessibility in mind?
            </button>

            {isAccessibleSectionOpen && (
              <div className="mt-4 bg-green-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Solution:</strong> Use icons and text labels in
                  addition to color to convey status information.
                </p>

                <table className="w-full bg-white rounded-md overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 px-4 font-medium text-gray-700">
                        Status
                      </th>
                      <th className="text-left py-2 px-4 font-medium text-gray-700">
                        Document Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc) => (
                      <tr key={doc.id} className="border-b border-gray-100">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            {getAccessibleStatusIcon(doc.status)}
                            <span className="text-sm font-medium text-gray-700">
                              {doc.status === "success" && "Uploaded"}
                              {doc.status === "warning" && "Processing"}
                              {doc.status === "error" && "Failed"}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-700">{doc.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Key Accessibility Improvements:
                  </h4>
                  <ul className="list-disc pl-5 text-blue-700 space-y-1">
                    <li>Icons provide visual meaning beyond color</li>
                    <li>Text labels clearly describe the status</li>
                    <li>
                      Information is conveyed through multiple visual channels
                    </li>
                    <li>
                      Status remains clear even for users with color vision
                      deficiencies
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </section>

          <section className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Key Takeaway
            </h3>
            <p className="text-gray-700">
              <strong>Design affects accessibility.</strong> When we rely solely
              on color to convey important information, we exclude users with
              color vision deficiencies. By combining color with icons, text,
              and other visual cues, we create interfaces that work for
              everyone.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
