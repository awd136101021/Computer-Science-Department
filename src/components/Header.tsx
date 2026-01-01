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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // responsive fix: added mobile menu state

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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#00224e] via-[#003366] to-[#004080] text-white shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center"> {/* responsive fix: adjusted padding */}
        {/* 🔹 Left: Logo and Title */}
        <div className="flex items-center space-x-2 sm:space-x-3"> {/* responsive fix: adjusted spacing */}
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="CS Department Logo"
              className="h-[40px] w-[55px] sm:h-[50px] sm:w-[70px] object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg" /* responsive fix: adjusted logo size */
            />
          </Link>
          <Link href="/">
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#ffcc00] to-[#fff8cc] bg-clip-text text-transparent"> {/* responsive fix: adjusted text size */}
              Computer Science
            </h2>
          </Link>
        </div>

        {/* 🔹 Desktop Navigation Links - Hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-4"> {/* responsive fix: hide on mobile, show on large screens */}
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
              className={`relative font-medium text-sm tracking-wide px-2 py-1 transition-all duration-300 ${
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
            className={`relative font-medium text-sm tracking-wide px-2 py-1 transition-all duration-300 flex items-center gap-1 ${
              isActive("/dashboard")
                ? "text-[#ffcc00] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffcc00] after:rounded-full"
                : "text-white hover:text-[#ffcc00]"
            }`}
          >
            <span>Dashboard</span>
          </Link>

          {/* 🔹 Login/Logout Button */}
          {user ? (
            <div className="flex items-center space-x-3">
              <button
                onClick={handleLogout}
                className="ml-4 flex items-center gap-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white font-bold px-4 py-2 rounded-full hover:from-white hover:to-white hover:text-red-600 hover:shadow-[0_0_15px_#ff6b6b] transition-all duration-300 text-sm"
              >
                <FaSignInAlt className="text-base rotate-180" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="ml-4 flex items-center gap-2 bg-gradient-to-r from-[#ffcc00] to-[#ffd633] text-[#003366] font-bold px-4 py-2 rounded-full hover:from-white hover:to-white hover:text-[#003366] hover:shadow-[0_0_15px_#ffcc00] transition-all duration-300 text-sm"
            >
              <FaSignInAlt className="text-base" />
              <span>Login</span>
            </Link>
          )}
        </nav>

        {/* 🔹 Mobile Menu Button - Visible only on mobile/tablet */}
        <button
          className="lg:hidden text-white text-2xl p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Mobile Menu Overlay - Responsive fix: added mobile menu */}
      <div className={`lg:hidden fixed inset-0 bg-gradient-to-r from-[#00224e] via-[#003366] to-[#004080] transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ top: '60px', zIndex: 49 }}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {[
            { to: "/", label: "Home" },
            { to: "/aboutus", label: "About Us" },
            { to: "/faculty", label: "Faculty" },
            { to: "/programs", label: "Programs" },
            { to: "/faqs", label: "FAQs" },
            { to: "/contactus", label: "Contact Us" },
            { to: "/dashboard", label: "Dashboard" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              href={to}
              className={`text-xl font-medium tracking-wide transition-all duration-300 ${
                isActive(to)
                  ? "text-[#ffcc00] font-semibold"
                  : "text-white hover:text-[#ffcc00]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          
          {/* 🔹 Mobile Login/Logout Button */}
          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white font-bold px-6 py-3 rounded-full hover:from-white hover:to-white hover:text-red-600 hover:shadow-[0_0_15px_#ff6b6b] transition-all duration-300 text-lg mt-8"
            >
              <FaSignInAlt className="text-base rotate-180" />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 bg-gradient-to-r from-[#ffcc00] to-[#ffd633] text-[#003366] font-bold px-6 py-3 rounded-full hover:from-white hover:to-white hover:text-[#003366] hover:shadow-[0_0_15px_#ffcc00] transition-all duration-300 text-lg mt-8"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaSignInAlt className="text-base" />
              <span>Login</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}