"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import userFallbackImg from "@/assets/user.png";
import NavLinks from "./NavLinks";
import { authClient } from "@/lib/auth-client";

const NavbarClient = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending);
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
      {isPending ? (
        <div className="navbar-end gap-3 text-gray-600">
          <span className="font-semibold">Loading</span>
          <span className="loading loading-dots loading-sm"></span>
        </div>
      ) : user ? (
        <div className="navbar-end gap-5">
          <p>Hello, {user?.name.split(" ", 1).join(" ")}</p>
          <div className="relative inline-flex p-0.5 group">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-900 via-purple-900 to-black transition duration-300 group-hover:blur-sm group-hover:opacity-90" />

            <div className="relative rounded-full overflow-hidden bg-white dark:bg-black p-0.5">
              <Image
                src={user?.image || userFallbackImg}
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>

          <button
            onClick={async () => await authClient.signOut()}
            className="btn bg-linear-to-br from-indigo-900 via-purple-900 to-black text-white cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end gap-5">
          <Image src={userFallbackImg} alt="User" width={40} height={40} />

          <Link href="/login">
            <button className="btn bg-linear-to-br from-indigo-900 via-purple-900 to-black text-white">
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarClient;
