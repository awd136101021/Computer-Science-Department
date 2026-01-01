import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full text-white overflow-hidden">
            {/* 🔹 Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a3d] via-[#002b5c] to-[#004080] animate-gradient-x opacity-95"></div>

            {/* Responsive container with adjusted spacing */}
            <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-14 flex flex-col sm:flex-row flex-wrap justify-between items-start gap-6 sm:gap-8 md:gap-10">

                {/* 🔹 Logo & Description - Responsive adjustments */}
                <div className="flex flex-col items-center sm:items-start space-y-3 sm:space-y-4 w-full sm:w-auto order-1">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <img
                            src="/images/logo.png"
                            alt="CS Logo"
                            className="w-16 sm:w-18 md:w-20 hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_#ffcc00]"
                        />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-[#ffcc00] to-[#fff8cc] bg-clip-text text-transparent">
                            Computer Science
                        </h2>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xs backdrop-blur-sm p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/10 text-center sm:text-left">
                        Empowering innovation and excellence through technology and education at the University of Gujrat.
                    </p>
                </div>

                {/* 🔹 Quick Links - Responsive adjustments */}
                <div className="min-w-[140px] sm:min-w-[160px] order-3 sm:order-2">
                    <h3 className="text-[#ffcc00] mb-2 sm:mb-3 text-base sm:text-lg font-semibold border-b-2 border-[#ffcc00]/40 pb-1">
                        Quick Links
                    </h3>
                    <ul className="space-y-1 sm:space-y-2 text-gray-200 text-sm sm:text-base">
                        {["Programs", "About Us", "Faculty", "FAQs", "Contact Us"].map(
                            (item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                                        className="relative inline-block transition-all duration-300 hover:text-[#ffcc00] after:absolute after:left-0 after:bottom-0 after:h-[1px] sm:after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffcc00] after:transition-all after:duration-300 text-sm sm:text-base"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* 🔹 Contact Info - Responsive adjustments */}
                <div className="text-gray-200 order-4 sm:order-3">
                    <h3 className="text-[#ffcc00] mb-2 sm:mb-3 text-base sm:text-lg font-semibold border-b-2 border-[#ffcc00]/40 pb-1">
                        Contact Us
                    </h3>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        {[
                            "📞 0326-7356166",
                            "📞 0344-6710225",
                            "✉️ iamabdullahtanveer@gmail.com",
                        ].map((info, i) => (
                            <p
                                key={i}
                                className="hover:text-[#ffcc00] transition-colors duration-300 break-words"
                            >
                                {info}
                            </p>
                        ))}
                    </div>
                </div>

                {/* 🔹 Social Links - Responsive adjustments */}
                <div className="text-gray-200 order-2 sm:order-4">
                    <h3 className="text-[#ffcc00] mb-2 sm:mb-3 text-base sm:text-lg font-semibold border-b-2 border-[#ffcc00]/40 pb-1">
                        Follow Us
                    </h3>
                    <div className="flex space-x-3 sm:space-x-4">
                        {[
                            {
                                href: "https://www.facebook.com/iamabdullahtanveer/",
                                src: "/images/fb-logo.png",
                                alt: "Facebook",
                            },
                            {
                                href: "https://www.linkedin.com/in/abdullah-tanveer-570216338/",
                                src: "/images/linkedln-logo.png",
                                alt: "LinkedIn",
                            },
                            {
                                href: "https://www.instagram.com/abdullah_tanveer__/",
                                src: "/images/insta-logo.jpeg",
                                alt: "Instagram",
                            },
                        ].map(({ href, src, alt }) => (
                            <a
                                key={alt}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative transform hover:scale-110 transition-transform duration-300"
                            >
                                <div className="absolute -inset-1 bg-[#ffcc00] opacity-0 group-hover:opacity-30 blur-md rounded-full transition-all duration-300"></div>
                                <img
                                    src={src}
                                    alt={alt}
                                    className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white p-1 shadow-lg group-hover:shadow-[0_0_15px_#ffcc00] sm:group-hover:shadow-[0_0_20px_#ffcc00]"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 🔹 Bottom Bar - Responsive adjustments */}
            <div className="relative text-center border-t border-[#ffffff33] py-3 sm:py-4 text-xs sm:text-sm text-gray-300 bg-[#001a3d]/60 backdrop-blur-md px-4">
                &copy; 2025{" "}
                <span className="text-[#ffcc00] font-semibold">CS Department</span>, University of Gujrat.{" "}
                <span className="text-gray-400 hidden sm:inline">All Rights Reserved.</span>
                <span className="text-gray-400 sm:hidden">All Rights Reserved.</span>
            </div>
        </footer>
    );
}