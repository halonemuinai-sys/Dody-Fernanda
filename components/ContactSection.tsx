"use client";

import {
  Mail,
  Phone,
  MapPin,
  HeartHandshake,
  Lightbulb,
  TrendingUp,
  FileText,
  ExternalLink,
  Quote,
  Calendar,
  CheckCircle2,
  Video,
  Building2,
  Coffee,
  MessageCircle,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const traits = [
  { icon: HeartHandshake, title: "Strategic Partner", desc: "Membangun kemitraan vendor yang andal dan berkelanjutan." },
  { icon: Lightbulb, title: "Cost Efficiency", desc: "Mengoptimalkan pengeluaran melalui negosiasi komersial presisi." },
  { icon: TrendingUp, title: "Value Driven", desc: "Berfokus pada ketersediaan material tepat waktu dan margin bisnis." },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-container border-t border-slate-200 scroll-mt-24">

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 flex flex-col gap-4">
          <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase font-outfit">Get in Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-outfit leading-tight">
            Mari Berdiskusi & Bangun Solusi <span className="text-emerald-700">Bersama</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
            Saya selalu terbuka untuk mendiskusikan peluang karier baru, optimasi pengadaan rantai pasok, pengendalian biaya, dan kolaborasi profesional.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
            {traits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col gap-2">
                  <div className="p-2.5 w-fit rounded-full bg-emerald-50 text-emerald-700 border border-emerald-500/20">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-4xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
            <div className="absolute inset-2 rounded-full bg-emerald-500/10 border border-emerald-500/10 -z-10" />
            <div className="absolute inset-10 rounded-full bg-emerald-500/5 -z-10" />
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-500/10 shadow-lg relative bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Dody Fernanda"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form + Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Contact details */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="glass-card flex flex-col gap-5">
            <div>
              <h3 className="text-lg font-bold text-slate-800 font-outfit">Contact Information</h3>
              <p className="text-4xs text-slate-500 mt-1">Silakan hubungi saya melalui salah satu kanal berikut.</p>
            </div>

            <div className="flex items-start gap-4 text-sm pt-4 border-t border-slate-100">
              <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-5xs font-bold text-slate-500 uppercase tracking-widest">Email</p>
                <a href="mailto:Fernandadody@gmail.com" className="text-sm text-slate-800 hover:text-emerald-700 transition-colors font-semibold block">
                  Fernandadody@gmail.com
                </a>
                <p className="text-4xs text-slate-400 mt-0.5">Respon cepat dalam 24 jam</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-sm pt-4 border-t border-slate-100">
              <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-5xs font-bold text-slate-500 uppercase tracking-widest">Phone / WhatsApp</p>
                <a href="https://wa.me/6289622753358" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-800 hover:text-emerald-700 font-semibold block">
                  +62 896 2275 3358
                </a>
                <p className="text-4xs text-slate-400 mt-0.5">Senin – Jumat, 09.00 – 18.00 WIB</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-sm pt-4 border-t border-slate-100">
              <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-5xs font-bold text-slate-500 uppercase tracking-widest">Location</p>
                <span className="text-sm text-slate-800 font-semibold block leading-tight">
                  Ciledug, Tangerang, Indonesia
                </span>
                <p className="text-4xs text-slate-400 mt-0.5">Terbuka untuk onsite & online meeting</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-sm pt-4 border-t border-slate-100">
              <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-700 flex items-center justify-center text-white">
                <FileText size={16} />
              </div>
              <div>
                <p className="text-5xs font-bold text-slate-500 uppercase tracking-widest">Resume (PDF)</p>
                <a
                  href="/CV-Dody-Fernanda.pdf"
                  download="CV DODY FERNANDA 2026.pdf"
                  className="text-sm text-emerald-700 hover:text-emerald-900 transition-colors font-semibold inline-flex items-center gap-1 cursor-pointer no-print"
                >
                  Download CV Dody Fernanda
                  <ExternalLink size={12} />
                </a>
                <p className="text-4xs text-slate-400 mt-0.5">Unduh ringkasan dokumen resmi</p>
              </div>
            </div>
          </div>

          <div className="glass-card !bg-emerald-50/60 !border-emerald-500/20 flex flex-col gap-3">
            <Quote size={22} className="text-emerald-600" />
            <p className="text-sm text-slate-700 leading-relaxed italic">
              Effective procurement is not just about cutting costs — it is about creating long-term value, dependable partnerships, and operational resilience.
            </p>
            <span className="text-xs font-bold text-slate-800">— Dody Fernanda</span>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="glass-card flex flex-col md:flex-row gap-8 !p-8">
        <div className="md:w-64 shrink-0 flex flex-col gap-3">
          <div className="w-11 h-11 rounded-full bg-emerald-700 text-white flex items-center justify-center">
            <Calendar size={18} />
          </div>
          <h3 className="text-base font-bold text-slate-900 font-outfit">Availability</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Terbuka untuk peluang karier dan tantangan profesional baru di bidang purchasing, procurement, dan cost control.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest">Bidang Keahlian</span>
            <ul className="flex flex-col gap-2">
              {["Purchasing & Procurement", "Cost Control & COGS", "Vendor Management & SLA", "Warehouse & Inventory Control"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest">Tipe Posisi</span>
            <ul className="flex flex-col gap-2">
              {["Full-time / Permanent", "Senior Purchasing Specialist", "Procurement Supervisor", "Cost Controller Lead"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest">Preferensi Diskusi</span>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Video size={14} className="text-emerald-600 shrink-0" />
                Online Interview (Google Meet / Zoom)
              </li>
              <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Building2 size={14} className="text-emerald-600 shrink-0" />
                Onsite Interview & Meeting
              </li>
              <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Coffee size={14} className="text-emerald-600 shrink-0" />
                Professional Coffee Chat
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Let's Connect */}
      <div className="flex flex-col gap-6 items-center text-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-slate-900 font-outfit">Mari Terhubung</h3>
          <p className="text-sm text-slate-500">Terhubung melalui platform profesional dan pesan langsung.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          <a
            href="https://www.linkedin.com/in/dody-fernanda-542202160/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-3 !p-4 no-print hover:border-emerald-500/40 transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-sm">
              in
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">LinkedIn</p>
              <p className="text-4xs text-slate-500">/in/dody-fernanda</p>
            </div>
          </a>

          <a
            href="mailto:Fernandadody@gmail.com"
            className="glass-card flex items-center gap-3 !p-4 no-print hover:border-emerald-500/40 transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-700 text-white flex items-center justify-center">
              <Mail size={18} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">Email</p>
              <p className="text-4xs text-slate-500">Fernandadody@gmail.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/6289622753358"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-3 !p-4 no-print hover:border-emerald-500/40 transition-colors"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
              <MessageCircle size={18} />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-800">WhatsApp</p>
              <p className="text-4xs text-slate-500">+62 896 2275 3358</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
