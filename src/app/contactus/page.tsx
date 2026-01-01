"use client";

import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

// Define TypeScript interfaces
interface FormData {
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  query_type: string;
  subject: string;
  message: string;
}

interface QueryData {
  id: string;
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  query_type: string;
  subject: string;
  message: string;
  timestamp: string;
  status: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    query_type: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // EmailJS configuration - Updated with your credentials
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_i1o68qt',
    TEMPLATE_ID: 'template_8kic4hk',
    USER_ID: 'adklsEDnZdG8bgIyc',
    ADMIN_EMAIL: 'awd136101021@gmail.com'
  };

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.USER_ID);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmailNotification = async (queryData: QueryData) => {
    try {
      console.log('Sending email with data:', queryData);
      
      const templateParams = {
        to_email: EMAILJS_CONFIG.ADMIN_EMAIL,
        from_name: `${queryData.first_name} ${queryData.last_name}`,
        from_email: queryData.email,
        mobile: queryData.mobile,
        query_type: queryData.query_type,
        subject: queryData.subject,
        message: queryData.message,
        query_id: queryData.id,
        timestamp: new Date().toLocaleString(),
        reply_instructions: `Reply to this email and include the Query ID: ${queryData.id} in your response.`
      };

      console.log('Template params:', templateParams);

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);
      return true;
    } catch (error: any) {
      console.error('Failed to send email:', error);
      console.error('Error details:', {
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: EMAILJS_CONFIG.TEMPLATE_ID,
        userId: EMAILJS_CONFIG.USER_ID,
        errorText: error.text
      });
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Create query object
    const newQuery: QueryData = {
      id: `QUERY_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...formData,
      timestamp: new Date().toISOString(),
      status: "pending"
    };

    try {
      console.log('Starting form submission...');
      
      // Send email notification to admin
      const emailSent = await sendEmailNotification(newQuery);
      
      // Get existing queries from localStorage
      const existingQueries = JSON.parse(localStorage.getItem("userQueries") || "[]");
      
      // Add new query
      const updatedQueries = [...existingQueries, newQuery];
      
      // Save back to localStorage
      localStorage.setItem("userQueries", JSON.stringify(updatedQueries));

      // Show success message
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        query_type: "",
        subject: "",
        message: ""
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting query:', error);
      alert('Error submitting query. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gray-100 py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-20 min-h-screen">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-[#004A99] mt-4 sm:mt-6 md:mt-8 lg:mt-16">
            Contact Us
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Have questions? We're here to help! Submit your query and we'll respond to your email.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-2 sm:px-4">
          {submitSuccess && (
            <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start sm:items-center">
                <div className="flex-shrink-0 mt-0.5 sm:mt-0">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-2 sm:ml-3">
                  <h3 className="text-xs sm:text-sm font-medium text-green-800">
                    Query Submitted Successfully!
                  </h3>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-green-700">
                    <p>
                      Thank you for contacting us. We've received your query and will respond to your email soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-5 md:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-5 md:mb-6 text-[#003366]">
              Send Us Your Query
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Your First Name*"
                  required
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition duration-300"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Your Last Name*"
                  required
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition duration-300"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Your Mobile* (e.g., 03xxxxxxxxx)"
                  required
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition duration-300"
                />
              </div>

              <div>
                <select
                  name="query_type"
                  required
                  value={formData.query_type}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition duration-300"
                >
                  <option value="">Query Related To*</option>
                  <option value="course">Course</option>
                  <option value="registration">Registration</option>
                  <option value="technical">Technical Support</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject / Reference*"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Enter your message details here*"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004A99] focus:border-transparent transition duration-300"
                ></textarea>
              </div>

              <div className="text-center pt-2 sm:pt-3 md:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#003366] hover:bg-[#00509e] text-white px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 min-w-[120px] sm:min-w-[140px] md:min-w-[150px] text-sm sm:text-base ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Submit Query'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}