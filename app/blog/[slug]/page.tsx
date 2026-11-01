import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { postSlugs } from "@/lib/blog";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

async function loadPost(slug: string) {
  try {
    return await import(`@/content/blog/${slug}.mdx`);
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return {};
  return {
    title: `${post.metadata.title} — Dody Fernanda`,
    description: post.metadata.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  const { default: Post, metadata } = post;

  return (
    <article className="section-container pt-32 md:pt-40 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors w-fit no-print"
      >
        <ArrowLeft size={14} />
        Kembali ke Case Studies
      </Link>

      <div className="flex flex-col gap-3 border-b border-slate-100 pb-8">
        <div className="flex items-center gap-2 text-4xs font-bold uppercase tracking-widest text-emerald-700">
          <Tag size={12} />
          {metadata.category}
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-outfit leading-tight">
          {metadata.title}
        </h1>
        <div className="flex items-center gap-1.5 text-4xs text-slate-500">
          <Calendar size={12} />
          {new Date(metadata.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
        </div>
        {metadata.project && (
          <a
            href={`/#projects`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors w-fit mt-1"
          >
            Lihat Featured Project terkait →
          </a>
        )}
      </div>

      <div className="prose prose-slate max-w-none prose-headings:font-outfit prose-headings:text-slate-900 prose-h2:text-2xl prose-h3:text-lg prose-h3:text-emerald-800 prose-a:text-emerald-700 prose-strong:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
        <Post />
      </div>
    </article>
  );
}
