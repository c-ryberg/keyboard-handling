"use client";

import { useState } from "react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Brazil",
];

export const CountrySelect = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "relative" : ""}>
      <div
        className="w-full p-2 border rounded bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "Select a country"}
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg">
          {countries.map((country, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(country);
                setIsOpen(false);
              }}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
