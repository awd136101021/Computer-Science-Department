"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState("");
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = [
    "/images/block.jpg",
    "/images/lab.jpg",
    "/images/lab1.jpg",
    "/images/lab3.jpg",
  ];

  const hodImagePath = "/images/abdul rehman.jpg";

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning!");
    else if (hour < 18) setGreeting("Good Afternoon!");
    else setGreeting("Good Evening!");
  }, []);

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

  const nextImage = () => {
    setBgIndex((prev) => (prev + 1) % bgImages.length);
  };

  const prevImage = () => {
    setBgIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#ffffff] text-[#132A46] mt-0 pt-0 font-sans">

      {/* Hero Section with Navigation Controls - responsiveness added */}
      <section
        id="hero"
        className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] flex flex-col items-center justify-center text-center text-white transition-all duration-1000 ease-in-out shadow-2xl relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,31,63,0.9), rgba(0,102,204,0.7)),url(${bgImages[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Navigation Arrows - responsiveness added */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Next image"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {bgImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setBgIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === bgIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content - responsiveness added */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight drop-shadow-lg animate-fade-in-down">
            Welcome to the Computer Science Department
          </h2>
          <p className="max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light drop-shadow-md animate-fade-in-up mx-auto px-2">
            Our mission is to provide a <strong>quality and value-laden education</strong> in computing, producing
            competent graduates equipped to transform society through innovation and integrity.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#FDCB5A] drop-shadow-xl">{greeting}</div>
        </div>
      </section>

      {/* Main Content Section - responsiveness added */}
      <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-[2000ms] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-start -mt-4 sm:-mt-6 md:-mt-8 relative z-10 max-w-7xl mx-auto">

        {/* Introduction Section - responsiveness added */}
        <div className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl lg:hover:shadow-3xl hover:-translate-y-1 lg:hover:-translate-y-2 transition duration-500 flex-1 w-full">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#004A99] mb-3 sm:mb-4">Department Overview</h2>
            <div className="w-16 sm:w-20 h-1 bg-[#FDCB5A] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Pioneering computer science education since 2005, we are committed to excellence in teaching, research, and innovation.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#004A99] mb-3 sm:mb-4 flex items-center">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FDCB5A] rounded-full mr-2 sm:mr-3"></span>
                Our Mission & Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-[#004A99]">
                To provide exceptional computer science education through innovative teaching, cutting-edge research,
                and industry collaboration, preparing students for successful careers in technology and beyond. Our vision
                is to be a nationally recognized center of excellence in computing education and research.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#004A99] mb-3 sm:mb-4 flex items-center">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#FDCB5A] rounded-full mr-2 sm:mr-3"></span>
                Academic Excellence
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 pl-4 sm:pl-6 border-l-2 sm:border-l-4 border-[#FDCB5A]">
                Our curriculum combines theoretical foundations with practical applications, ensuring graduates
                are equipped with the skills needed to excel in the rapidly evolving field of computer science.
                We offer comprehensive programs from undergraduate to doctoral levels with specialized tracks in
                emerging technologies.
              </p>
            </div>
          </div>

          {/* Enhanced Statistics Section - responsiveness added */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#004A99] mb-4 sm:mb-6 text-center">By The Numbers</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
              <div className="bg-gradient-to-br from-[#E6F0FF] to-[#F0F7FF] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#004A99] mb-1 sm:mb-2">25+</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Faculty Members</div>
                <div className="text-xs text-gray-500 mt-1">PhD Qualified</div>
              </div>
              <div className="bg-gradient-to-br from-[#E6F0FF] to-[#F0F7FF] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#004A99] mb-1 sm:mb-2">1,200+</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Students</div>
                <div className="text-xs text-gray-500 mt-1">Across Programs</div>
              </div>
              <div className="bg-gradient-to-br from-[#E6F0FF] to-[#F0F7FF] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#004A99] mb-1 sm:mb-2">18</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Research Labs</div>
                <div className="text-xs text-gray-500 mt-1">State-of-the-Art</div>
              </div>
              <div className="bg-gradient-to-br from-[#E6F0FF] to-[#F0F7FF] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#004A99] mb-1 sm:mb-2">60+</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Industry Partners</div>
                <div className="text-xs text-gray-500 mt-1">Global & Local</div>
              </div>
            </div>

            {/* Additional Metrics Row - responsiveness added */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center mt-4 sm:mt-6">
              <div className="bg-gradient-to-br from-[#FFF8E6] to-[#FFFBF0] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D97706] mb-1 sm:mb-2">95%</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Placement Rate</div>
                <div className="text-xs text-gray-500 mt-1">Within 6 Months</div>
              </div>
              <div className="bg-gradient-to-br from-[#FFF8E6] to-[#FFFBF0] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D97706] mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Research Papers</div>
                <div className="text-xs text-gray-500 mt-1">Annual Publications</div>
              </div>
              <div className="bg-gradient-to-br from-[#FFF8E6] to-[#FFFBF0] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D97706] mb-1 sm:mb-2">15M+</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Research Grants</div>
                <div className="text-xs text-gray-500 mt-1">Funding Secured</div>
              </div>
              <div className="bg-gradient-to-br from-[#FFF8E6] to-[#FFFBF0] p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D97706] mb-1 sm:mb-2">100+</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700">Projects</div>
                <div className="text-xs text-gray-500 mt-1">Industry Collaboration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Message from HOD Section - responsiveness added */}
        <div className="bg-gradient-to-br from-[#004A99] to-[#00224e] p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl lg:hover:shadow-3xl hover:-translate-y-1 lg:hover:-translate-y-2 transition duration-500 text-white flex-1 w-full max-w-md mx-auto lg:mx-0">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Leadership Message</h2>

            {/* HOD Profile - responsiveness added */}
            <div className="relative mx-auto mb-4 sm:mb-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto mb-3 sm:mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FDCB5A] to-[#FFD124] rounded-full animate-pulse"></div>
                <div className="absolute inset-1 sm:inset-2 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={hodImagePath}
                    alt="Head of Department"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.nextSibling) {
                        (target.nextSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center hidden">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl mb-1">👨‍🏫</div>
                      <div className="text-xs text-gray-600 font-medium">HOD Profile</div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#FDCB5A]">Dr. Abd Ur Rehman</h3>
              <p className="text-white/80 text-xs sm:text-sm">Head of Department</p>
              <p className="text-white/70 text-xs mt-1">Professor of Computer Science</p>
            </div>
          </div>
          <br className="hidden sm:block" /><br className="hidden sm:block" />
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm">
              <p className="text-white/95 leading-relaxed italic text-center text-sm sm:text-base">
                &quot;Welcome to the Department of Computer Science, where innovation meets excellence in education and research.&quot;
              </p>
            </div>
            <br className="hidden sm:block" />
            <div className="space-y-3 sm:space-y-4">
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                At the University of Gujrat&apos;s Computer Science Department, we are committed to providing
                a transformative educational experience that prepares students for leadership roles in
                technology and beyond.
              </p>

              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Our faculty comprises distinguished scholars and industry experts dedicated to mentoring
                the next generation of computer scientists, engineers, and innovators.
              </p>

              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Through our comprehensive programs and state-of-the-art facilities, we empower students
                to tackle complex challenges and drive technological advancement.
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
            <div className="text-center">
              <p className="text-[#FDCB5A] text-xs sm:text-sm font-semibold mb-2">Our Commitment</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs">
                <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full">Academic Excellence</span>
                <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full">Research Innovation</span>
                <span className="bg-white/20 px-2 sm:px-3 py-1 rounded-full">Student Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs - responsiveness added */}
      <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-[2000ms] mt-12 sm:mt-16 md:mt-20 lg:mt-24 bg-[#F0F4F8] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12 max-w-[1200px] mx-auto">
          <div className="flex-1 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-8 tracking-tighter text-[#004A99]">
              Academic Programs
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3 text-[#4B2483]">Undergraduate</h3>
            <ul className="list-disc pl-4 sm:pl-6 text-[#132A46] font-semibold space-y-1 sm:space-y-2 text-base sm:text-lg">
              <li className="hover:text-[#4B2483] transition">Bachelor of Science in <strong>Computer Science</strong></li>
              <li className="hover:text-[#4B2483] transition">Bachelor of Science in <strong>Software Engineering</strong></li>
              <li className="hover:text-[#4B2483] transition">Bachelor of Science in <strong>AI</strong></li>
              <li className="hover:text-[#4B2483] transition">Bachelor of Science in <strong>Cyber Security</strong></li>
              <li className="hover:text-[#4B2483] transition">Bachelor of Science in <strong>Data Science</strong></li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3 text-[#4B2483]">Graduate</h3>
            <ul className="list-disc pl-4 sm:pl-6 text-[#132A46] font-semibold space-y-1 sm:space-y-2 text-base sm:text-lg">
              <li className="hover:text-[#4B2483] transition">MS in Computer Science</li>
              <li className="hover:text-[#4B2483] transition">MS in Software Engineering</li>
              <li className="hover:text-[#4B2483] transition">MS in Artificial Intelligence</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3 text-[#4B2483]">PhD</h3>
            <ul className="list-disc pl-4 sm:pl-6 text-[#132A46] font-semibold space-y-1 sm:space-y-2 text-base sm:text-lg">
              <li className="hover:text-[#4B2483] transition">PhD in Computer Science</li>
            </ul>

            <a
              href="/programs"
              className="inline-block bg-[#004A99] text-white px-6 sm:px-8 py-3 sm:py-4 mt-6 sm:mt-8 font-extrabold rounded-full shadow-lg hover:bg-[#003366] hover:shadow-xl transition transform hover:scale-105 uppercase tracking-widest text-sm sm:text-base"
            >
              Explore All Programs
            </a>
          </div>

          {/* Image Block - responsiveness added */}
          <div className="relative flex-1 w-full max-w-full lg:max-w-[500px] h-[300px] sm:h-[350px] md:h-[400px] mt-8 lg:mt-0">
            <div className="absolute top-[-10px] sm:top-[-15px] md:top-[-20px] left-[10px] sm:left-[15px] md:left-[20px] w-full h-full bg-[#4B2483] rounded-lg sm:rounded-xl shadow-xl"></div>
            <div className="absolute top-[10px] sm:top-[15px] md:top-[20px] left-[-10px] sm:left-[-15px] md:left-[-20px] w-full h-full bg-[#FDCB5A] rounded-lg sm:rounded-xl shadow-lg"></div>
            <img
              src="/images/block.jpg"
              alt="Academic Building"
              className="rounded-lg sm:rounded-xl relative z-10 w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Info Cards - responsiveness added */}
      <div className="scroll-reveal opacity-0 translate-y-10 transition-all duration-[2000ms] flex flex-col gap-6 sm:gap-8 items-start mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-12 sm:mb-16 md:mb-20 mx-auto w-[90%] max-w-[1000px]">
        {[
          {
            title: "About Us",
            text: "The Department of Computer Science at the University of Gujrat was established in 2005 with a vision to become a center of excellence in computer science education and research. Over the years, we have grown from a small department with limited resources to a thriving academic unit with state-of-the-art facilities and a diverse faculty. Our mission is to provide quality and value-laden education in computing, producing competent graduates equipped to transform society through innovation and integrity.",
            link: "/aboutus",
          },
          {
            title: "Our Faculty",
            text: "Our department boasts a diverse team of highly qualified faculty members who are experts in their respective fields. They bring a wealth of knowledge, experience, and passion to the classroom, ensuring that our students receive the highest quality education. With over 20 faculty members, including professors, associate professors, assistant professors, and lecturers, our team is dedicated to academic excellence and cutting-edge research.",
            link: "/faculty",
          },
          {
            title: "FAQs",
            text: "Find answers to the most frequently asked questions about our programs, admissions, facilities, and more. Our comprehensive FAQ section covers topics such as admission requirements, program durations, internship opportunities, computing facilities, and career prospects. If you cannot find the information you are looking for, our team is always ready to help with any additional questions you may have.",
            link: "/faqs",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl lg:hover:shadow-2xl hover:-translate-y-1 transition duration-500 w-full"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4 text-[#004A99]">{card.title}</h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed text-[#132A46]">{card.text}</p>
            <a
              href={card.link}
              className="inline-block bg-[#FDCB5A] text-[#132A46] px-4 sm:px-6 py-2 sm:py-3 mt-2 font-bold rounded-lg shadow hover:bg-[#D97706] transition text-sm sm:text-base"
            >
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}