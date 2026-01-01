"use client";
import React, { useEffect, useState } from "react";

export default function Faqs() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll(".scroll-reveal").forEach((el) => {
            observer.observe(el);
        });
    }, []);

    const categories = ["all", "admissions", "programs", "facilities", "career"];

    const faqs = [
        // --- Admissions ---
        {
            category: "admissions",
            question: "What are the admission requirements for undergraduate programs?",
            answer: (
                <>
                    For undergraduate programs, applicants must have completed intermediate
                    (HSSC) or equivalent with at least 60% marks in pre-engineering or ICS.
                    They must also pass the university entrance test. The process includes:
                    <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                        <li>Submission of application form</li>
                        <li>Entrance test</li>
                        <li>Merit-based selection</li>
                        <li>Interview (for shortlisted candidates)</li>
                    </ul>
                </>
            ),
        },
        {
            category: "admissions",
            question: "When do admissions open for the academic year?",
            answer: (
                <>
                    Admissions typically open twice a year:
                    <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                        <li>Fall Semester: July–August</li>
                        <li>Spring Semester: December–January</li>
                    </ul>
                    <p className="mt-2">
                        Graduate programs usually open in June–July for the Fall semester.
                    </p>
                </>
            ),
        },
        {
            category: "admissions",
            question: "Is there any financial aid available for students?",
            answer: (
                <>
                    Yes, the university offers several financial aid options:
                    <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                        <li>Merit-based scholarships</li>
                        <li>Need-based scholarships</li>
                        <li>Fee concessions for deserving students</li>
                        <li>Research assistantships (graduate students)</li>
                        <li>External scholarships</li>
                    </ul>
                </>
            ),
        },
        // --- Programs ---
        {
            category: "programs",
            question:
                "What is the difference between Computer Science and Software Engineering programs?",
            answer: (
                <>
                    <p>
                        <strong>Computer Science:</strong> Focuses on the theoretical
                        foundations of computing, algorithms, and programming languages.
                    </p>
                    <p className="mt-2">
                        <strong>Software Engineering:</strong> Emphasizes software design,
                        testing, and systematic software development.
                    </p>
                </>
            ),
        },
        {
            category: "programs",
            question: "How long does it take to complete each program?",
            answer: (
                <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                    <li>
                        <strong>BS:</strong> 4 years (8 semesters)
                    </li>
                    <li>
                        <strong>MS:</strong> 2 years (4 semesters)
                    </li>
                    <li>
                        <strong>PhD:</strong> 3–5 years (research-based)
                    </li>
                </ul>
            ),
        },
        {
            category: "programs",
            question: "Are there opportunities for internships?",
            answer: (
                <>
                    Yes, internships are an integral part of our programs. We have:
                    <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                        <li>Mandatory internship courses</li>
                        <li>Partnerships with tech companies</li>
                        <li>Career development support</li>
                        <li>Recruitment drives and fairs</li>
                    </ul>
                </>
            ),
        },
        // --- Facilities ---
        {
            category: "facilities",
            question: "What computing facilities are available for students?",
            answer: (
                <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                    <li>5 modern computer labs</li>
                    <li>High-speed Wi-Fi</li>
                    <li>AI, networking, and software labs</li>
                    <li>Cloud computing resources</li>
                    <li>24/7 lab access for senior students</li>
                </ul>
            ),
        },
        {
            category: "facilities",
            question: "Is there a library with computer science resources?",
            answer: (
                <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                    <li>Specialized CS library</li>
                    <li>IEEE, ACM, and Springer access</li>
                    <li>E-books and digital libraries</li>
                    <li>Study rooms and scanning facilities</li>
                </ul>
            ),
        },
        // --- Career ---
        {
            category: "career",
            question: "What career opportunities are available after graduation?",
            answer: (
                <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                    <li>Software Developer</li>
                    <li>Database Administrator</li>
                    <li>Data Scientist</li>
                    <li>AI Engineer</li>
                    <li>Network Engineer</li>
                </ul>
            ),
        },
        {
            category: "career",
            question: "Does the department help with job placement?",
            answer: (
                <ul className="list-disc pl-4 sm:pl-6 mt-2 space-y-1">
                    <li>Career counseling</li>
                    <li>Job fairs & networking events</li>
                    <li>Resume & interview prep</li>
                </ul>
            ),
        },
    ];

    return (
        <main className="bg-[#ffffff] text-[#132A46] font-sans">


            {/* Introduction - responsiveness added */}
            <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 py-10 sm:py-14 lg:py-16 text-center max-w-3xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-26">
                {/* Responsive font sizes */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-[#004A99]">
                    Common Questions About Our Department
                </h2>
                {/* Responsive text size and padding */}
                <p className="text-base sm:text-lg leading-relaxed text-[#132A46] px-2">
                    Find answers about our programs, admissions, and facilities. If you
                    can&apos;t find what you&apos;re looking for, feel free to{" "}
                    <a href="/contactus" className="text-[#004A99] font-semibold hover:underline">
                        contact us
                    </a>
                    .
                </p>
            </section>

            {/* Category Tabs - responsiveness added */}
            <div className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 flex justify-center gap-2 sm:gap-3 lg:gap-4 flex-wrap mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-bold border-2 transition-all duration-300 text-xs sm:text-sm lg:text-base ${activeCategory === cat
                                ? "bg-[#004A99] text-white border-[#004A99]"
                                : "bg-white text-[#004A99] border-[#004A99] hover:bg-[#004A99] hover:text-white"
                            }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {/* FAQ Accordion - responsiveness added */}
            <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
                {faqs
                    .filter(
                        (f) => activeCategory === "all" || f.category === activeCategory
                    )
                    .map((faq, i) => (
                        <div
                            key={i}
                            className="mb-3 sm:mb-4 bg-white border border-[#E0E6ED] rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            <button
                                onClick={() =>
                                    setActiveIndex(activeIndex === i ? null : i)
                                }
                                className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-semibold text-base sm:text-lg text-[#004A99]"
                            >
                                {/* Responsive text wrapping */}
                                <span className="text-left pr-4">{faq.question}</span>
                                <span className="text-xl sm:text-2xl font-bold flex-shrink-0">
                                    {activeIndex === i ? "-" : "+"}
                                </span>
                            </button>
                            {activeIndex === i && (
                                <div className="p-4 sm:p-5 pt-0 text-[#132A46] text-sm sm:text-base leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
            </section>

            {/* Contact CTA - responsiveness added */}
            <section className="bg-[#F0F4F8] text-center py-12 sm:py-16 lg:py-20 px-4">
                {/* Responsive font sizes */}
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 text-[#004A99]">
                    Still Have Questions?
                </h2>
                <p className="text-base sm:text-lg mb-5 sm:mb-6 text-[#132A46] max-w-2xl mx-auto">
                    Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
                </p>
                {/* Responsive button padding */}
                <a
                    href="/contactus"
                    className="inline-block bg-[#004A99] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full shadow hover:bg-[#003366] hover:shadow-lg transition text-sm sm:text-base"
                >
                    Contact Us
                </a>
            </section>
        </main>
    );
}