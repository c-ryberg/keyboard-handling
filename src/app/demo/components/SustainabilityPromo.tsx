"use client"

import { useState } from "react"
import Link from "next/link"

const SustainabilityPromo = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment to Sustainability</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            At our company, we believe in creating a sustainable future. We're proud to partner with{" "}
            <Link href="https://www.example.com/initiative1" className="text-green-600 hover:underline">
              Green Business Alliance
            </Link>{" "}
            and{" "}
            <Link href="https://www.example.com/initiative2" className="text-green-600 hover:underline">
              Sustainable Supply Chain Initiative
            </Link>{" "}
            to reduce our environmental impact.
          </p>
          <div className={isExpanded ? "" : "h-0 overflow-hidden"}>
            <p className="mb-4">
              Our efforts extend beyond our immediate operations. We're actively working with our suppliers and partners
              to implement sustainable practices throughout our entire supply chain. This includes reducing waste,
              optimizing transportation, and sourcing materials responsibly.
            </p>
            <p className="mb-4">
              We're also proud to support the{" "}
              <Link href="https://www.example.com/initiative3" className="text-green-600 hover:underline">
                Global Reforestation Project
              </Link>
              , which aims to plant millions of trees worldwide and combat deforestation.
            </p>
          </div>
          <div className={`${isExpanded ? "hidden" : ""}`}>
            <Link
              href="https://www.example.com/initiative3"
              className="text-green-600 hover:underline sr-only focus:not-sr-only"
              tabIndex={0}
            >
              Global Reforestation Project
            </Link>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </section>
  )
}

export default SustainabilityPromo

