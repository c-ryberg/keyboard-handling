"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { NavHeader } from "../../components/layout/NavHeader";
import {
  UploadStatusTable,
  UploadStatusTableSolved,
} from "../../components/UploadStatusTable";

export default function VisualDemoPage() {
  const [isAccessibleSectionOpen, setIsAccessibleSectionOpen] = useState(false);

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
            <div className="bg-gray-50 rounded-lg p-6 mb-6 flex flex-row justify-center gap-8">
              <UploadStatusTable />
            </div>
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
                <UploadStatusTableSolved />
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
