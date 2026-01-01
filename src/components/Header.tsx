"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaSignInAlt, FaUserCircle, FaTachometerAlt, FaBars, FaTimes } from "react-icons/fa";

// Define User type
interface UserType {
  fullName?: string;
  email?: string;
  // Add other user properties as needed
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); /* responsive: mobile menu state */

  useEffect(() => {
    // Access localStorage only on the client side
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing user data:", error);
          setUser(null);
        }
      }
    }
  }, []);

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#00224e] via-[#003366] to-[#004080] text-white shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center"> {/* responsive: adjusted padding */}
        {/* 🔹 Left: Logo and Title */}
        <div className="flex items-center space-x-2 sm:space-x-3"> {/* responsive: reduced space on mobile */}
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="CS Department Logo"
              className="h-10 w-14 sm:h-[50px] sm:w-[70px] object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg" /* responsive: smaller logo on mobile */
            />
          </Link>
          <Link href="/">
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#ffcc00] to-[#fff8cc] bg-clip-text text-transparent"> {/* responsive: responsive text size */}
              Computer Science
            </h2>
          </Link>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none" /* responsive: hide on desktop */
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 🔹 Right: Navigation Links */}
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-gradient-to-r from-[#00224e] via-[#003366] to-[#004080] md:bg-none shadow-lg md:shadow-none z-40 md:items-center space-y-4 md:space-y-0 md:space-x-4 p-6 md:p-0 transition-all duration-300`}> {/* responsive: mobile menu styling */}
          {[
            { to: "/", label: "Home" },
            { to: "/aboutus", label: "About Us" },
            { to: "/faculty", label: "Faculty" },
            { to: "/programs", label: "Programs" },
            { to: "/faqs", label: "FAQs" },
            { to: "/contactus", label: "Contact Us" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              onClick={() => setIsMenuOpen(false)} /* responsive: close menu on click */
              className={`relative font-medium text-base md:text-sm tracking-wide px-2 py-1 transition-all duration-300 ${
                isActive(to)
                  ? "text-[#ffcc00] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffcc00] after:rounded-full"
                  : "text-white hover:text-[#ffcc00]"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* 🔹 Always Visible Dashboard Link */}
          <Link
            href="/dashboard"
            onClick={() => setIsMenuOpen(false)} /* responsive: close menu on click */
            className={`relative font-medium text-base md:text-sm tracking-wide px-2 py-1 transition-all duration-300 flex items-center gap-1 ${
              isActive("/dashboard")
                ? "text-[#ffcc00] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffcc00] after:rounded-full"
                : "text-white hover:text-[#ffcc00]"
            }`}
          >
            <span>Dashboard</span>
          </Link>

          {/* 🔹 Login/Logout Button - Mobile spacing */}
          <div className="pt-4 md:pt-0 border-t border-gray-700 md:border-none mt-4 md:mt-0"> {/* responsive: mobile separator */}
            {user ? (
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-3">
                
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white font-bold px-4 py-2 rounded-full hover:from-white hover:to-white hover:text-red-600 hover:shadow-[0_0_15px_#ff6b6b] transition-all duration-300 text-sm w-full md:w-auto" /* responsive: full width on mobile */
                >
                  <FaSignInAlt className="text-base rotate-180" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)} /* responsive: close menu on click */
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffcc00] to-[#ffd633] text-[#003366] font-bold px-4 py-2 rounded-full hover:from-white hover:to-white hover:text-[#003366] hover:shadow-[0_0_15px_#ffcc00] transition-all duration-300 text-sm w-full md:w-auto" /* responsive: full width on mobile */
              >
                <FaSignInAlt className="text-base" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
