"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-16">
      <div className=" max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-8">
        {/* 📰 Brand */}
        <div>
          <div className="bg-linear-to-br from-indigo-900 via-purple-900 to-black bg-clip-text text-transparent transition-all">
            <h2 className="text-2xl font-extrabold">
              The Dragon News
            </h2>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Journalism Without Fear or Favour.
          </p>
        </div>

        {/* 🔗 Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-red-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-red-600 transition">
                Career
              </Link>
            </li>
          </ul>
        </div>

        {/* 🌐 Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-200 p-5">
        © {new Date().getFullYear()} The Dragon News. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
