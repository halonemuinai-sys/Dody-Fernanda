"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";

const subjectOptions = [
  { value: "peluang-karir", label: "Peluang Karier / Rekrutmen" },
  { value: "purchasing-procurement", label: "Pengadaan & Vendor Purchasing" },
  { value: "cost-control-cogs", label: "Cost Control & Pengendalian Biaya" },
  { value: "kemitraan-vendor", label: "Kemitraan Vendor / Supplier" },
  { value: "lainnya", label: "Lainnya" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Simulate form submission delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="glass-card w-full">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
          <CheckCircle size={48} className="text-emerald-600 animate-bounce" />
          <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
          <p className="text-sm text-slate-500 max-w-xs">
            Thank you for reaching out. I&apos;ll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 font-outfit">Send Me a Message</h3>
            <p className="text-xs text-slate-500 mt-1">Fill out the form and I&apos;ll get back to you as soon as possible.</p>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-xs text-rose-600 bg-rose-50 border border-rose-100 p-3 rounded-lg">
              <AlertCircle size={16} />
              <span>Failed to send message. Please try again shortly.</span>
            </div>
          )}

          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full bg-slate-50/50 border rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                errors.name
                  ? "border-rose-500 focus:ring-rose-500"
                  : "border-slate-200 focus:border-amber-500/60 focus:ring-amber-500/60"
              }`}
            />
            {errors.name && <span className="text-2xs text-rose-600 mt-0.5">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={`w-full bg-slate-50/50 border rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                errors.email
                  ? "border-rose-500 focus:ring-rose-500"
                  : "border-slate-200 focus:border-amber-500/60 focus:ring-amber-500/60"
              }`}
            />
            {errors.email && <span className="text-2xs text-rose-600 mt-0.5">{errors.email}</span>}
          </div>

          {/* Company Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company" className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company or organization"
              className="w-full bg-slate-50/50 border border-slate-200 focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
            />
          </div>

          {/* Subject Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
              Subject
            </label>
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full appearance-none bg-slate-50/50 border border-slate-200 focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 rounded-lg pl-4 pr-10 py-2.5 text-sm text-slate-900 focus:outline-none transition-all cursor-pointer"
              >
                <option value="" disabled>How can I help you?</option>
                {subjectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me more about your project or inquiry..."
              className={`w-full bg-slate-50/50 border rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all resize-none ${
                errors.message
                  ? "border-rose-500 focus:ring-rose-500"
                  : "border-slate-200 focus:border-amber-500/60 focus:ring-amber-500/60"
              }`}
            />
            {errors.message && <span className="text-2xs text-rose-600 mt-0.5">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 w-full bg-[#023c26] hover:bg-emerald-950 text-white font-semibold py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {status === "sending" ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
