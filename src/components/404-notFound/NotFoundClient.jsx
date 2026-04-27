"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const NotFoundClient = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100 px-4">
      <div className="max-w-xl text-center space-y-6">
        {/* 404 */}
        <h1 className="text-6xl font-extrabold tracking-tight text-base-content">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold">
          This page has gone missing
        </h2>

        {/* Description */}
        <p className="text-base-content/70">
          The page you&apos;re looking for might have been removed, renamed, or is
          temporarily unavailable. Our reporters are still searching 🐉
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          {/* Back */}
          <button
            onClick={() => router.back()}
            className="btn btn-outline text-violet-600 gap-2"
          >
            <FaArrowLeft />
            Go Back
          </button>

          {/* Home */}
          <Link
            href="/"
            className="btn btn-primary bg-violet-600 border-none gap-2"
          >
            <FaHome />
            Go Home
          </Link>
        </div>

        {/* Footer */}
        <p className="text-sm text-base-content/50 mt-6">
          The Dragon News • Journalism Without Fear or Favour
        </p>
      </div>
    </div>
  );
};

export default NotFoundClient;
