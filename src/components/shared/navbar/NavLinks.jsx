"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.path;

        return (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`relative pb-1 transition-colors duration-300 ${
                isActive
                  ? "text-red-600 font-semibold"
                  : "text-gray-500 hover:text-red-500"
              }`}
            >
              {link.name}

              {/* Underline */}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-red-600 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;