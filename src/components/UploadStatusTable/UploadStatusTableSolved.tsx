import { Check, AlertTriangle, X } from "lucide-react";

import { uploadStatusDocuments } from "./UploadStatusTable";

const getAccessibleStatusIcon = (status: string) => {
  switch (status) {
    case "success":
      return <Check className="w-6 h-6 text-green-600" />;
    case "warning":
      return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
    case "error":
      return <X className="w-6 h-6 text-red-600" />;
    default:
      return null;
  }
};
export const UploadStatusTableSolved = () => {
  return (
    <>
      <p className="text-gray-700 mb-4">
        <strong>Solution:</strong> Use icons and text labels in addition to
        color to convey status information.
      </p>

      <table className="w-full bg-white rounded-md overflow-hidden shadow-sm">
        <thead>
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
        <h4 className="font-semibold text-blue-900 mb-2">
          Key Accessibility Improvements:
        </h4>
        <ul className="list-disc pl-5 text-blue-800 space-y-1">
          <li>Icons provide visual meaning beyond color</li>
          <li>Text labels clearly describe the status</li>
          <li>Information is conveyed through multiple visual channels</li>
          <li>
            Status remains clear even for users with color vision deficiencies
          </li>
        </ul>
      </div>
    </>
  );
};
