"use client";

import { useState } from "react";

import {
  UploadStatusTable,
} from "../../components/UploadStatusTable/UploadStatusTable";

export default function ExerciseLoadingStatusPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-12">
      {/* <NavHeader /> */}

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              Exercise: Status Indicators
            </h2>
            <UploadStatusTable />
          </section>
        </main>
      </div>
    </div>
  );
}
