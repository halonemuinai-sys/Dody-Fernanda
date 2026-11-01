"use client";

import { ArrowRight } from "lucide-react";
import ProjectFilter from "@/components/ProjectFilter";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-container border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 font-outfit">
            Featured <span className="text-emerald-700">Portfolios.</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
            Inisiatif strategis pengadaan, pengendalian COGS, dan manajemen operasional yang saya pimpin di berbagai sektor industri.
          </p>
        </div>
        <a
          href="#projects"
          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-950 no-print shrink-0 sm:mt-2"
        >
          Lihat Semua Portofolio
          <ArrowRight size={14} />
        </a>
      </div>

      <ProjectFilter />
    </section>
  );
}
