"use client";
import React, { useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current Pathname:", pathname);
  }, [pathname]);

  return (
    <div>
      <nav>
        <ul className="relative flex justify-center w-1/3 gap-10 p-4 mx-auto mt-4 text-white bg-gray-800 rounded-lg bg-opacity-35">
          <div
            className="absolute top-4.5 left-0 w-17 h-1/2 bg-white rounded-3xl transition-all duration-300 ease-linear opacity-40"
            style={{
              transform: `translateX(${getActiveLinkPosition(pathname)}px)`,
              opacity: pathname === '/' ? 0 : 0.4,

            }}
          ></div>

          <Link
            href="/"
            className={`p-2 rounded-lg ${
              pathname === '/' ? 'text-white-800' : 'text-blue-500'
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`p-2 rounded-lg ${
              pathname === '/about' ? 'text-white-800' : 'text-blue-500'
            }`}
          >
            About
          </Link>
          <Link
            href="/notes"
            className={`p-2 rounded-lg ${
              pathname === '/notes' ? 'text-white-800' : 'text-blue-500'
            }`}
          >
            Notes
          </Link>
          <Link
            href="/contact"
            className={`p-2 rounded-lg ${
              pathname === '/contact' ? 'text-white-800' : 'text-blue-500'
            }`}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

const getActiveLinkPosition = (pathname) => {
  switch (pathname) {
    case '/':
      return 50;
    case '/about':
      return 148;
    case '/notes':
      return 245;
    case '/contact':
      return 350;
    default:
      return 0;
  }
};

export default Navbar;
