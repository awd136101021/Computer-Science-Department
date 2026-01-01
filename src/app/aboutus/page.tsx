"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      photo: "/images/abdullah.png",
      name: "Abdullah Tanveer",
      role: "Full Stack Developer",
      desc: "5th semester CS student specializing in web development and programming with expertise in React, JavaScript, and backend technologies.",
      skills: ["React", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      photo: "/images/insha.png",
      name: "Insha Fakhar",
      role: "UI/UX Designer",
      desc: "Creative designer focused on front-end styling, content writing, and creating exceptional user experiences.",
      skills: ["UI/UX Design", "Content Writing", "Figma"],
    },
    {
      photo: "/images/anza.jpg",
      name: "Anza Imtiaz",
      role: "Research Specialist",
      desc: "Organized professional responsible for research, content structuring, and ensuring projects align with academic goals.",
      skills: ["Research", "Project Management", "Analysis"],
    },
  ]

  const features = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites built with cutting-edge technologies for exceptional user experiences.",
      icon: "💻",
    },
    {
      title: "SEO Services",
      desc: "Professional SEO services including technical audits and on-page optimization for better visibility.",
      icon: "📈",
    },
    {
      title: "UI/UX Design",
      desc: "User-centered design approach creating intuitive interfaces across all devices.",
      icon: "🎨",
    },
    {
      title: "Content Strategy",
      desc: "Strategic content planning that engages your audience and establishes brand authority.",
      icon: "📝",
    },
  ]

  const facts = [
    { number: "3+", text: "Years of Academic Excellence", icon: "🎓" },
    { number: "100+", text: "Successful Projects Completed", icon: "✨" },
    { number: "95%", text: "Student Satisfaction Rate", icon: "💖" },
    { number: "5+", text: "Core Technologies Mastered", icon: "🛠️" },
  ]

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 md:pt-32 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 md:mb-20 text-center">
        {/* responsive fix: adjusted padding and margins for mobile */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-10 border-t-4 border-[#003366] transform transition-all duration-500 ease-in-out hover:scale-[1.01]">
          {/* responsive fix: smaller text on mobile, adjusted max-width */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003366] mb-3 md:mb-4 animate-fadeInDown">
            Innovating the Future of Tech Education
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-4 md:mb-6 animate-fadeInUp delay-200">
            We are a group of dedicated Computer Science students committed to excellence in development, design, and
            research. Our collaborative spirit drives us to turn academic knowledge into real-world digital solutions.
          </p>
          <Link
            href="/contactus"
            className="inline-block bg-[#ffcc00] text-[#003366] font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg shadow-lg hover:bg-[#ffb300] transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 md:mb-16 mt-2 md:mt-4">
        <div className="text-center mb-8 md:mb-12">
          {/* responsive fix: smaller text on mobile */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#003366] mb-3 md:mb-4 border-b-2 border-[#ffcc00] inline-block pb-1">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Dedicated students working together to create innovative digital solutions
          </p>
        </div>

        {/* responsive fix: single column on mobile, 2 columns on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-5 md:p-6 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer overflow-hidden"
            >
              {/* Profile Image with Hover Effect */}
              <div className="relative mb-5 md:mb-6">
                {/* responsive fix: smaller profile images on mobile */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-r from-[#003366] to-[#004080] p-1 group-hover:from-[#004080] group-hover:to-[#0055aa] transition-all duration-300">
                  <img
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white group-hover:border-[#ffcc00] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Content with Hover Effects */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#003366] mb-2 group-hover:text-[#004080] transition-colors duration-300">
                {member.name}
              </h3>
              <div className="text-[#004080] font-medium text-xs sm:text-sm mb-3 group-hover:text-[#0055aa] transition-colors duration-300">
                {member.role}
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mb-5 md:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {member.desc}
              </p>

              {/* Skills with Hover Effects */}
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-[#003366] text-white px-2 py-1 sm:px-3 rounded-full text-xs font-medium group-hover:bg-[#004080] group-hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Border highlight on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#ffcc00] transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Facts / Stats Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 md:mb-16 py-8 md:py-10 bg-[#003366] rounded-xl md:rounded-2xl shadow-xl">
        {/* responsive fix: 2 columns on mobile, 4 on tablet/desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-white text-center">
          {facts.map((fact, index) => (
            <div key={index} className="transition-transform duration-300 hover:scale-105">
              {/* responsive fix: smaller icons on mobile */}
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2 md:mb-3 text-[#ffcc00]">{fact.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1">{fact.number}</div>
              {/* responsive fix: smaller text on mobile */}
              <p className="text-sm sm:text-base md:text-lg font-light">{fact.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        {/* responsive fix: single column on mobile, 2 on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-l-[#003366] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#003366]">🎯</div>
            <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-3 md:mb-4">Our Mission</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To provide quality computer science education that prepares students for successful careers in technology
              through innovative teaching, research, and hands-on experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-l-[#ffcc00] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#ffcc00]">🚀</div>
            <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-3 md:mb-4">Our Vision</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To be a leading computer science department recognized for excellence in education, research, and
              innovation that addresses real-world challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
        <div className="text-center mb-8 md:mb-12">
          {/* responsive fix: smaller text on mobile */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#003366] mb-3 md:mb-4 border-b-2 border-[#ffcc00] inline-block pb-1">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Comprehensive services and learning opportunities for our students
          </p>
        </div>

        {/* responsive fix: single column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-5 md:p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-2xl md:text-3xl mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#003366] mb-2 md:mb-3 group-hover:text-[#004080] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 md:mb-20">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-10 border-t-4 border-t-[#ffcc00] hover:shadow-3xl transition-all duration-300">
          {/* responsive fix: smaller text on mobile */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#003366] mb-6 md:mb-10 text-center border-b-2 border-gray-100 pb-3 md:pb-4">
            Technologies We Use
          </h2>

          {/* responsive fix: responsive grid columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
            {[
              { name: "React.js", emoji: "⚛️" },
              { name: "JavaScript", emoji: "💻" },
              { name: "Node.js", emoji: "⚙️" },
              { name: "MongoDB", emoji: "🗄️" },
              { name: "Tailwind CSS", emoji: "🎨" },
              { name: "Express", emoji: "🚀" },
              { name: "Git", emoji: "📚" },
              { name: "Figma", emoji: "🎯" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center hover:bg-[#e0e7ff] hover:text-[#003366] hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer border border-transparent hover:border-[#003366]"
              >
                {/* responsive fix: smaller icons on mobile */}
                <div className="text-2xl sm:text-3xl mb-1">{tech.emoji}</div>
                <h4 className="font-semibold text-xs sm:text-sm text-[#003366]">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About