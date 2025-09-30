"use client";
import GlowStarButton from "@/components/GlowStarButton/index";
import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSuccess(result.message);
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 relative w-full [perspective:1000px]">
      <div className={`relative w-full min-h-[520px] h-full transition-transform duration-700 [transform-style:preserve-3d] ${submitted ? "[transform:rotateY(180deg)]" : ""}`}>
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="bg-white/25 rounded-xl shadow-lg p-6 md:p-8 text-gray-800 h-full">
            {error && (
              <div className="mb-4 p-3 bg-red-100/90 border border-red-300 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            
            {success && !submitted && (
              <div className="mb-4 p-3 bg-green-100/90 border border-green-300 text-green-700 rounded-md text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-left block text-sm font-regular text-white">
                    First Name<span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-4 focus:ring-white/30"
                  />
                </div>
                <div>
                  <label className="text-left block text-sm font-regular text-white">
                    Last Name<span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-4 focus:ring-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="text-left block text-sm font-regular text-white">
                  Email<span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-4 focus:ring-white/30"
                />
              </div>

              <div>
                <label className="text-left block text-sm font-regular text-white">
                  Subject<span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-4 focus:ring-white/30"
                />
              </div>

              <div>
                <label className="text-left block text-sm font-regular text-white">
                  Message<span className="text-gold">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-4 focus:ring-white/30"
                />
              </div>

              <div className="flex items-center text-left block text-sm font-regular text-white">
                <span className="mr-2 w-4 h-4 rounded-sm bg-white text-primary-way-100 text-xs font-extrabold text-center">
                  i
                </span>
                By submitting this email you agree to our{" "}
                <a href="/terms" className="ml-1 text-white underline hover:text-primary-way-100">
                  Terms
                </a>
              </div>

              <GlowStarButton
                className={`w-full shadow-glow hover:bg-secondary-db-90 py-3 rounded-md transition flex items-center justify-center gap-2 cursor-pointer font-medium ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                title={isSubmitting ? "Sending..." : "Start Instantly!"}
                type="submit"
                disabled={isSubmitting}
                rerollOnHover={!isSubmitting}
                randomizeOnMount
              >
                <span className="flex items-center justify-center gap-x-2 w-full">
                  {isSubmitting ? "Sending..." : "Start Instantly!"}
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Image
                      src="/icons/rocket.svg"
                      alt="Rocket"
                      width={36}
                      height={36}
                      className="ml-1 bg-white p-1 rounded-lg inline-block"
                    />
                  )}
                </span>
              </GlowStarButton>
            </form>
          </div>
        </div>

        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="bg-white/25 rounded-xl shadow-lg p-6 md:p-8 h-full flex flex-col items-center justify-center text-center">
            <Image
              src="/icons/success.svg"
              alt="Thank You Star"
              width={64}
              height={64}
              className="mb-4"
            />
            <h2 className="text-xl font-medium text-white mb-2">
              Thank you for reaching out to Waysorted!
            </h2>
            <p className="text-white text-sm font-medium max-w-md mb-6">
              We received your message and our team will get back to you within 24-48 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setSuccess(null);
                setError(null);
              }}
              className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors duration-200 text-sm font-medium"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
