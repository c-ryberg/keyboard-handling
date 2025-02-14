"use client"

import { useState } from "react"
import Link from "next/link"

export const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const mainMenuItems = ["Home", "Products", "About", "Contact", "Blog", "Support", "Careers", "Partners"]

  return (
    <header className="bg-gray-800 text-white p-4">
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex flex-wrap items-center justify-between">
          {mainMenuItems.map((item, index) => (
            <li key={index} className="relative">
              {item === "Products" ? (
                <div className="relative">
                  <button
                    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                    className="hover:text-gray-300"
                    aria-haspopup="true"
                    aria-expanded={isSubMenuOpen}
                  >
                    {item}
                  </button>
                  {isSubMenuOpen && (
                    <ul className="absolute left-0 mt-2 bg-gray-700 p-2 w-48">
                      {[
                        "Electronics",
                        "Clothing",
                        "Home & Garden",
                        "Books",
                        "Toys",
                        "Sports",
                        "Beauty",
                        "Automotive",
                      ].map((category, categoryIndex) => (
                        <li key={categoryIndex}>
                          <a
                            href="#"
                            className="block py-1 px-2 hover:bg-gray-600 text-white"
                            onClick={(e) => {
                              e.preventDefault()
                              setIsSubMenuOpen(false)
                            }}
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link href="#" className="hover:text-gray-300">
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Navigation */}
      <nav className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="mt-4">
          {mainMenuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <Link href="#" className="block hover:text-gray-300">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hidden Desktop Hamburger Menu (for tab-ability) */}
      <nav className="hidden md:block md:fixed md:top-[-9999px] md:left-[-9999px]">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu" tabIndex={0}>
          Hamburger Menu
        </button>
        <ul className="mt-4">
          {mainMenuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <Link href="#" className="block hover:text-gray-300" tabIndex={0}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
