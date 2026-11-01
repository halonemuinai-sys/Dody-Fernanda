export interface BlogMeta {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  project?: string;
  tags: string[];
}

export const postSlugs = ["alsok-procurement-strategy", "a3000-cogs-cost-control"] as const;

export type PostSlug = (typeof postSlugs)[number];

export async function getPostMeta(slug: string): Promise<BlogMeta> {
  const post = await import(`@/content/blog/${slug}.mdx`);
  return post.metadata as BlogMeta;
}

export async function getAllPosts(): Promise<Array<{ slug: string; meta: BlogMeta }>> {
  const posts = await Promise.all(
    postSlugs.map(async (slug) => ({ slug, meta: await getPostMeta(slug) }))
  );
  return posts.sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}
