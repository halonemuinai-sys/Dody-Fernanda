"use client";

import { motion } from "framer-motion";
import { Award, Mail, Phone, MapPin, GraduationCap, Languages, type LucideIcon } from "lucide-react";

const profile: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Phone, label: "Phone / WhatsApp", value: "+62 896 2275 3358" },
  { icon: Mail, label: "Email Address", value: "Fernandadody@gmail.com" },
  { icon: MapPin, label: "Domicile", value: "Ciledug, Tangerang, Indonesia" },
];

const education = [
  {
    degree: "Master of Human Resource Management (S2)",
    school: "Pamulang University (Universitas Pamulang)",
    year: "2024 – 2026",
    desc: "Fokus pada kepemimpinan strategis, negosiasi interpersonal, motivasi kerja, dan manajemen performa organisasi.",
  },
  {
    degree: "Bachelor of Human Resource Management (S1)",
    school: "Pamulang University (Universitas Pamulang)",
    year: "2017 – 2022",
    desc: "Dasar keilmuan manajemen sumber daya manusia, komunikasi bisnis, struktur organisasi, dan etika kerja profesional.",
  },
];

const competencies = [
  { name: "Vendor Sourcing & Evaluation", issuer: "Strategic Procurement" },
  { name: "Commercial & Contract Negotiation", issuer: "Cost Optimization" },
  { name: "COGS & Cost Variance Governance", issuer: "Financial Analysis" },
  { name: "Stock Opname & FIFO Compliance", issuer: "Warehouse Control" },
  { name: "Multi-Branch Fulfillment Coordination", issuer: "Logistics Operations" },
  { name: "Supplier Performance & SLA Management", issuer: "Vendor Governance" },
  { name: "Market Analysis & Target Planning", issuer: "Operational Strategy" },
  { name: "Advanced Spreadsheet Modeling (Excel)", issuer: "Data & Reporting" },
];

export default function Certifications() {
  return (
    <section id="about" className="section-container border-t border-slate-200 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <h2 className="section-title font-outfit">Profile, Education & Core Competencies</h2>
        <p className="section-subtitle">Data kontak, latar belakang pendidikan formal, dan keahlian spesialisasi profesional.</p>
      </div>

      {/* Profile quick cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {profile.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card flex gap-4 items-center !p-4"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-5xs text-slate-500 font-semibold tracking-wider uppercase">{item.label}</p>
                <h4 className="text-xs font-bold text-slate-800 leading-snug mt-0.5">{item.value}</h4>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Education + Competencies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xs font-bold text-slate-400 uppercase tracking-widest">Formal Education</h3>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <Languages size={14} />
              <span>Indonesian (Native) · English (Working)</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card flex flex-col gap-2 !p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-700 border border-blue-500/20 shrink-0 mt-0.5">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{edu.degree}</h4>
                    <p className="text-xs font-bold text-emerald-700 mt-0.5">
                      {edu.school} · <span className="text-slate-500">{edu.year}</span>
                    </p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-10 mt-1">
                  {edu.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Competencies */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xs font-bold text-slate-400 uppercase tracking-widest">Key Operational Competencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {competencies.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass-card flex gap-4 items-center !p-4"
              >
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-700 border border-amber-500/20 shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-snug">{comp.name}</h4>
                  <p className="text-5xs text-slate-500 font-semibold tracking-wider uppercase mt-1">{comp.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
