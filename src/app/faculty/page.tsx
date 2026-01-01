"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export default function Faculty() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [isVisible, setIsVisible] = useState(false);
    const [selectedFaculty, setSelectedFaculty] = useState<number | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const faculty = [
        {
            name: "Dr. Umer Shoaib",
            designation: "Professor & Head of Department",
            specialization: "Artificial Intelligence, Machine Learning",
            education: "PhD in Computer Science, Stanford University",
            email: "umar.shoaib@uog.edu.pk",
            office: "CS-101",
            img: "/images/umar.jpg",
            category: "professors",
            links: {
                linkedin: "https://www.linkedin.com/in/umar-shoaib-9997701b/",
                scholar: "https://www.researchgate.net/scientific-contributions/Umar-Shoaib-2177468469",
            },
        },
        {
            name: "Mr Najeeb-Ur-Rehman",
            designation: "Assistant Professor",
            specialization: "Data Science, Big Data Analytics",
            education: "MS in Data Science, MIT",
            email: "najeeb.rehman@uog.edu.pk",
            office: "CS-102",
            img: "/images/NAJEEB.jpeg",
            category: "assistant",
            links: {
                linkedin: "https://www.linkedin.com/in/najeeb-ur-rehman-09b78bb3/",
                scholar: "https://scholar.google.com.pk/citations?user=buxBXpsAAAAJ&hl=en",
            },
        },
        {
            name: "Dr. Abdur Rehman",
            designation: "Assistant Professor",
            specialization: "Computer Science",
            education: "PhD, University of Engg & Tech Lhr",
            email: "a.rehman@uog.edu.pk",
            office: "CS-201",
            img: "/images/abdul rehman.jpg",
            category: "assistant",
            links: {
                scholar: "https://www.researchgate.net/profile/Abdul-Rehman-269",
            },
        },
        {
            name: "Dr. Muhammad Usman Ali",
            designation: "Assistant Professor",
            specialization: "Information and Communication Engineering",
            education: "MS, University of Engineering & Technology Texila",
            email: "m.usmanali@uog.edu.pk",
            office: "CS-401",
            img: "/images/usman.jpeg",
            category: "lecturers",
            links: {
                linkedin: "https://www.linkedin.com/in/muhammad-usman-ali-6b12645/",
            },
        },
        {
            name: "Dr. Naveed Anwer Butt",
            designation: "Assistant Professor",
            specialization: "Artificial Intelligence",
            education: "PhD Computer Science, International Islamic University",
            email: "naveed@uog.edu.pk",
            office: "CS-302",
            img: "/images/anwer.jpeg",
            category: "assistant",
            links: {
                linkedin: "https://www.linkedin.com/in/naveed-anwer-butt-b669a7133/",
                scholar: "https://scholar.google.com/citations?user=aU6rNxwAAAAJ&hl=en",
            },
        },
        {
            name: "Ehtisham Rasheed",
            designation: "Lecturer",
            specialization: "Computer Engineering",
            education: "MS in Computer Science, LUMS",
            email: "ehtisham.rashid@uog.edu.pk",
            office: "CS-202",
            img: "/images/Ehtisham.jpg",
            category: "associate",
            links: {
                linkedin: "https://www.linkedin.com/in/ehtisham-rasheed-02809019",
                youtube: "https://www.youtube.com/@ehtishamrasheed",
            },
        },
    ];

    const categories = [
        { id: "all", label: "All Faculty" },
        { id: "professors", label: "Professors" },
        { id: "associate", label: "Associate Professors" },
        { id: "assistant", label: "Assistant Professors" },
        { id: "lecturers", label: "Lecturers" },
    ];

    return (
        <main
            className={`min-h-screen bg-gradient-to-br from-slate-50 pt-18 via-blue-50 to-indigo-100 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Hero Section - responsiveness added */}
            <section className="text-center py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                {/* Responsive font sizes */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-3 sm:mb-4 tracking-wide">
                    Meet Our Distinguished Faculty
                </h1>
                {/* Responsive padding and text size */}
                <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
                    Our department prides itself on having a team of dedicated educators and researchers who
                    inspire students through knowledge, innovation, and mentorship.
                </p>
            </section>

            {/* Category Buttons - responsiveness added */}
            <section className="flex justify-center gap-2 sm:gap-3 lg:gap-4 flex-wrap mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-4">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 shadow-md text-xs sm:text-sm lg:text-base ${activeCategory === cat.id
                                ? "bg-gradient-to-r from-[#004A99] to-[#0066CC] text-white scale-105 shadow-lg"
                                : "bg-white text-[#003366] border border-[#004A99] hover:bg-[#E6F0FF]"
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </section>

            {/* Faculty Grid - responsiveness added */}
            <section className="grid gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                {faculty
                    .filter((f) => activeCategory === "all" || f.category === activeCategory)
                    .map((f, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedFaculty(i)}
                            className={`relative bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 transition-all duration-500 overflow-hidden group cursor-pointer ${selectedFaculty === i
                                    ? "border-yellow-400 shadow-yellow-400 shadow-xl scale-[1.03]"
                                    : "border-gray-200 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2"
                                }`}
                        >
                            {/* Circular Image - responsiveness added */}
                            <div className="relative flex justify-center mt-4 sm:mt-6">
                                <div className="rounded-full overflow-hidden w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-4 border-[#004A99] shadow-lg group-hover:shadow-[#004A99]/50 transition-all duration-500">
                                    <img
                                        src={f.img}
                                        alt={f.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Content - responsiveness added */}
                            <div className="p-4 sm:p-5 lg:p-6 text-center">
                                {/* Responsive text sizes */}
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#003366] group-hover:text-[#004A99] transition-colors duration-300 mb-1">
                                    {f.name}
                                </h3>
                                <p className="text-[#4B2483] font-semibold text-sm sm:text-base mb-1">{f.designation}</p>
                                <p className="text-gray-700 text-xs sm:text-sm mb-2">{f.specialization}</p>
                                <p className="text-gray-500 text-xs sm:text-sm italic mb-3 sm:mb-4">{f.education}</p>
                                <p className="text-xs sm:text-sm">
                                    <strong>Email:</strong> {f.email}
                                </p>
                                <p className="text-xs sm:text-sm mb-2 sm:mb-3">
                                    <strong>Office:</strong> {f.office}
                                </p>

                                {/* Links */}
                                <div className="flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                                    {f.links.linkedin && (
                                        <a
                                            href={f.links.linkedin}
                                            className="text-[#0077B5] hover:text-[#005582] text-xl sm:text-2xl transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaLinkedin />
                                        </a>
                                    )}
                                    {f.links.scholar && (
                                        <a
                                            href={f.links.scholar}
                                            className="text-[#34A853] hover:text-[#2a853e] text-xl sm:text-2xl transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <SiGooglescholar />
                                        </a>
                                    )}
                                    {f.links.youtube && (
                                        <a
                                            href={f.links.youtube}
                                            className="text-[#FF0000] hover:text-[#cc0000] text-xl sm:text-2xl transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaYoutube />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
            </section>

            {/* Stats Section - responsiveness added */}
            <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 shadow-inner">
                {/* Responsive grid layout */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto text-center">
                    {[
                        { num: "20+", text: "Faculty Members" },
                        { num: "85%", text: "PhD Holders" },
                        { num: "150+", text: "Research Publications" },
                        { num: "25+", text: "Research Projects" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-[#E6F0FF] to-[#F8FAFF] p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-[#dbe3f0]"
                        >
                            {/* Responsive text sizes */}
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#004A99] mb-1 sm:mb-2">{stat.num}</h3>
                            <p className="text-sm sm:text-base lg:text-lg font-medium text-[#132A46]">{stat.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}