"use client";

import { useState } from "react";
import { CountrySelect } from "./CountrySelect";

export const NewsletterForm = ({ showDialog }: { showDialog: () => void }) => {
  const [email, setEmail] = useState("");
  const [preference, setPreference] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // todo: do validations?
    showDialog();
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Subscribe to Our Newsletter
        </h2>
        <div className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block font-bold mb-2">
              Country:
            </label>
            <CountrySelect value={country} onChange={setCountry} />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">
              I would most like to hear about: (select one)
            </label>
            <div className="grid grid-cols-1 gap-2">
              {["New Products", "Promotions", "Company News"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPreference(option)}
                  className={`p-3 border rounded-lg text-left transition-colors duration-200 
                    ${
                      preference === option
                        ? "bg-blue-200"
                        : "bg-white hover:bg-gray-100"
                    }
                    focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
