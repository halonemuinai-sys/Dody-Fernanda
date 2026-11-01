"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  SearchCheck,
  Calculator,
  Boxes,
  Users,
  Building2,
  X,
  User,
  Tag,
  ArrowRight,
  TrendingDown,
  DollarSign,
  FileSpreadsheet,
  CheckCircle2,
  Calendar,
  type LucideIcon,
} from "lucide-react";

const techMeta: Record<string, { icon: LucideIcon; text: string; bg: string }> = {
  "Vendor Sourcing": { icon: SearchCheck, text: "text-emerald-700", bg: "bg-emerald-50" },
  "Commercial Negotiation": { icon: DollarSign, text: "text-amber-700", bg: "bg-amber-50" },
  "Supplier Evaluation": { icon: CheckCircle2, text: "text-blue-700", bg: "bg-blue-50" },
  "Branch Coordination": { icon: Building2, text: "text-purple-700", bg: "bg-purple-50" },
  "Cost Control": { icon: Calculator, text: "text-rose-700", bg: "bg-rose-50" },
  "COGS Calculation": { icon: TrendingDown, text: "text-indigo-700", bg: "bg-indigo-50" },
  "Warehouse Management": { icon: Boxes, text: "text-amber-700", bg: "bg-amber-50" },
  "Price Evaluation": { icon: DollarSign, text: "text-emerald-700", bg: "bg-emerald-50" },
  "Market Analysis": { icon: SearchCheck, text: "text-cyan-700", bg: "bg-cyan-50" },
  "Target Breakdown": { icon: Calendar, text: "text-blue-700", bg: "bg-blue-50" },
  "Operational Planning": { icon: CheckCircle2, text: "text-slate-800", bg: "bg-slate-100" },
  "Area Supervision": { icon: Users, text: "text-amber-700", bg: "bg-amber-50" },
  "Operational Leadership": { icon: Users, text: "text-emerald-700", bg: "bg-emerald-50" },
  "Store Management": { icon: Building2, text: "text-blue-700", bg: "bg-blue-50" },
  "Service Standards": { icon: CheckCircle2, text: "text-violet-700", bg: "bg-violet-50" },
  "Team Coordination": { icon: Users, text: "text-rose-700", bg: "bg-rose-50" },
  "Stock Controller": { icon: Boxes, text: "text-cyan-700", bg: "bg-cyan-50" },
  "Inventory Monitoring": { icon: FileSpreadsheet, text: "text-indigo-700", bg: "bg-indigo-50" },
  "FIFO": { icon: CheckCircle2, text: "text-emerald-700", bg: "bg-emerald-50" },
  "Distribution Logistics": { icon: Building2, text: "text-amber-700", bg: "bg-amber-50" },
  "Operational Reporting": { icon: FileSpreadsheet, text: "text-blue-700", bg: "bg-blue-50" },
  "Staff Scheduling": { icon: Calendar, text: "text-purple-700", bg: "bg-purple-50" },
  "Team Training": { icon: Users, text: "text-emerald-700", bg: "bg-emerald-50" },
  "Supervisory Support": { icon: CheckCircle2, text: "text-slate-800", bg: "bg-slate-100" },
};

interface Project {
  id: string;
  title: string;
  brand: string;
  type: string;
  badge: string;
  imgBadge: string;
  category: "procurement" | "cost" | "inventory" | "operations" | "branch";
  description: string;
  longDescription: string;
  challenges: string;
  solutions: string;
  tags: string[];
  role: string;
  timeline: string;
  blogSlug?: string;
}

export default function ProjectFilter() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "Semua Portofolio", icon: LayoutGrid },
    { id: "procurement", label: "Purchasing & Sourcing", icon: SearchCheck },
    { id: "cost", label: "Cost Control & COGS", icon: Calculator },
    { id: "inventory", label: "Inventory & Warehouse", icon: Boxes },
    { id: "operations", label: "Operations & Leadership", icon: Users },
    { id: "branch", label: "Branch & Administration", icon: Building2 },
  ];

  const projects: Project[] = [
    {
      id: "alsok-procurement",
      title: "National Purchasing & Vendor Sourcing Strategy",
      brand: "ALSOK INDONESIA",
      type: "Security & Facility Procurement · Supplier SLA & Cost Optimization",
      badge: "Procurement",
      imgBadge: "Purchasing & Sourcing",
      category: "procurement",
      description: "Sentralisasi dan standarisasi pengadaan barang dan jasa untuk kebutuhan operasional kantor pusat dan cabang ALSOK Indonesia di seluruh nusantara.",
      longDescription: "Memimpin vendor sourcing, seleksi rekanan, dan negosiasi komersial untuk mendukung keputusan pembelian yang efisien dan kompetitif. Mengkoordinasikan kebutuhan pengadaan secara terintegrasi dengan tim internal dan cabang-cabang ALSOK di Indonesia guna memastikan ketepatan waktu ketersediaan barang dan jasa operasional keamanan dan fasilitas.",
      challenges: "Kebutuhan operasional cabang yang tersebar di berbagai wilayah dengan spesifikasi teknis ketat, variasi harga vendor lokal, serta kebutuhan respon cepat untuk pengadaan perlengkapan operasional keamanan.",
      solutions: "Membangun sistem evaluasi vendor terpusat dengan matriks penilaian harga, mutu, dan SLA pengiriman. Menjalin kemitraan jangka panjang dengan vendor strategis untuk mendapatkan harga kontrak volume dan fleksibilitas termin pembayaran.",
      tags: ["Vendor Sourcing", "Commercial Negotiation", "Supplier Evaluation", "Branch Coordination"],
      role: "Senior Purchasing & Buyer",
      timeline: "Jun 2023 – Present",
      blogSlug: "alsok-procurement-strategy",
    },
    {
      id: "a3000-cogs",
      title: "Centralized COGS & Hospitality Cost Control",
      brand: "A3000 GROUP",
      type: "Food & Beverage / Hospitality · Warehouse Stock Control · Pricing Recommendation",
      badge: "Cost Control",
      imgBadge: "COGS & Inventory",
      category: "cost",
      description: "Sistem pengendalian harga pokok penjualan (COGS), evaluasi harga vendor F&B, dan restrukturisasi proses gudang untuk melindungi margin bisnis.",
      longDescription: "Memimpin aktivitas pengadaan terpadu mencakup negosiasi vendor dan evaluasi harga material F&B. Menyusun rekomendasi harga beli strategis kepada manajemen serta mereformasi sistem pergudangan dan kontrol stok guna meningkatkan efisiensi operasional dan menekan penyusutan barang.",
      challenges: "Fluktuasi harga bahan baku segar dan minuman impor yang tinggi, potensi pemborosan di area penyimpanan (spoilage), serta margin profitabilitas yang sensitif terhadap pergeseran harga beli.",
      solutions: "Menerapkan formula kalkulasi COGS yang presisi dan pemantauan pergerakan harga komoditas mingguan. Memperbaiki alur penerimaan barang di gudang dengan checklist kontrol mutu dan batas safety stock ketat.",
      tags: ["Cost Control", "COGS Calculation", "Warehouse Management", "Price Evaluation"],
      role: "Senior Purchasing & Cost Controller",
      timeline: "Dec 2021 – May 2023",
      blogSlug: "a3000-cogs-cost-control",
    },
    {
      id: "charoen-supervision",
      title: "Area Market Analysis & Target Execution",
      brand: "PT CHAROEN POKPHAND INDONESIA TBK",
      type: "Agribusiness & Consumer Products · Target Breakdown & Area Operations",
      badge: "Operations",
      imgBadge: "Area Management",
      category: "operations",
      description: "Analisis kondisi pasar komoditas, penerjemahan tujuan bisnis korporat ke dalam action plan area, dan pengawasan performa operasional lapangan.",
      longDescription: "Menganalisis dinamika pasar lokal dan menyelaraskan target manajemen puncak menjadi rencana aksi terukur di tingkat area. Mengkoordinasikan aktivitas distribusi dan operasional tim lapangan untuk mencapai target produktivitas dan pemenuhan volume secara konsisten.",
      challenges: "Perubahan permintaan pasar yang dinamis dan persaingan ketat di tingkat distribusi area yang memerlukan perencanaan taktis cepat.",
      solutions: "Membuat breakdown target harian dan mingguan bagi tim lapangan, serta memonitor KPI operasional secara berkala untuk mendeteksi kendala distribusi lebih dini.",
      tags: ["Market Analysis", "Target Breakdown", "Operational Planning", "Area Supervision"],
      role: "Supervisor",
      timeline: "Jun 2021 – Nov 2021",
    },
    {
      id: "cgv-operations",
      title: "Cinema Store & Concession Operational Leadership",
      brand: "CGV CINEMAS",
      type: "Entertainment & Cinema Retail · Multi-Year Store Leadership",
      badge: "Store Leadership",
      imgBadge: "Retail & Concession",
      category: "operations",
      description: "Memimpin operasional gerai bioskop skala besar selama hampir 6 tahun, menjaga kepatuhan SOP layanan, dan mengelola stok konsesi ritel.",
      longDescription: "Bertanggung jawab memimpin tim operasional dan store crew bioskop CGV untuk mempertahankan standar mutu pelayanan pelanggan tertinggi, kebersihan, dan keselamatan harian. Mengelola breakdown target omzet konsesi bioskop dan mengkoordinasikan eksekusi harian bersama tim frontline.",
      challenges: "Volume pengunjung yang sangat padat pada akhir pekan dan jam tayang film blockbuster, menuntut koordinasi tim yang presisi dan pasokan konsesi yang tidak boleh terputus.",
      solutions: "Menerapkan rotasi tugas yang terstruktur, simulasi alur antrian cepat, dan monitoring stok berkala selama shift operasional untuk memastikan kepuasan pengunjung maksimal.",
      tags: ["Operational Leadership", "Store Management", "Service Standards", "Team Coordination"],
      role: "Leader Operational & Store",
      timeline: "Aug 2014 – Mar 2020",
    },
    {
      id: "kfc-inventory",
      title: "High-Turnover Inventory & Stock Monitoring",
      brand: "PT FAST FOOD INDONESIA TBK (KFC)",
      type: "Quick Service Restaurant · Monthly Reconciliation · FIFO Compliance",
      badge: "Inventory",
      imgBadge: "Stock Control",
      category: "inventory",
      description: "Kalkulasi stok bulanan, kontrol inventaris bahan baku dengan metode FIFO, dan koordinasi distribusi barang operasional.",
      longDescription: "Melaksanakan penghitungan stok fisik (stock opname) bulanan dan pemantauan pergerakan persediaan bahan baku kritis di gerai KFC. Mengatur alokasi dan kelancaran distribusi barang untuk kebutuhan kitchen dan kasir operasional tanpa jeda.",
      challenges: "Bahan baku restoran cepat saji memiliki perputaran sangat cepat dengan batas masa kedaluwarsa ketat yang rentan terhadap penyusutan (shrinkage).",
      solutions: "Menerapkan disiplin First-In First-Out (FIFO), audit pencatatan penerimaan barang, serta rekonsiliasi harian antara pemakaian riil dengan data sistem penjualan.",
      tags: ["Stock Controller", "Inventory Monitoring", "FIFO", "Distribution Logistics"],
      role: "Stock Controller",
      timeline: "Aug 2012 – Jul 2014",
    },
    {
      id: "victoria-care",
      title: "Operational Reporting & Workforce Administration",
      brand: "PT VICTORIA CARE INDONESIA TBK",
      type: "Personal Care & Cosmetics · Reporting · Rostering & Training",
      badge: "Administration",
      imgBadge: "Supervisory",
      category: "branch",
      description: "Penyusunan laporan operasional mingguan/bulanan, penjadwalan agenda kerja staf, dan dukungan pelatihan serta motivasi tim.",
      longDescription: "Menyusun rekapitulasi laporan performa operasional berkala untuk kebutuhan evaluasi manajemen. Mengatur jadwal kerja dan agenda staf serta mendampingi kegiatan supervisi harian, pelatihan kerja, dan pembangunan motivasi tim kerja.",
      challenges: "Menjaga konsistensi pelaporan operasional yang akurat sekaligus memastikan alokasi jam kerja staf berjalan adil dan optimal.",
      solutions: "Mengembangkan template laporan terstruktur untuk mempercepat kompilasi data, serta menerapkan sistem rotasi jadwal kerja yang transparan dan adaptif.",
      tags: ["Operational Reporting", "Staff Scheduling", "Team Training", "Supervisory Support"],
      role: "Supervisor Assistant",
      timeline: "Dec 2020 – May 2021",
    },
  ];

  // Visual SVG illustration renderer matching modern UI cards
  const renderProjectIllustration = (id: string) => {
    const fontFamily = "Arial, Helvetica, sans-serif";
    switch (id) {
      case "alsok-procurement":
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="220" fill="#f0fdf4" />
            <circle cx="80" cy="190" r="80" fill="#10b981" opacity="0.08" />
            <circle cx="340" cy="50" r="70" fill="#059669" opacity="0.08" />

            {/* Dashboard Container */}
            <rect x="50" y="20" width="300" height="180" rx="12" fill="#ffffff" stroke="#bbf7d0" strokeWidth="1.5" />
            
            {/* Header */}
            <rect x="65" y="32" width="270" height="26" rx="6" fill="#064e3b" />
            <text x="80" y="49" fontFamily={fontFamily} fontSize="9" fontWeight="800" fill="#ffffff">ALSOK INDONESIA · PROCUREMENT SOURCING HUB</text>
            <rect x="270" y="37" width="55" height="16" rx="4" fill="#10b981" />
            <text x="297" y="48" fontFamily={fontFamily} fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Active POs</text>

            {/* 3 Metric Cards */}
            <rect x="65" y="68" width="82" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="75" y="81" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">VENDOR CONTRACTS</text>
            <text x="75" y="99" fontFamily={fontFamily} fontSize="13" fontWeight="800" fill="#0f172a">100%</text>
            <text x="115" y="99" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#059669">Verified</text>

            <rect x="159" y="68" width="82" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="169" y="81" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">COST SAVINGS</text>
            <text x="169" y="99" fontFamily={fontFamily} fontSize="13" fontWeight="800" fill="#059669">-18.4%</text>
            <text x="218" y="99" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#059669">Nego</text>

            <rect x="253" y="68" width="82" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="263" y="81" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">BRANCH REQ</text>
            <text x="263" y="99" fontFamily={fontFamily} fontSize="13" fontWeight="800" fill="#0f172a">On-Time</text>

            {/* Vendor Evaluation Table */}
            <rect x="65" y="118" width="270" height="68" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <text x="75" y="132" fontFamily={fontFamily} fontSize="7" fontWeight="800" fill="#0f172a">Strategic Supplier Evaluation Matrix</text>
            
            <rect x="75" y="140" width="250" height="18" rx="4" fill="#f0fdf4" />
            <text x="82" y="152" fontFamily={fontFamily} fontSize="7" fontWeight="700" fill="#065f46">Security Devices & CCTV</text>
            <text x="210" y="152" fontFamily={fontFamily} fontSize="6" fontWeight="600" fill="#059669">Tier 1 Partner · SLA 99.4%</text>
            <rect x="285" y="144" width="34" height="10" rx="3" fill="#10b981" />
            <text x="302" y="151.5" fontFamily={fontFamily} fontSize="5" fontWeight="700" fill="#ffffff" textAnchor="middle">Approved</text>

            <rect x="75" y="162" width="250" height="18" rx="4" fill="#f8fafc" />
            <text x="82" y="174" fontFamily={fontFamily} fontSize="7" fontWeight="700" fill="#334155">Uniforms & Facility Assets</text>
            <text x="210" y="174" fontFamily={fontFamily} fontSize="6" fontWeight="600" fill="#64748b">Volume Contract · Net 45 Days</text>
            <rect x="285" y="166" width="34" height="10" rx="3" fill="#0284c7" />
            <text x="302" y="173.5" fontFamily={fontFamily} fontSize="5" fontWeight="700" fill="#ffffff" textAnchor="middle">Active</text>
          </svg>
        );

      case "a3000-cogs":
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="220" fill="#fffbeb" />
            <circle cx="330" cy="180" r="90" fill="#f59e0b" opacity="0.08" />

            {/* Container */}
            <rect x="50" y="20" width="300" height="180" rx="12" fill="#ffffff" stroke="#fde68a" strokeWidth="1.5" />
            
            {/* Header */}
            <rect x="65" y="32" width="270" height="26" rx="6" fill="#78350f" />
            <text x="80" y="49" fontFamily={fontFamily} fontSize="9" fontWeight="800" fill="#ffffff">A3000 GROUP · COGS & COST CONTROLLER</text>
            <rect x="260" y="37" width="65" height="16" rx="4" fill="#f59e0b" />
            <text x="292.5" y="48" fontFamily={fontFamily} fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Margin Guard</text>

            {/* COGS Breakdown Cards */}
            <rect x="65" y="68" width="130" height="118" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="75" y="82" fontFamily={fontFamily} fontSize="7" fontWeight="800" fill="#0f172a">COGS Formulation & Target</text>
            
            <text x="75" y="97" fontFamily={fontFamily} fontSize="6" fontWeight="600" fill="#64748b">Raw Material / Food</text>
            <rect x="75" y="101" width="110" height="6" rx="3" fill="#e2e8f0" />
            <rect x="75" y="101" width="35" height="6" rx="3" fill="#f59e0b" />
            <text x="185" y="106" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#b45309" textAnchor="end">31.5%</text>

            <text x="75" y="122" fontFamily={fontFamily} fontSize="6" fontWeight="600" fill="#64748b">Beverage Cost</text>
            <rect x="75" y="126" width="110" height="6" rx="3" fill="#e2e8f0" />
            <rect x="75" y="126" width="24" height="6" rx="3" fill="#10b981" />
            <text x="185" y="131" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#059669" textAnchor="end">21.8%</text>

            <text x="75" y="147" fontFamily={fontFamily} fontSize="6" fontWeight="600" fill="#64748b">Gross Margin Protected</text>
            <rect x="75" y="151" width="110" height="6" rx="3" fill="#e2e8f0" />
            <rect x="75" y="151" width="76" height="6" rx="3" fill="#065f46" />
            <text x="185" y="156" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#065f46" textAnchor="end">68.5%</text>

            <text x="75" y="174" fontFamily={fontFamily} fontSize="5.5" fontWeight="700" fill="#059669">✓ Within Budget Target (SOP)</text>

            {/* Warehouse Stock Panel */}
            <rect x="205" y="68" width="130" height="118" rx="6" fill="#fefce8" stroke="#fef08a" strokeWidth="1" />
            <text x="215" y="82" fontFamily={fontFamily} fontSize="7" fontWeight="800" fill="#854d0e">Warehouse Stock Control</text>

            <rect x="215" y="92" width="110" height="24" rx="4" fill="#ffffff" stroke="#fde047" strokeWidth="1" />
            <text x="222" y="103" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#713f12">Stock Opname Cycle</text>
            <text x="222" y="111" fontFamily={fontFamily} fontSize="5.5" fill="#a16207">Monthly & Weekly Audits</text>

            <rect x="215" y="122" width="110" height="24" rx="4" fill="#ffffff" stroke="#fde047" strokeWidth="1" />
            <text x="222" y="133" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#713f12">Spoilage Mitigation</text>
            <text x="222" y="141" fontFamily={fontFamily} fontSize="5.5" fill="#a16207">Minimized to &lt; 0.8%</text>

            <rect x="215" y="152" width="110" height="26" rx="4" fill="#78350f" />
            <text x="270" y="165" fontFamily={fontFamily} fontSize="6.5" fontWeight="700" fill="#ffffff" textAnchor="middle">PRICING RECOMMENDATION</text>
            <text x="270" y="173" fontFamily={fontFamily} fontSize="5" fill="#fde68a" textAnchor="middle">Approved by Executive Board</text>
          </svg>
        );

      case "charoen-supervision":
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="220" fill="#eff6ff" />
            <circle cx="80" cy="40" r="60" fill="#3b82f6" opacity="0.08" />

            <rect x="50" y="20" width="300" height="180" rx="12" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
            
            <rect x="65" y="32" width="270" height="26" rx="6" fill="#1e3a8a" />
            <text x="80" y="49" fontFamily={fontFamily} fontSize="9" fontWeight="800" fill="#ffffff">CHAROEN POKPHAND · AREA SUPERVISORY</text>
            <rect x="275" y="37" width="50" height="16" rx="4" fill="#2563eb" />
            <text x="300" y="48" fontFamily={fontFamily} fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Area Target</text>

            {/* Target Breakdown Grid */}
            <rect x="65" y="68" width="270" height="118" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="75" y="82" fontFamily={fontFamily} fontSize="7" fontWeight="800" fill="#0f172a">Area Operational Target Breakdown & Monitoring</text>

            <rect x="75" y="92" width="125" height="40" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="83" y="104" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#475569">Target Volume Execution</text>
            <text x="83" y="122" fontFamily={fontFamily} fontSize="14" fontWeight="800" fill="#1e3a8a">104.2%</text>
            <text x="145" y="122" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#059669">Achieved</text>

            <rect x="210" y="92" width="115" height="40" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="218" y="104" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#475569">Area Field Compliance</text>
            <text x="218" y="122" fontFamily={fontFamily} fontSize="14" fontWeight="800" fill="#059669">98.5%</text>
            <text x="275" y="122" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#059669">Audit Pass</text>

            <rect x="75" y="140" width="250" height="36" rx="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
            <text x="83" y="152" fontFamily={fontFamily} fontSize="6.5" fontWeight="700" fill="#1e40af">Market Intelligence & Area Action Plan</text>
            <text x="83" y="162" fontFamily={fontFamily} fontSize="5.5" fill="#3b82f6">Penerjemahan sasaran bisnis korporat menjadi rute dan penugasan operasional harian.</text>
            <text x="83" y="170" fontFamily={fontFamily} fontSize="5" fontWeight="600" fill="#64748b">Cakupan Area Koordinasi Lintas Unit Distribusi</text>
          </svg>
        );

      case "cgv-operations":
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="220" fill="#fdf2f8" />
            <circle cx="340" cy="40" r="70" fill="#e11d48" opacity="0.08" />

            <rect x="50" y="20" width="300" height="180" rx="12" fill="#ffffff" stroke="#fecdd3" strokeWidth="1.5" />
            
            <rect x="65" y="32" width="270" height="26" rx="6" fill="#881337" />
            <text x="80" y="49" fontFamily={fontFamily} fontSize="9" fontWeight="800" fill="#ffffff">CGV CINEMAS · STORE & OPERATIONAL LEAD</text>
            <rect x="275" y="37" width="50" height="16" rx="4" fill="#e11d48" />
            <text x="300" y="48" fontFamily={fontFamily} fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">6 Years</text>

            <rect x="65" y="68" width="270" height="118" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="75" y="82" fontFamily={fontFamily} fontSize="7" fontWeight="800" fill="#0f172a">Store Operations & Concession Standards</text>

            <rect x="75" y="92" width="80" height="42" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="83" y="104" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">STORE SERVICE</text>
            <text x="83" y="122" fontFamily={fontFamily} fontSize="12" fontWeight="800" fill="#881337">Top Tier</text>

            <rect x="160" y="92" width="80" height="42" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="168" y="104" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">CONCESSION</text>
            <text x="168" y="122" fontFamily={fontFamily} fontSize="12" fontWeight="800" fill="#059669">Target Met</text>

            <rect x="245" y="92" width="80" height="42" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="253" y="104" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">CREW LEAD</text>
            <text x="253" y="122" fontFamily={fontFamily} fontSize="12" fontWeight="800" fill="#0f172a">30+ Staff</text>

            <rect x="75" y="142" width="250" height="34" rx="5" fill="#fff1f2" stroke="#fecdd3" strokeWidth="1" />
            <text x="83" y="154" fontFamily={fontFamily} fontSize="6.5" fontWeight="700" fill="#9f1239">Operational SOP & Concession Stock Precision</text>
            <text x="83" y="164" fontFamily={fontFamily} fontSize="5.5" fill="#be123c">Memimpin shift harian bioskop, audit stok konsesi makanan/minuman, dan kepuasan pengunjung.</text>
          </svg>
        );

      case "kfc-inventory":
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="220" fill="#fef2f2" />
            <circle cx="80" cy="180" r="70" fill="#dc2626" opacity="0.08" />

            <rect x="50" y="20" width="300" height="180" rx="12" fill="#ffffff" stroke="#fecaca" strokeWidth="1.5" />
            
            <rect x="65" y="32" width="270" height="26" rx="6" fill="#991b1b" />
            <text x="80" y="49" fontFamily={fontFamily} fontSize="9" fontWeight="800" fill="#ffffff">PT FAST FOOD INDONESIA (KFC) · STOCK CONTROLLER</text>
            <rect x="275" y="37" width="50" height="16" rx="4" fill="#dc2626" />
            <text x="300" y="48" fontFamily={fontFamily} fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">FIFO Control</text>

            <rect x="65" y="68" width="270" height="118" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="75" y="82" fontFamily={fontFamily} fontSize="7" fontWeight="800" fill="#0f172a">Inventory Reconciliation & Goods Availability</text>

            <rect x="75" y="92" width="120" height="38" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="83" y="103" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">Stock Accuracy Rate</text>
            <text x="83" y="120" fontFamily={fontFamily} fontSize="13" fontWeight="800" fill="#059669">99.8%</text>
            <text x="135" y="120" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#059669">Monthly</text>

            <rect x="205" y="92" width="120" height="38" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="213" y="103" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">Zero Stock-out</text>
            <text x="213" y="120" fontFamily={fontFamily} fontSize="13" fontWeight="800" fill="#991b1b">100%</text>
            <text x="255" y="120" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#059669">Available</text>

            <rect x="75" y="138" width="250" height="38" rx="5" fill="#fff5f5" stroke="#fed7d7" strokeWidth="1" />
            <text x="83" y="150" fontFamily={fontFamily} fontSize="6.5" fontWeight="700" fill="#991b1b">First-In First-Out (FIFO) & Raw Material Log</text>
            <text x="83" y="160" fontFamily={fontFamily} fontSize="5.5" fill="#742a2a">Penghitungan fisik bulanan (cycle count), rotasi bahan baku cepat saji, dan distribusi kitchen.</text>
            <text x="83" y="168" fontFamily={fontFamily} fontSize="5" fontWeight="600" fill="#4a5568">Dokumentasi penerimaan rapi dan audit-ready.</text>
          </svg>
        );

      case "victoria-care":
      default:
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="220" fill="#faf5ff" />
            <circle cx="330" cy="50" r="70" fill="#9333ea" opacity="0.08" />

            <rect x="50" y="20" width="300" height="180" rx="12" fill="#ffffff" stroke="#e9d5ff" strokeWidth="1.5" />
            
            <rect x="65" y="32" width="270" height="26" rx="6" fill="#581c87" />
            <text x="80" y="49" fontFamily={fontFamily} fontSize="9" fontWeight="800" fill="#ffffff">PT VICTORIA CARE INDONESIA · SUPERVISORY</text>
            <rect x="270" y="37" width="55" height="16" rx="4" fill="#9333ea" />
            <text x="297.5" y="48" fontFamily={fontFamily} fontSize="7" fontWeight="700" fill="#ffffff" textAnchor="middle">Operations</text>

            <rect x="65" y="68" width="270" height="118" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="75" y="82" fontFamily={fontFamily} fontSize="7" fontWeight="800" fill="#0f172a">Reporting, Rostering & Staff Development</text>

            <rect x="75" y="92" width="120" height="38" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="83" y="103" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">Weekly / Monthly Reports</text>
            <text x="83" y="120" fontFamily={fontFamily} fontSize="12" fontWeight="800" fill="#581c87">100% On-time</text>

            <rect x="205" y="92" width="120" height="38" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <text x="213" y="103" fontFamily={fontFamily} fontSize="6" fontWeight="700" fill="#64748b">Staff Rostering</text>
            <text x="213" y="120" fontFamily={fontFamily} fontSize="12" fontWeight="800" fill="#059669">Zero Conflict</text>

            <rect x="75" y="138" width="250" height="38" rx="5" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1" />
            <text x="83" y="150" fontFamily={fontFamily} fontSize="6.5" fontWeight="700" fill="#6b21a8">Supervisory Support & Workforce Motivation</text>
            <text x="83" y="160" fontFamily={fontFamily} fontSize="5.5" fill="#7e22ce">Pendampingan pelatihan staf dan memastikan agenda operasional harian berjalan sesuai target.</text>
          </svg>
        );
    }
  };

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col gap-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 items-center justify-start border-b border-slate-200 pb-4">
        {categories.map((c) => {
          const Icon = c.icon;
          const active = filter === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                active
                  ? "bg-[#023c26] text-white shadow-sm"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Icon size={14} />
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProject(p)}
            className="glass-card flex flex-col overflow-hidden !p-0 cursor-pointer group hover:border-emerald-500/40 transition-all hover:-translate-y-1"
          >
            {/* Visual Header */}
            <div className="relative w-full h-44 bg-slate-100 overflow-hidden border-b border-slate-100">
              {renderProjectIllustration(p.id)}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-4xs font-bold text-slate-800 shadow-sm uppercase tracking-wider">
                {p.imgBadge}
              </div>
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#023c26]/90 backdrop-blur-sm text-4xs font-bold text-white shadow-sm">
                {p.timeline}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div>
                <span className="text-4xs font-bold uppercase tracking-wider text-emerald-700 block">
                  {p.brand}
                </span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mt-0.5 leading-snug">
                  {p.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-100">
                {p.tags.slice(0, 3).map((tag) => {
                  const meta = techMeta[tag];
                  return (
                    <span
                      key={tag}
                      className={`text-5xs font-semibold px-2 py-0.5 rounded-full ${meta ? `${meta.bg} ${meta.text}` : "bg-slate-100 text-slate-600"}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md no-print">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    <span>{selectedProject.brand}</span>
                    <span>·</span>
                    <span>{selectedProject.timeline}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 font-outfit mt-1">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">{selectedProject.type}</p>
                </div>

                {/* Illustration in modal */}
                <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                  {renderProjectIllustration(selectedProject.id)}
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Overview</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60 flex flex-col gap-1.5">
                    <h4 className="text-xs font-bold text-amber-800">Tantangan (Challenges)</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">{selectedProject.challenges}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60 flex flex-col gap-1.5">
                    <h4 className="text-xs font-bold text-emerald-800">Solusi & Hasil (Solutions)</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">{selectedProject.solutions}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Kompetensi & Metode</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => {
                      const meta = techMeta[tag];
                      const Icon = meta?.icon || Tag;
                      return (
                        <div
                          key={tag}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                            meta ? `${meta.bg} ${meta.text}` : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          <Icon size={14} />
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {selectedProject.blogSlug && (
                  <div className="pt-2 border-t border-slate-100 flex justify-end">
                    <Link
                      href={`/blog/${selectedProject.blogSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                    >
                      Baca Studi Kasus Lengkap
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
