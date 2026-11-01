"use client";

import { Mail, Phone, MapPin, Send, Star, ShieldCheck, TrendingDown, Quote, Building2 } from "lucide-react";

const stats = [
  { icon: Star, value: "12+", label: "Years Experience" },
  { icon: Building2, value: "6", label: "Companies Served" },
  { icon: TrendingDown, value: "COGS", label: "Cost Optimization" },
];

export default function HeroSection() {
  return (
    <section id="home" className="section-container pt-32 md:pt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-500/20 text-xs font-bold text-emerald-700 tracking-wider uppercase font-outfit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Senior Purchasing & Procurement Professional
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Dody <span className="text-emerald-700">Fernanda</span>
          </h1>

          <h2 className="text-lg md:text-xl text-slate-800 font-semibold leading-normal">
            Strategic Sourcing, Commercial Negotiation & Cost Control across <span className="text-emerald-700">Multi-Industry Operations</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Purchasing and procurement professional with 12+ years of experience across vendor sourcing, commercial negotiation, cost control, stock/inventory management, and operational leadership across security services, food & beverage, and consumer-related businesses.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#023c26] text-white hover:bg-emerald-950 transition-all shadow-md cursor-pointer no-print"
            >
              <Send size={16} />
              Hubungi Saya
            </a>

            <div className="hidden sm:block w-px self-stretch bg-slate-200" />

            {/* Quick Contact Links */}
            <div className="flex flex-col gap-2.5 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-emerald-700" />
                <a href="mailto:Fernandadody@gmail.com" className="text-slate-700 hover:text-slate-900 transition-colors">Fernandadody@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-emerald-700" />
                <a href="https://wa.me/6289622753358" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 transition-colors">+62 896 2275 3358</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-emerald-700" />
                <span className="text-slate-700">Ciledug, Tangerang, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Photo Column & Stats Column */}
        <div className="lg:col-span-5 flex items-start justify-between gap-6">

          {/* Photo + Quote Column */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto lg:mx-0 flex items-center justify-center">
              {/* Dot grid pattern */}
              <svg className="absolute -top-6 -left-6 w-24 h-24 -z-10 opacity-40" viewBox="0 0 100 100">
                {Array.from({ length: 5 }).map((_, row) =>
                  Array.from({ length: 5 }).map((_, col) => (
                    <circle key={`${row}-${col}`} cx={col * 20 + 10} cy={row * 20 + 10} r="2.5" fill="#94a3b8" />
                  ))
                )}
              </svg>

              {/* Green Backdrop Circle */}
              <div className="absolute inset-2 rounded-full bg-emerald-500/10 border border-emerald-500/10 -z-10" />
              <div className="absolute inset-10 rounded-full bg-emerald-500/5 -z-10" />

              {/* Decorative arc + dots */}
              <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] -z-10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="#10b981" strokeWidth="0.6" strokeDasharray="42 260" strokeDashoffset="-6" opacity="0.55" />
                <circle cx="90" cy="26" r="1.8" fill="#10b981" />
                <circle cx="6" cy="70" r="1.8" fill="#023c26" />
              </svg>

              {/* Crop Profile Image */}
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-emerald-500/10 shadow-lg relative bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpg"
                  alt="Dody Fernanda"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Quote card */}
            <div className="glass-card !p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0">
                <Quote size={16} />
              </div>
              <p className="text-4xs text-slate-700 leading-relaxed flex-1">
                Effective procurement is not just about cutting costs — it is about creating long-term value, dependable partnerships, and operational resilience.
              </p>
              <div className="hidden sm:block text-right shrink-0">
                <span className="text-4xs font-bold text-emerald-700 block leading-snug">— Dody Fernanda</span>
                <span className="text-5xs text-slate-500">Purchasing & Cost Control</span>
              </div>
            </div>
          </div>

          {/* Quick Hero metrics cards */}
          <div className="hidden sm:flex flex-col gap-4 z-10 relative">
            <div className="absolute -left-3.5 top-4 bottom-4 w-px bg-slate-200" />
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="relative">
                  <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <div className="glass-card flex flex-col items-start gap-2 !p-4 !rounded-xl min-w-[160px]">
                    <div className="p-2.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-500/20">
                      <Icon size={16} />
                    </div>
                    <span className="text-2xl font-extrabold text-slate-900 font-outfit leading-none">{stat.value}</span>
                    <span className="text-4xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
