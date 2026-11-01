"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import {
  Briefcase,
  TrendingDown,
  User,
  Building2,
  CheckCircle2,
  Star,
  SearchCheck,
  DollarSign,
  Calculator,
  Boxes,
  FileSpreadsheet,
  Users,
  ShieldCheck,
  Tag,
  Layers,
  type LucideIcon,
} from "lucide-react";

interface TechItem {
  label: string;
  icon: LucideIcon;
}

type StatAccent = "emerald" | "amber" | "blue" | "violet" | "rose" | "cyan";

const statAccent: Record<StatAccent, { icon: string; iconBg: string; border: string; glow: string; line: string; value: string }> = {
  emerald: { icon: "text-emerald-600", iconBg: "bg-emerald-50", border: "border-emerald-500/20", glow: "16, 185, 129", line: "bg-emerald-500", value: "text-emerald-700" },
  amber: { icon: "text-amber-600", iconBg: "bg-amber-50", border: "border-amber-500/20", glow: "245, 158, 11", line: "bg-amber-500", value: "text-amber-700" },
  blue: { icon: "text-blue-600", iconBg: "bg-blue-50", border: "border-blue-500/20", glow: "59, 130, 246", line: "bg-blue-500", value: "text-blue-700" },
  violet: { icon: "text-violet-600", iconBg: "bg-violet-50", border: "border-violet-500/20", glow: "167, 139, 250", line: "bg-violet-500", value: "text-violet-700" },
  rose: { icon: "text-rose-600", iconBg: "bg-rose-50", border: "border-rose-500/20", glow: "244, 63, 94", line: "bg-rose-500", value: "text-rose-700" },
  cyan: { icon: "text-cyan-600", iconBg: "bg-cyan-50", border: "border-cyan-500/20", glow: "34, 211, 238", line: "bg-cyan-500", value: "text-cyan-700" },
};

const stats: { icon: LucideIcon; value: string; label: string; accent: StatAccent }[] = [
  { icon: Briefcase, value: "12+", label: "Years Experience", accent: "emerald" },
  { icon: Building2, value: "6", label: "Companies Served", accent: "amber" },
  { icon: TrendingDown, value: "COGS", label: "Cost Optimization", accent: "blue" },
  { icon: SearchCheck, value: "100%", label: "Vendor Evaluation Track", accent: "violet" },
  { icon: Boxes, value: "FIFO", label: "Stock & Warehouse Control", accent: "rose" },
  { icon: Users, value: "S2", label: "Human Resource Mgmt", accent: "cyan" },
];

const timeline: { id: string; company: string; role: string; period: string; icon: LucideIcon; current: boolean }[] = [
  { id: "alsok", company: "ALSOK INDONESIA", role: "Senior Purchasing & Buyer", period: "Jun 2023 – Present", icon: Briefcase, current: true },
  { id: "a3000", company: "A3000 GROUP", role: "Senior Purchasing & Cost Controller", period: "Dec 2021 – May 2023", icon: Calculator, current: false },
  { id: "charoen", company: "PT CHAROEN POKPHAND INDONESIA TBK", role: "Supervisor", period: "Jun 2021 – Nov 2021", icon: Users, current: false },
  { id: "victoria", company: "PT VICTORIA CARE INDONESIA TBK", role: "Supervisor Assistant", period: "Dec 2020 – May 2021", icon: User, current: false },
  { id: "cgv", company: "CGV CINEMAS", role: "Leader Operational & Store", period: "Aug 2014 – Mar 2020", icon: Building2, current: false },
  { id: "kfc", company: "PT FAST FOOD INDONESIA TBK (KFC)", role: "Stock Controller", period: "Aug 2012 – Jul 2014", icon: Boxes, current: false },
];

const alsokFocusAreas = [
  "Vendor Sourcing & Selection",
  "Commercial Negotiations",
  "Branch Requirement Coordination",
  "Supplier Relationship Mgmt (SRM)",
  "Pricing & Terms Evaluation",
  "Budget & Cost Alignment",
];

const alsokAchievements = [
  "Melakukan vendor sourcing, seleksi mitra rekanan strategis, dan negosiasi komersial untuk mendukung keputusan pembelian yang efisien dan kompetitif",
  "Mengkoordinasikan kebutuhan pengadaan secara terintegrasi dengan tim internal dan cabang-cabang ALSOK di Indonesia guna memastikan ketepatan waktu ketersediaan barang dan jasa operasional keamanan dan fasilitas",
  "Membangun dan memelihara hubungan kemitraan jangka panjang dengan vendor serta mendukung manajemen kinerja pemasok (supplier performance & SLA management)",
  "Mengevaluasi struktur harga penawaran, ketersediaan produk, dan syarat-syarat komersial sesuai kebutuhan operasional dan target anggaran perusahaan",
  "Memastikan kelancaran pasokan seragam, perlengkapan pengamanan, dan aset kantor di berbagai cabang dengan meminimalkan lead time pengadaan",
];

const alsokTech: TechItem[] = [
  { label: "Vendor Sourcing", icon: SearchCheck },
  { label: "Negotiation", icon: DollarSign },
  { label: "Contract Terms", icon: ShieldCheck },
  { label: "Branch Requisition", icon: Building2 },
  { label: "MS Excel", icon: FileSpreadsheet },
];

const a3000Achievements = [
  "Memimpin aktivitas pengadaan terpadu mencakup negosiasi harga dan evaluasi penawaran vendor untuk lini bisnis F&B dan lifestyle",
  "Menyusun dan menyampaikan rekomendasi harga beli yang dinegosiasikan serta justifikasi pengadaan strategis kepada jajaran manajemen",
  "Membangun dan menyempurnakan proses pergudangan serta kontrol stok guna meningkatkan efisiensi operasional dan menekan kebocoran/penyusutan",
  "Memantau ketersediaan produk bahan baku kritis secara berkelanjutan dan mengendalikan biaya pengadaan, termasuk perhitungan Harga Pokok Penjualan (COGS) yang akurat",
  "Mengoptimalkan margin kotor menu makanan dan minuman melalui pemantauan varians biaya bahan baku dan penetapan safety stock yang disiplin",
];

const a3000Tech: TechItem[] = [
  { label: "COGS Calculation", icon: Calculator },
  { label: "Cost Variance", icon: TrendingDown },
  { label: "Warehouse Control", icon: Boxes },
  { label: "F&B Procurement", icon: DollarSign },
  { label: "Pricing Strategy", icon: Tag },
];

const earlierRoles: {
  id: string;
  title: string;
  company: string;
  period: string;
  description?: string;
  achievements: ReactNode[];
  techStack: TechItem[];
  logo?: string;
}[] = [
  {
    id: "charoen",
    logo: "/logos/cp-indonesia.svg",
    title: "Supervisor",
    company: "PT CHAROEN POKPHAND INDONESIA TBK",
    period: "Jun 2021 – Nov 2021",
    achievements: [
      "Menganalisis kondisi pasar komoditas dan menerjemahkan sasaran bisnis korporat menjadi rencana aksi taktis di tingkat area operasional",
      "Menyusun rincian target kerja (target breakdown) dan rencana eksekusi terstruktur untuk mendukung pencapaian target volume area",
      "Memantau performa operasional lapangan secara berkala dan mengkoordinasikan kegiatan distribusi di seluruh area yang menjadi tanggung jawab",
      "Memastikan kepatuhan standar penanganan produk dan koordinasi cepat terhadap kendala pasokan di lapangan",
    ],
    techStack: [
      { label: "Market Analysis", icon: SearchCheck },
      { label: "Target Breakdown", icon: Tag },
      { label: "Area Supervision", icon: Users },
      { label: "Operational Planning", icon: CheckCircle2 },
    ],
  },
  {
    id: "victoria",
    logo: "/logos/victoria-care.svg",
    title: "Supervisor Assistant",
    company: "PT VICTORIA CARE INDONESIA TBK",
    period: "Dec 2020 – May 2021",
    achievements: [
      "Menyiapkan laporan operasional mingguan dan bulanan secara komprehensif untuk evaluasi performa manajemen",
      "Mengatur agenda kerja dan jadwal penugasan staf (staff rostering) untuk mengoptimalkan produktivitas tenaga kerja harian",
      "Mendukung pelatihan staf baru, peningkatan motivasi kerja, dan pelaksanaan aktivitas supervisi operasional sehari-hari",
      "Menjaga akurasi data administrasi operasional dan koordinasi antar fungsi tim lapangan",
    ],
    techStack: [
      { label: "Operational Reporting", icon: FileSpreadsheet },
      { label: "Staff Scheduling", icon: Users },
      { label: "Training & Motivation", icon: User },
      { label: "Supervisory", icon: CheckCircle2 },
    ],
  },
  {
    id: "cgv",
    logo: "/logos/cgv-cinemas.svg",
    title: "Leader Operational & Store",
    company: "CGV CINEMAS (PT Graha Layar Prima Tbk)",
    period: "Aug 2014 – Mar 2020",
    description: "Memimpin tim operasional dan store bioskop selama hampir 6 tahun dengan standar mutu pelayanan prima.",
    achievements: [
      "Memimpin tim operasional dan store bioskop untuk memastikan konsistensi standar layanan pelanggan, kebersihan, dan keselamatan kerja harian",
      "Mengelola breakdown target penjualan konsesi makanan & minuman bioskop dan mengkoordinasikan eksekusi harian bersama tim frontline",
      "Mengawasi penerimaan stok, audit berkala inventaris konsesi ritel, dan meminimalkan angka penyusutan barang (shrinkage)",
      "Melatih, membimbing, dan mengembangkan puluhan staf operasional agar memiliki disiplin kerja dan performa tinggi",
    ],
    techStack: [
      { label: "Store Leadership", icon: Building2 },
      { label: "Concession Inventory", icon: Boxes },
      { label: "Service Standards", icon: CheckCircle2 },
      { label: "Team Coordination", icon: Users },
    ],
  },
  {
    id: "kfc",
    logo: "/logos/kfc.svg",
    title: "Stock Controller",
    company: "PT FAST FOOD INDONESIA TBK (KFC)",
    period: "Aug 2012 – Jul 2014",
    achievements: [
      "Melakukan penghitungan stok fisik bulanan (cycle count) dan monitoring pergerakan persediaan bahan baku restoran",
      "Mengkoordinasikan distribusi barang dan menjamin ketersediaan pasokan tanpa putus bagi staf dapur dan operasional",
      "Menerapkan sistem First-In First-Out (FIFO) secara disiplin untuk menjaga kesegaran bahan dan meminimalisir pemborosan",
      "Menyusun dokumentasi mutasi persediaan yang rapi dan siap menghadapi audit internal berkala",
    ],
    techStack: [
      { label: "Stock Reconciliation", icon: FileSpreadsheet },
      { label: "FIFO Control", icon: CheckCircle2 },
      { label: "Inventory Distribution", icon: Boxes },
      { label: "Raw Material Logistics", icon: Building2 },
    ],
  },
];

function TechBadge({ item }: { item: TechItem }) {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
      <div className="p-1 rounded bg-slate-100 text-slate-600">
        <Icon size={14} />
      </div>
      <span>{item.label}</span>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <div className="flex flex-col gap-12">
      {/* Top title & summary card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col gap-3"
        >
          <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase font-outfit">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-outfit leading-tight">
            Professional <span className="text-emerald-700">Experience</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
            12+ tahun pengalaman dalam pengadaan barang dan jasa, negosiasi vendor komersial, pengendalian COGS, dan manajemen operasional di berbagai sektor industri.
          </p>
          <span className="h-1 w-10 rounded-full bg-emerald-500 mt-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="relative h-40 md:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#022c1e] via-emerald-900 to-emerald-700 flex flex-col justify-between px-6 py-5">
            {/* Decorative arcs */}
            <svg className="absolute -right-10 -top-10 w-48 h-48 opacity-25" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#6ee7b7" strokeWidth="0.6" />
              <circle cx="50" cy="50" r="36" fill="none" stroke="#6ee7b7" strokeWidth="0.5" opacity="0.6" />
            </svg>

            <div className="absolute top-4 right-4 w-8 h-8 rounded-lg border border-amber-400/40 bg-white/5 flex items-center justify-center z-10">
              <Star size={14} className="text-amber-400" />
            </div>

            <div className="relative z-10 flex items-center gap-4">
              <div className="w-16 h-16 shrink-0 rounded-full border border-emerald-300/30 bg-white/5 flex items-center justify-center">
                <Briefcase size={26} className="text-emerald-200" />
              </div>
              <div className="flex flex-col">
                <span className="text-emerald-300 font-outfit font-extrabold text-4xl leading-none">12+</span>
                <span className="text-white font-outfit font-bold text-lg mt-1">Years of Leadership</span>
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <span className="h-px w-full bg-white/15" />
              <span className="text-emerald-200 text-4xs uppercase tracking-widest font-bold">
                Security Services · F&B & Lifestyle · Agribusiness · FMCG · Cinema Retail
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const style = statAccent[stat.accent];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 40px -12px rgba(${style.glow}, 0.35)`,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="glass-card flex flex-col items-center gap-2 text-center !p-5"
            >
              <motion.div
                initial={{ scale: 0, rotate: -120 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.08 + 0.15, type: "spring", stiffness: 260, damping: 14 }}
                whileHover={{ scale: 1.15, rotate: 8, transition: { duration: 0.2 } }}
                className={`p-2.5 rounded-full border ${style.iconBg} ${style.icon} ${style.border}`}
              >
                <Icon size={18} />
              </motion.div>
              <span className={`h-0.5 w-5 rounded-full ${style.line}`} />
              <span className={`text-2xl font-extrabold font-outfit ${style.value}`}>
                <CountUp value={stat.value} />
              </span>
              <span className="text-4xs text-slate-500 font-bold uppercase tracking-wide leading-snug">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline + Featured role cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Timeline rail */}
        <div className="lg:col-span-3 relative">
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-slate-200 no-print" />
          <div className="flex flex-col gap-8">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative flex items-start gap-4">
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      item.current ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="flex flex-col pt-1.5">
                    <span className="text-sm font-bold text-slate-900 leading-snug">{item.company}</span>
                    <span className="text-xs font-semibold text-slate-500">{item.role}</span>
                    <span
                      className={`text-4xs font-bold uppercase tracking-wide mt-1.5 px-2 py-0.5 rounded-full w-fit ${
                        item.current ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured role cards */}
        <div className="lg:col-span-9 flex flex-col gap-6">
          {/* Card 1 — ALSOK INDONESIA (current, highlighted) */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-36 shrink-0 bg-emerald-700 text-white flex md:flex-col items-center justify-center gap-2 p-6 text-center">
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <span className="text-4xs font-bold uppercase tracking-wide">Current Role</span>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-emerald-100">
              <div>
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/alsok.svg" alt="ALSOK" className="h-6 w-auto object-contain" />
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">ALSOK INDONESIA</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-outfit uppercase tracking-tight mt-2">
                  Senior Purchasing & Buyer
                </h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-0.5">
                  PT ALSOK INDONESIA — Security Services & Facility Solutions
                </p>
                <span className="inline-block mt-2 text-4xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  Jun 2023 – Present
                </span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {alsokAchievements.map((a) => (
                  <li
                    key={a}
                    className="text-xs text-slate-600 relative pl-4 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-500"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 pt-3 border-t border-emerald-100/80">
                <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest">Key Competencies</span>
                <div className="flex flex-wrap gap-2">
                  {alsokTech.map((t) => (
                    <TechBadge key={t.label} item={t} />
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-64 shrink-0 p-6 flex flex-col gap-3">
              <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest">Focus Areas</span>
              <ul className="flex flex-col gap-2">
                {alsokFocusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
              <span className="mt-2 text-4xs font-bold text-emerald-700 bg-white border border-emerald-200 px-2.5 py-1 rounded-full w-fit">
                Nationwide Branch Scope
              </span>
            </div>
          </div>

          {/* Card 2 — A3000 GROUP */}
          <div className="glass-card !p-0 flex flex-col md:flex-row overflow-hidden">
            <div className="flex-1 p-6 flex flex-col gap-4 md:border-r border-slate-100">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-700 text-white shrink-0">
                  <Calculator size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logos/a3000.svg" alt="A3000 Group" className="h-6 w-auto object-contain" />
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">A3000 GROUP</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-outfit uppercase tracking-tight mt-2">
                    Senior Purchasing & Cost Controller
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-0.5">
                    Hospitality, Food & Beverage & Creative Lifestyle Concepts
                  </p>
                  <span className="inline-block mt-2 text-4xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Dec 2021 – May 2023
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest">Key Achievements</span>
                <ul className="flex flex-col gap-1.5">
                  {a3000Achievements.map((a) => (
                    <li
                      key={a}
                      className="text-xs text-slate-600 relative pl-4 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-500"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-52 shrink-0 p-6 flex flex-col gap-3">
              <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest">Core Methodologies</span>
              <div className="flex flex-col gap-2.5">
                {a3000Tech.map((t) => (
                  <TechBadge key={t.label} item={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Earlier experience — 4 Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {earlierRoles.map((job) => (
          <div key={job.id} className="glass-card flex flex-col gap-4 !p-6">
            <div>
              {job.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={job.logo} alt={job.company} className="h-7 w-auto max-w-[120px] object-contain object-left mb-2" />
              )}
              <h3 className="text-sm font-bold text-slate-900 font-outfit uppercase tracking-tight">
                {job.title}
              </h3>
              <p className="text-4xs font-bold text-slate-500 uppercase tracking-wide mt-1">
                {job.company}
              </p>
              <span className="inline-block mt-2 text-4xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                {job.period}
              </span>
            </div>
            {job.description && (
              <p className="text-xs text-slate-600 leading-relaxed">{job.description}</p>
            )}
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest">Key Responsibilities</span>
              <ul className="flex flex-col gap-1.5">
                {job.achievements.map((a, idx) => (
                  <li
                    key={idx}
                    className="text-4xs text-slate-600 relative pl-4 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-500"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 mt-auto">
              <span className="text-4xs font-bold text-slate-400 uppercase tracking-widest">Domain Focus</span>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {job.techStack.map((t) => (
                  <TechBadge key={t.label} item={t} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
