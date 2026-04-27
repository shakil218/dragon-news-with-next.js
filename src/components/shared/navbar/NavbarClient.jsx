"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import user from "@/assets/user.png";
import NavLinks from "./NavLinks";

const NavbarClient = () => {
  const pathname = usePathname();

  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <div
      className={`navbar bg-base-100 px-0 z-50 transition-all ${
        isAuthPage && "fixed top-0 left-0 w-full shadow-md"
      }`}
    >
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-gray-500 text-xl font-medium">
            <NavLinks />
          </ul>
        </div>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-500 text-md font-medium">
          <NavLinks />
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-5">
        <Image src={user} alt="User" width={40} height={40} />

        <Link href="/login">
          <button className="btn bg-linear-to-br from-indigo-900 via-purple-900 to-black text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarClient;
