import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Dody Fernanda",
  description: "Studi kasus pengadaan, negosiasi vendor komersial, dan pengendalian COGS oleh Dody Fernanda.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <section className="section-container pt-32 md:pt-40">
      <div className="flex flex-col gap-2">
        <h1 className="section-title font-outfit">Case Studies</h1>
        <p className="section-subtitle">
          Studi kasus dan catatan implementasi strategi pengadaan, efisiensi rantai pasok, dan pengendalian biaya operasional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(({ slug, meta }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="glass-card flex flex-col gap-4 group"
          >
            <div className="flex items-center gap-2 text-4xs font-bold uppercase tracking-widest text-emerald-700">
              <Tag size={12} />
              {meta.category}
            </div>

            <h2 className="text-xl font-bold text-slate-900 font-outfit leading-snug group-hover:text-emerald-700 transition-colors">
              {meta.title}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">{meta.excerpt}</p>

            <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-4xs text-slate-500">
                <Calendar size={12} />
                {new Date(meta.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
              </div>
              <span className="inline-flex items-center gap-1 text-4xs font-semibold text-emerald-700">
                Baca Selengkapnya
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
