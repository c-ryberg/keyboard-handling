"use client";

import { useState } from "react";
import Link from "next/link";

import "./HeaderSubmenu.css";

const submenus: Record<string, string[]> = {
  Products: [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Books",
    "Toys",
    "Sports",
    "Beauty",
    "Automotive",
  ],
  About: ["Our Story", "Our Team", "Our Values"],
  Blog: [
    "News",
    "Tutorials",
    "Reviews",
    "Podcasts",
    "Videos",
    "Events",
    "Interviews",
    "Opinions",
    "Guides",
    "Tips",
    "Resources",
    "Case Studies",
    "Infographics",
  ],
  Careers: ["Open Positions", "Benefits", "Culture", "Values", "FAQ", "Apply"],
};

export const HeaderSubmenu = ({ mainMenuItem }: { mainMenuItem: string }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const submenuItems = submenus[mainMenuItem];

  const displayBlockSubmenu = isSubMenuOpen ? "block" : "";

  return (
    <li className="mainmenu-item">
      {submenuItems ? (
        <div className="relative">
          <button
            onFocus={() => setIsSubMenuOpen(!isSubMenuOpen)}
            className="mainmenu-button hover:text-gray-300"
            aria-haspopup="true"
            aria-expanded={isSubMenuOpen}
          >
            {mainMenuItem}
          </button>
          <ul
            className={`submenu ${displayBlockSubmenu} absolute z-10 left-0 bg-gray-700 p-2 w-48 shadow-md shadow-gray-500`}
          >
            {submenuItems.map((category, categoryIndex) => (
              <li key={categoryIndex}>
                <Link
                  href="/demo/link"
                  className="block py-1 px-2 hover:bg-gray-600 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSubMenuOpen(false);
                  }}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link href="/demo/link" className="hover:text-gray-300">
          {mainMenuItem}
        </Link>
      )}
    </li>
  );
};
