"use client";

import {
  SearchCheck,
  DollarSign,
  Calculator,
  Boxes,
  Users,
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  GraduationCap,
  TrendingDown,
  BarChart3,
  Layers,
} from "lucide-react";

export default function TechStack() {
  return (
    <section className="section-container border-t border-slate-200">
      <div className="flex flex-col gap-2">
        <h2 className="section-title font-outfit">Core Competencies & Tools</h2>
        <p className="section-subtitle">Keahlian profesional, metodologi rantai pasok, dan platform kerja yang saya kuasai dalam operasional pengadaan dan pengendalian biaya.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">

        {/* Sourcing & Procurement */}
        <div className="glass-card flex flex-col gap-4 !p-5">
          <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Procurement</h4>
          <div className="flex flex-col gap-3 text-xs font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <SearchCheck size={18} className="text-emerald-600" />
              <span>Vendor Sourcing</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={18} className="text-amber-600" />
              <span>Commercial Negotiation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-blue-600" />
              <span>Supplier Evaluation</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-purple-600" />
              <span>Supplier SLA / SRM</span>
            </div>
          </div>
        </div>

        {/* Cost Control & COGS */}
        <div className="glass-card flex flex-col gap-4 !p-5">
          <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Cost Control</h4>
          <div className="flex flex-col gap-3 text-xs font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <Calculator size={18} className="text-rose-600" />
              <span>COGS Calculation</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown size={18} className="text-indigo-600" />
              <span>Cost Variance</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={18} className="text-emerald-600" />
              <span>Price Benchmarking</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-amber-600" />
              <span>Budget Alignment</span>
            </div>
          </div>
        </div>

        {/* Inventory & Warehouse */}
        <div className="glass-card flex flex-col gap-4 !p-5">
          <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Inventory</h4>
          <div className="flex flex-col gap-3 text-xs font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <Boxes size={18} className="text-amber-600" />
              <span>Stock Opname</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-600" />
              <span>FIFO Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers size={18} className="text-blue-600" />
              <span>Safety Stock / ROP</span>
            </div>
            <div className="flex items-center gap-2">
              <Boxes size={18} className="text-cyan-600" />
              <span>Loss Prevention</span>
            </div>
          </div>
        </div>

        {/* Operational Leadership */}
        <div className="glass-card flex flex-col gap-4 !p-5">
          <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Operations</h4>
          <div className="flex flex-col gap-3 text-xs font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-purple-600" />
              <span>Area Supervision</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-blue-600" />
              <span>Target Breakdown</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-emerald-600" />
              <span>Store Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-amber-600" />
              <span>SOP Standards</span>
            </div>
          </div>
        </div>

        {/* Human Resource Strategy (S2) */}
        <div className="glass-card flex flex-col gap-4 !p-5">
          <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">HRM Strategy</h4>
          <div className="flex flex-col gap-3 text-xs font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-indigo-600" />
              <span>Magister HRM (S2)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-emerald-600" />
              <span>Team Leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-rose-600" />
              <span>Staff Training</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-blue-600" />
              <span>Staff Rostering</span>
            </div>
          </div>
        </div>

        {/* Systems & Software */}
        <div className="glass-card flex flex-col gap-4 !p-5">
          <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Software & Systems</h4>
          <div className="flex flex-col gap-3 text-xs font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <FileSpreadsheet size={18} className="text-emerald-700" />
              <span>MS Excel (Advanced)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-blue-600 text-white font-bold flex items-center justify-center text-4xs">W</div>
              <span>Microsoft Word</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-orange-600 text-white font-bold flex items-center justify-center text-4xs">P</div>
              <span>PowerPoint</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-slate-800" />
              <span>ERP & POS Modules</span>
            </div>
          </div>
        </div>

        {/* Reporting & Analytics */}
        <div className="glass-card flex flex-col gap-4 !p-5">
          <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Reporting</h4>
          <div className="flex flex-col gap-3 text-xs font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <FileSpreadsheet size={18} className="text-amber-600" />
              <span>Operational Report</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-emerald-600" />
              <span>KPI Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-blue-600" />
              <span>Audit Readiness</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={18} className="text-rose-600" />
              <span>Price Variance Log</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
