"use client";

import { ArrowRight, SearchCheck, DollarSign, Calculator, Boxes, Network, Users } from "lucide-react";

const valueProps = [
  {
    title: "Vendor Sourcing & Strategic Evaluation",
    desc: "Mengidentifikasi, menyeleksi, dan mengevaluasi vendor terpercaya untuk memastikan harga kompetitif, kualitas material terjamin, dan pasokan andal.",
    icon: SearchCheck,
  },
  {
    title: "Commercial Negotiation & Cost Optimization",
    desc: "Memimpin negosiasi komersial, termin pembayaran fleksibel, serta kontrak pengadaan yang memaksimalkan efisiensi anggaran tanpa mengorbankan mutu.",
    icon: DollarSign,
  },
  {
    title: "Cost Control & COGS Governance",
    desc: "Menghitung dan memonitor Harga Pokok Penjualan (COGS), menganalisis varians biaya, serta mencegah kebocoran anggaran dalam siklus pengadaan.",
    icon: Calculator,
  },
  {
    title: "Inventory & Warehouse Stock Control",
    desc: "Membangun sistem kontrol stok, audit stock opname berkala, rotasi FIFO, dan mitigasi risiko kehilangan atau pembengkakan stok (dead stock).",
    icon: Boxes,
  },
  {
    title: "Multi-Branch & Operational Alignment",
    desc: "Mengkoordinasikan kebutuhan pengadaan barang/jasa lintas cabang dan unit operasional secara tepat waktu dan sesuai standar bisnis.",
    icon: Network,
  },
  {
    title: "Strategic Leadership & Human Capital",
    desc: "Menerapkan keilmuan Magister Manajemen SDM (S2) dalam memimpin tim operasional, negosiasi interpersonal, dan membangun kemitraan jangka panjang.",
    icon: Users,
  },
];

export default function ValueProposition() {
  return (
    <section id="expertise" className="section-container border-t border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left intro details */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-emerald-700 font-outfit">
            Value Proposition
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Saya berfokus pada penyelarasan strategi pengadaan (procurement) dengan efisiensi biaya bisnis — mengoptimalkan negosiasi harga, menjaga keandalan stok gudang, dan membangun rantai pasok yang tangguh.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-950 mt-2 no-print"
          >
            Selengkapnya Tentang Saya
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Right Value Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card flex flex-col gap-3 !p-5">
                <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <Icon size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-4xs text-slate-500 leading-relaxed mt-2">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
