"use client";
import React, { useEffect, useState } from "react";

export default function Programs() {
    const [filter, setFilter] = useState("all");

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

    const programs = [
        {
            level: "undergraduate",
            title: "Bachelor of Science in Computer Science",
            duration: "4 Years",
            desc: "Provides a strong foundation in computing principles, algorithms, programming languages, and software development.",
            courses: [
                "Data Structures and Algorithms",
                "Object-Oriented Programming",
                "Database Systems",
                "Computer Networks",
                "Artificial Intelligence",
                "Web Development",
            ],
            careers: [
                "Software Developer",
                "Systems Analyst",
                "Database Administrator",
                "Web Developer",
                "IT Consultant",
            ],
        },
        {
            level: "undergraduate",
            title: "Bachelor of Science in Software Engineering",
            duration: "4 Years",
            desc: "Focuses on software design, testing, and project management for large-scale systems.",
            courses: [
                "Software Engineering Principles",
                "Software Design and Architecture",
                "Software Testing and Quality Assurance",
                "Software Project Management",
                "Requirements Engineering",
                "Mobile Application Development",
            ],
            careers: [
                "Software Engineer",
                "Software Architect",
                "QA Engineer",
                "Project Manager",
                "DevOps Engineer",
            ],
        },
        {
            level: "undergraduate",
            title: "Bachelor of Science in Artificial Intelligence",
            duration: "4 Years",
            desc: "Prepares students to develop intelligent systems using ML, neural networks, and NLP.",
            courses: [
                "Introduction to Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "Robotics",
            ],
            careers: [
                "AI Engineer",
                "Machine Learning Engineer",
                "Data Scientist",
                "Research Scientist",
                "AI Product Manager",
            ],
        },
        {
            level: "graduate",
            title: "Master of Science in Computer Science",
            duration: "2 Years",
            desc: "Advanced study in computing theory and applications with specializations in AI, data science, or cybersecurity.",
            courses: [
                "Advanced Algorithms",
                "Advanced Database Systems",
                "Distributed Systems",
                "Cloud Computing",
                "Advanced Computer Networks",
                "Research Methodology",
            ],
            careers: [
                "Senior Software Engineer",
                "Research Scientist",
                "Systems Architect",
                "Technical Lead",
                "Academic Researcher",
            ],
        },
        {
            level: "graduate",
            title: "Master of Science in Software Engineering",
            duration: "2 Years",
            desc: "Provides advanced knowledge in software development, QA, and enterprise systems.",
            courses: [
                "Advanced Software Engineering",
                "Software Metrics and Models",
                "Software Verification and Validation",
                "Enterprise Software Architecture",
                "Agile Methodologies",
                "Software Risk Management",
            ],
            careers: [
                "Senior Software Engineer",
                "Software Architect",
                "Project Manager",
                "QA Manager",
                "Process Improvement Specialist",
            ],
        },
        {
            level: "doctorate",
            title: "PhD in Computer Science",
            duration: "3–5 Years",
            desc: "For students pursuing advanced research in AI, networks, security, and theoretical computing.",
            courses: [
                "Artificial Intelligence & ML",
                "Big Data Analytics",
                "Computer Networks & Security",
                "Human-Computer Interaction",
                "Software Systems",
            ],
            careers: [
                "University Professor",
                "Research Scientist",
                "R&D Director",
                "CTO",
                "Research Lab Director",
            ],
        },
    ];

    const admissions = [
        {
            title: "Undergraduate Admissions",
            desc: "Open twice a year in Fall and Spring. Requires Intermediate (Pre-Engineering or ICS) with at least 60% marks.",
            reqs: [
                "Intermediate Certificate",
                "Entrance Test Score",
                "Application Form",
                "Personal Statement",
            ],
        },
        {
            title: "Graduate Admissions",
            desc: "Conducted once a year. Requires a relevant bachelor's degree with a minimum CGPA of 2.5 or 60%.",
            reqs: [
                "Bachelor's Degree Certificate",
                "Transcript",
                "GAT/GRE Score",
                "Two Reference Letters",
                "Statement of Purpose",
            ],
        },
        {
            title: "Doctorate Admissions",
            desc: "Highly competitive; requires MS/MPhil degree, research proposal, and supervisor availability.",
            reqs: [
                "MS/MPhil Degree Certificate",
                "Transcript",
                "Research Proposal",
                "GAT/GRE Subject Score",
                "Three Reference Letters",
                "Interview",
            ],
        },
    ];

    return (
        <main className="bg-[#ffffff] text-[#132A46] font-sans">

            {/* Intro */}
            <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 text-center py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"> {/* responsive fix: added responsive padding */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#004A99] mt-10"> {/* responsive fix: added responsive text size */}
                    Explore Our Programs
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-[#132A46] px-2 sm:px-0"> {/* responsive fix: added responsive text size and padding */}
                    The Department of Computer Science offers a range of academic programs
                    designed to prepare students for successful careers in the evolving
                    field of computing. Our curriculum blends theoretical knowledge with
                    hands-on experience.
                </p>
            </section>

            {/* Filter buttons - added for mobile accessibility */}
            <div className="flex justify-center mb-10 px-4"> {/* responsive fix: added filter buttons for mobile */}
                <div className="flex flex-wrap justify-center gap-2 max-w-md">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${filter === "all" ? "bg-[#004A99] text-white" : "bg-gray-200 text-[#132A46]"}`}
                    >
                        All Programs
                    </button>
                    <button
                        onClick={() => setFilter("undergraduate")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${filter === "undergraduate" ? "bg-[#004A99] text-white" : "bg-gray-200 text-[#132A46]"}`}
                    >
                        Undergraduate
                    </button>
                    <button
                        onClick={() => setFilter("graduate")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${filter === "graduate" ? "bg-[#004A99] text-white" : "bg-gray-200 text-[#132A46]"}`}
                    >
                        Graduate
                    </button>
                    <button
                        onClick={() => setFilter("doctorate")}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition ${filter === "doctorate" ? "bg-[#004A99] text-white" : "bg-gray-200 text-[#132A46]"}`}
                    >
                        Doctorate
                    </button>
                </div>
            </div>

            {/* Program Cards */}
            <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-[1500ms] max-w-[1200px] mx-auto px-4 sm:px-6 grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2"> {/* responsive fix: adjusted grid and padding */}
                {programs
                    .filter((p) => filter === "all" || p.level === filter)
                    .map((p, i) => (
                        <div
                            key={i}
                            className="bg-white border-t-4 border-[#004A99] rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-500" /* responsive fix: adjusted padding */
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2"> {/* responsive fix: stacked title and duration on mobile */}
                                <h3 className="text-xl sm:text-2xl font-extrabold text-[#004A99]"> {/* responsive fix: adjusted text size */}
                                    {p.title}
                                </h3>
                                <span className="text-sm bg-[#FDCB5A] text-[#132A46] px-3 py-1 rounded-full font-semibold self-start sm:self-center"> {/* responsive fix: added self alignment */}
                                    {p.duration}
                                </span>
                            </div>
                            <p className="mb-4 text-[#132A46] text-sm sm:text-base"> {/* responsive fix: adjusted text size */}
                                {p.desc}
                            </p>
                            <h4 className="font-bold text-[#4B2483] mb-2 text-sm sm:text-base"> {/* responsive fix: adjusted text size */}
                                Key Courses:
                            </h4>
                            <ul className="list-disc pl-4 sm:pl-6 mb-4 text-[#132A46] space-y-1 text-sm sm:text-base"> {/* responsive fix: adjusted padding and text size */}
                                {p.courses.map((c, i) => (
                                    <li key={i}>{c}</li>
                                ))}
                            </ul>
                            <h4 className="font-bold text-[#4B2483] mb-2 text-sm sm:text-base"> {/* responsive fix: adjusted text size */}
                                Career Opportunities:
                            </h4>
                            <ul className="list-disc pl-4 sm:pl-6 text-[#132A46] space-y-1 text-sm sm:text-base"> {/* responsive fix: adjusted padding and text size */}
                                {p.careers.map((c, i) => (
                                    <li key={i}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </section>

            {/* Admission Info */}
            <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-[2000ms] bg-[#F0F4F8] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20"> {/* responsive fix: adjusted padding and margins */}
                <h2 className="text-3xl sm:text-4xl font-black text-center text-[#004A99] mb-8 sm:mb-10"> {/* responsive fix: adjusted text size and margin */}
                    Admission Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1200px] mx-auto"> {/* responsive fix: adjusted grid columns and gaps */}
                    {admissions.map((a, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-t-4 border-[#FDCB5A] hover:shadow-2xl hover:-translate-y-1 transition duration-500" /* responsive fix: adjusted padding */
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-[#004A99] mb-3"> {/* responsive fix: adjusted text size */}
                                {a.title}
                            </h3>
                            <p className="mb-3 text-[#132A46] text-sm sm:text-base"> {/* responsive fix: adjusted text size */}
                                {a.desc}
                            </p>
                            <h4 className="font-semibold text-[#4B2483] mb-2 text-sm sm:text-base"> {/* responsive fix: adjusted text size */}
                                Requirements:
                            </h4>
                            <ul className="list-disc pl-4 sm:pl-6 text-[#132A46] space-y-1 text-sm sm:text-base"> {/* responsive fix: adjusted padding and text size */}
                                {a.reqs.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                            <a
                                href="https://uog.edu.pk/admissions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <button className="mt-6 bg-[#FDCB5A] text-[#132A46] px-5 py-2 sm:px-6 sm:py-2 rounded-full font-bold hover:bg-[#D97706] transition text-sm sm:text-base"> {/* responsive fix: adjusted padding and text size */}
                                    Apply Now
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}