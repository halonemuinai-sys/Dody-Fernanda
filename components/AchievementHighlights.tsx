"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, TrendingDown, Layers, Network, CheckCircle2, GraduationCap, X, Star, ArrowRight, type LucideIcon } from "lucide-react";
import CountUp from "@/components/CountUp";

interface Achievement {
  icon: LucideIcon;
  value: string;
  label: string;
  detail: string;
  items?: string[];
  accent: "amber" | "blue" | "violet" | "cyan" | "emerald" | "fuchsia";
}

const accentStyles: Record<Achievement["accent"], { icon: string; iconBg: string; border: string; glow: string }> = {
  amber: { icon: "text-amber-400", iconBg: "bg-amber-500/10", border: "border-amber-500/20", glow: "245, 158, 11" },
  blue: { icon: "text-blue-400", iconBg: "bg-blue-500/10", border: "border-blue-500/20", glow: "59, 130, 246" },
  violet: { icon: "text-violet-400", iconBg: "bg-violet-500/10", border: "border-violet-500/20", glow: "167, 139, 250" },
  cyan: { icon: "text-cyan-400", iconBg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "34, 211, 238" },
  emerald: { icon: "text-emerald-400", iconBg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "16, 185, 129" },
  fuchsia: { icon: "text-fuchsia-400", iconBg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20", glow: "232, 121, 249" },
};

const achievements: Achievement[] = [
  {
    icon: Building2,
    value: "6",
    label: "Companies Served",
    detail: "ALSOK, A3000, CGV, KFC & more",
    items: [
      "ALSOK INDONESIA (Senior Purchasing & Buyer)",
      "A3000 GROUP (Senior Purchasing & Cost Controller)",
      "PT CHAROEN POKPHAND INDONESIA TBK (Supervisor)",
      "PT VICTORIA CARE INDONESIA TBK (Supervisor Assistant)",
      "CGV CINEMAS / PT Graha Layar Prima Tbk (Leader Operational & Store)",
      "PT FAST FOOD INDONESIA TBK / KFC (Stock Controller)",
    ],
    accent: "amber",
  },
  {
    icon: TrendingDown,
    value: "COGS",
    label: "Cost Control Governance",
    detail: "Margin Protection & Variance Analysis",
    accent: "blue",
  },
  {
    icon: Layers,
    value: "12+",
    label: "Core Competencies",
    detail: "Procurement & Supply Operations",
    accent: "violet",
    items: [
      "Vendor Sourcing & Supplier Evaluation",
      "Commercial Negotiation & Contract Pricing",
      "Cost of Goods Sold (COGS) Calculation & Monitoring",
      "Warehouse Management & Cycle Counting",
      "Multi-Branch Requisition & Logistics Distribution",
      "Supplier Relationship Management (SRM) & SLA",
      "Target Breakdown & Area Operational Planning",
      "Market Analysis & Price Benchmarking",
      "Loss Prevention, FIFO Control & Waste Minimization",
      "Strategic Workforce Scheduling & Staff Training",
      "Cross-Departmental Budget & Operational Alignment",
      "ERP Data Management & Advanced Spreadsheet Modeling",
    ],
  },
  {
    icon: Network,
    value: "Multi",
    label: "Branch & Entity Reach",
    detail: "Security, F&B, FMCG, Cinema",
    accent: "cyan",
  },
  {
    icon: CheckCircle2,
    value: "100%",
    label: "Fulfillment Track Record",
    detail: "Goods Availability & SLA Compliance",
    accent: "emerald",
  },
  {
    icon: GraduationCap,
    value: "S2",
    label: "Master of HRM",
    detail: "Strategic Leadership & Negotiation",
    accent: "fuchsia",
  },
];

const orbs = [
  { className: "top-[-60px] left-[8%] w-64 h-64 bg-emerald-500", duration: 9 },
  { className: "bottom-[-80px] right-[12%] w-72 h-72 bg-amber-500", duration: 11 },
  { className: "top-[20%] right-[30%] w-48 h-48 bg-violet-500", duration: 13 },
];

export default function AchievementHighlights() {
  const [selected, setSelected] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="achievements-panel section-container relative overflow-hidden">
      {/* Animated background orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl opacity-10 pointer-events-none -z-0 ${orb.className}`}
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Star size={16} />
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl font-bold tracking-tight text-white font-outfit leading-none">
              <span className="text-emerald-400">Achievement</span> Highlights
            </h2>
            <span className="h-0.5 w-8 rounded-full bg-emerald-400" />
          </div>
        </div>
        <a
          href="#experience"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-emerald-100 transition-colors no-print shrink-0"
        >
          Lihat Riwayat Karier
          <ArrowRight size={14} />
        </a>
      </motion.div>

      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          const clickable = !!item.items;
          const Comp = clickable ? motion.button : motion.div;
          const style = accentStyles[item.accent];
          return (
            <Comp
              key={item.label}
              type={clickable ? "button" : undefined}
              onClick={clickable ? () => setSelected(item) : undefined}
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.09, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 40px -12px rgba(${style.glow}, 0.35)`,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className={`achievement-card flex flex-col gap-3 text-left ${clickable ? "cursor-pointer" : "cursor-default"}`}
            >
              <motion.div
                initial={{ scale: 0, rotate: -120 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.09 + 0.2, type: "spring", stiffness: 260, damping: 14 }}
                whileHover={{ scale: 1.15, rotate: 8, transition: { duration: 0.2 } }}
                className={`p-2 w-fit rounded-lg border ${style.iconBg} ${style.icon} ${style.border}`}
              >
                <Icon size={16} />
              </motion.div>
              <div>
                <div className="text-lg font-extrabold font-outfit text-white">
                  <CountUp value={item.value} />
                </div>
                <div className="text-4xs text-slate-300 font-semibold tracking-wide mt-0.5">{item.label}</div>
                <p className="text-5xs text-slate-400 mt-1">{item.detail}</p>
              </div>
            </Comp>
          );
        })}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md no-print">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl w-full max-w-xl max-h-[80vh] overflow-y-auto shadow-2xl border border-slate-100 relative flex flex-col"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100/80 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="p-8 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                    <selected.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-outfit leading-tight">
                      {selected.label}
                    </h3>
                    <p className="text-4xs text-slate-500 mt-0.5">{selected.items?.length} item terdaftar.</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {selected.items?.map((entry, idx) => (
                    <li
                      key={entry}
                      className="flex items-start gap-3 text-sm text-slate-700 leading-snug p-3 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <span className="text-4xs font-bold text-emerald-700 bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
