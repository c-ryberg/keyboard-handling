import Link from "next/link";

export const NavHeader = () => (
  <header className="bg-blue-600 text-white py-6 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">Keyboard Testing Guide</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/reference"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded-md px-2 py-1"
            >
              Reference
            </Link>
          </li>
          <li>
            <Link
              href="/demo"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 rounded-md px-2 py-1"
            >
              Demo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
