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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#00224e] via-[#003366] to-[#004080] text-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* 🔹 Left: Logo and Title */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="CS Department Logo"
              className="h-[40px] w-[55px] sm:h-[50px] sm:w-[70px] object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <Link href="/">
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#ffcc00] to-[#fff8cc] bg-clip-text text-transparent">
              Computer Science
            </h2>
          </Link>
        </div>

        {/* 🔹 Desktop Navigation Links - Hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-4">
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

      {/* 🔹 Mobile Menu Overlay - SIMPLIFIED FIX */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute top-full left-0 right-0 bg-gradient-to-b from-[#00224e] via-[#003366] to-[#004080] shadow-2xl border-t border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col p-4 space-y-1">
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
                  className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                    isActive(to)
                      ? "bg-white/20 text-[#ffcc00] font-semibold"
                      : "text-white hover:bg-white/10 hover:text-[#ffcc00]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              
              {/* 🔹 Mobile Login/Logout Button */}
              <div className="pt-4 mt-2 border-t border-white/20">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white font-bold px-4 py-3 rounded-full hover:from-white hover:to-white hover:text-red-600 transition-all duration-300"
                  >
                    <FaSignInAlt className="text-base rotate-180" />
                    <span>Logout</span>
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffcc00] to-[#ffd633] text-[#003366] font-bold px-4 py-3 rounded-full hover:from-white hover:to-white hover:text-[#003366] transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FaSignInAlt className="text-base" />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
