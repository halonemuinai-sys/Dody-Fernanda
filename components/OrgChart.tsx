"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Tag,
  Workflow,
  Users,
  Target,
  User,
  SearchCheck,
  Calculator,
  Boxes,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  type LucideIcon,
} from "lucide-react";

const REVEAL_PASSWORD = "124";

interface OrgPerson {
  name: string;
  role: string;
  icon: LucideIcon;
  accent: "green" | "blue" | "amber" | "orange";
  tags?: { label: string; highlight?: boolean }[];
}

const accentClasses: Record<OrgPerson["accent"], { border: string; iconBg: string; iconText: string }> = {
  green: { border: "border-l-emerald-500", iconBg: "bg-emerald-50", iconText: "text-emerald-700" },
  blue: { border: "border-l-blue-500", iconBg: "bg-blue-50", iconText: "text-blue-700" },
  amber: { border: "border-l-amber-500", iconBg: "bg-amber-50", iconText: "text-amber-700" },
  orange: { border: "border-l-orange-500", iconBg: "bg-orange-50", iconText: "text-orange-700" },
};

const infoStats: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Tag, title: "Multi-Industry", desc: "Security, F&B, Agribusiness, FMCG, Cinema" },
  { icon: Workflow, title: "Centralized Procurement", desc: "Sourcing, Negotiation & Branch Delivery" },
  { icon: Users, title: "Multi-Branch", desc: "Koordinasi Operasional Nasional" },
  { icon: Target, title: "Tujuan", desc: "Memastikan ketersediaan material tepat waktu, biaya optimal & kepatuhan SLA" },
];

const legend: { color: string; label: string }[] = [
  { color: "bg-emerald-400", label: "Strategic Sourcing & Negotiation" },
  { color: "bg-blue-400", label: "Cost Control & COGS" },
  { color: "bg-amber-400", label: "Warehouse & Stock Opname" },
  { color: "bg-orange-400", label: "Branch Requisition & Logistics" },
];

function OrgNode({ person, revealed }: { person: OrgPerson; revealed: boolean }) {
  const Icon = person.icon;
  const accent = accentClasses[person.accent];
  return (
    <div className={`glass-card !p-3 border-l-4 ${accent.border} flex items-start gap-2.5 w-full`}>
      <div className={`w-8 h-8 shrink-0 rounded-lg ${accent.iconBg} ${accent.iconText} flex items-center justify-center`}>
        <Icon size={14} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold text-slate-900 leading-tight">
          {revealed ? person.name : <span className="blur-[6px] select-none">{person.name}</span>}
        </p>
        <p className="text-4xs font-bold text-slate-500 uppercase tracking-wide mt-0.5">{person.role}</p>
        {person.tags && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {person.tags.map((t) => (
              <span
                key={t.label}
                className={`text-5xs font-bold px-1.5 py-0.5 rounded ${
                  t.highlight ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {t.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Connector({ heightClass = "h-8" }: { heightClass?: string }) {
  return <div className={`w-px ${heightClass} bg-slate-300`} />;
}

export default function OrgChart() {
  const [revealed, setRevealed] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleToggle = () => {
    if (revealed) {
      setRevealed(false);
    } else {
      setShowPrompt(true);
    }
  };

  const closePrompt = () => {
    setShowPrompt(false);
    setPassword("");
    setError(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === REVEAL_PASSWORD) {
      setRevealed(true);
      closePrompt();
    } else {
      setError(true);
    }
  };

  return (
    <div className="rounded-2xl border-2 border-emerald-900/90 p-6 md:p-10 flex flex-col gap-10 bg-white">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">Operasional & Koordinasi</span>
            <button
              type="button"
              onClick={handleToggle}
              className={`no-print inline-flex items-center gap-1.5 text-4xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                revealed
                  ? "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                  : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
              }`}
            >
              {revealed ? <Eye size={12} /> : <EyeOff size={12} />}
              {revealed ? "Nama Tim Terlihat" : "Tampilkan Detail Tim"}
            </button>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 font-outfit">
            Purchasing & Supply Chain Structure
          </h2>
          <p className="text-sm font-bold text-amber-600 tracking-wide uppercase">Operational Framework & Stakeholder Alignment</p>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
            Sinergi alur kerja pengadaan barang, negosiasi komersial vendor, pengendalian COGS, dan koordinasi cabang untuk menjamin kelancaran operasional bisnis.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="glass-card flex flex-col gap-5">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-11 h-11 rounded-full border-2 border-emerald-600 text-emerald-700 flex items-center justify-center shrink-0">
                <Building2 size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Procurement & Cost Operations</p>
                <p className="text-xs italic text-emerald-700 font-semibold">End-to-End Purchasing Governance</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {infoStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">{item.title}</p>
                      <p className="text-5xs text-slate-500 leading-snug mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Org tree */}
      <div className="flex flex-col items-center overflow-x-auto">
        {/* Root */}
        <div className="bg-emerald-800 text-white rounded-xl px-6 py-4 flex items-center gap-3 shadow-md">
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
            <User size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Dody Fernanda</p>
            <p className="text-4xs font-bold text-amber-400 uppercase tracking-widest mt-0.5">Senior Purchasing & Buyer / Cost Controller</p>
          </div>
        </div>

        <Connector />

        {/* Level 2 connector bar (2 main divisions) */}
        <div className="relative w-full min-w-[760px] h-px">
          <div className="absolute top-0 h-px bg-slate-300" style={{ left: "25%", right: "25%" }} />
        </div>

        <div className="grid grid-cols-2 w-full min-w-[760px] gap-x-6">
          {/* Branch 1: Strategic Sourcing & Vendor Procurement */}
          <div className="flex flex-col items-center gap-0">
            <Connector />
            <div className="w-full max-w-xs">
              <OrgNode
                person={{
                  name: "Vendor Sourcing & RFQ Unit",
                  role: "Supplier Screening & Evaluation",
                  icon: SearchCheck,
                  accent: "green",
                  tags: [{ label: "Price Benchmarking" }, { label: "Quality Audit" }],
                }}
                revealed={revealed}
              />
            </div>
            <Connector />
            <div className="w-full max-w-xs">
              <OrgNode
                person={{
                  name: "Commercial Negotiation Unit",
                  role: "Contract Governance & SLA Terms",
                  icon: ShieldCheck,
                  accent: "green",
                  tags: [{ label: "Term of Payment" }, { label: "Volume Contract" }],
                }}
                revealed={revealed}
              />
            </div>
          </div>

          {/* Branch 2: Cost Control, Inventory & Logistics */}
          <div className="flex flex-col items-center gap-0">
            <Connector />
            <div className="w-full max-w-xs">
              <OrgNode
                person={{
                  name: "COGS & Cost Controller Unit",
                  role: "Margin Calculation & Variance Analysis",
                  icon: Calculator,
                  accent: "blue",
                  tags: [{ label: "Margin Guard" }, { label: "Budget Alignment" }],
                }}
                revealed={revealed}
              />
            </div>
            <Connector />

            {/* Sub-branch for Warehouse & Branches */}
            <div className="relative w-full h-px">
              <div className="absolute top-0 h-px bg-slate-300" style={{ left: "25%", right: "25%" }} />
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="flex flex-col items-center gap-0">
                <Connector />
                <OrgNode
                  person={{
                    name: "Warehouse & Stock Control",
                    role: "Stock Opname & FIFO Compliance",
                    icon: Boxes,
                    accent: "amber",
                    tags: [{ label: "Cycle Count" }, { label: "Loss Prevention", highlight: true }],
                  }}
                  revealed={revealed}
                />
              </div>
              <div className="flex flex-col items-center gap-0">
                <Connector />
                <OrgNode
                  person={{
                    name: "Multi-Branch Requisition",
                    role: "Nationwide Fulfillment & Delivery",
                    icon: Building2,
                    accent: "orange",
                    tags: [{ label: "Branch SLA" }, { label: "On-Time Fulfillment" }],
                  }}
                  revealed={revealed}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="bg-emerald-900 rounded-2xl p-6 md:p-8 flex flex-col gap-6 text-white">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-white/15">
          <div className="flex items-start gap-3 sm:pr-6">
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0">
              <Workflow size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wide whitespace-nowrap">Model</p>
              <p className="text-sm font-bold text-white uppercase mt-0.5 whitespace-nowrap">Centralized Procurement</p>
              <p className="text-xs text-white/80 leading-relaxed mt-1.5 max-w-[240px]">
                Sentralisasi pengadaan barang dan jasa guna memaksimalkan daya tawar harga dan konsistensi mutu.
              </p>
            </div>
          </div>

          <div className="sm:px-8">
            <p className="text-2xl font-extrabold text-amber-400 font-outfit">12+</p>
            <p className="text-xs font-bold text-white uppercase tracking-wide mt-1 whitespace-nowrap">Tahun Pengalaman</p>
            <p className="text-xs text-white/70 mt-0.5 whitespace-nowrap">Purchasing & Cost Control</p>
          </div>

          <div className="sm:px-8">
            <p className="text-2xl font-extrabold text-amber-400 font-outfit">6</p>
            <p className="text-xs font-bold text-white uppercase tracking-wide mt-1 whitespace-nowrap">Perusahaan</p>
            <p className="text-xs text-white/70 mt-0.5 whitespace-nowrap">Lintas industri terkemuka</p>
          </div>

          <div className="sm:pl-8">
            <p className="text-2xl font-extrabold text-amber-400 font-outfit">100%</p>
            <p className="text-xs font-bold text-white uppercase tracking-wide mt-1 whitespace-nowrap">Pemenuhan Requisition</p>
            <p className="text-xs text-white/70 mt-0.5 whitespace-nowrap">Ketersediaan barang tepat waktu</p>
          </div>
        </div>

        <div className="h-px bg-white/15" />

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-white/15">
          <div className="sm:pr-8">
            <p className="text-sm font-extrabold text-white font-outfit whitespace-nowrap">Operational Pillars</p>
            <p className="text-xs text-white/70 mt-1 leading-relaxed max-w-[260px]">
              Menjembatani kepentingan operasional cabang dengan efisiensi finansial manajemen
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 sm:pl-8 sm:ml-auto">
            {legend.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/90 whitespace-nowrap">
                <span className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-100 text-4xs font-semibold text-slate-400 uppercase tracking-wide">
        <div className="flex items-center gap-2">
          <Building2 size={14} className="text-emerald-700" />
          Procurement & Cost Operations · Dody Fernanda
        </div>
        <div className="text-amber-600">Operational Hierarchy</div>
      </div>

      {/* Password prompt */}
      <AnimatePresence>
        {showPrompt && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-md no-print">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl w-full max-w-sm shadow-2xl border border-slate-100 p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-amber-50 text-amber-700 border border-amber-500/20 shrink-0">
                  <Lock size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Masukkan Password</h3>
                  <p className="text-4xs text-slate-500 mt-0.5">Untuk menampilkan detail tim operasional</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  autoFocus
                  placeholder="Password"
                  className={`w-full px-3 py-2.5 rounded-lg border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 ${
                    error ? "border-rose-400" : "border-slate-200"
                  }`}
                />
                {error && (
                  <p className="text-4xs font-semibold text-rose-600">Password salah, coba lagi.</p>
                )}
                <div className="flex gap-2 mt-1">
                  <button
                    type="button"
                    onClick={closePrompt}
                    className="flex-1 px-4 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#023c26] text-white hover:bg-emerald-950 transition-colors cursor-pointer"
                  >
                    Buka
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
