import { getCollection, type CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<'blog'>;
type BlogCollection = BlogEntry[];

export async function getAllBlogEntries(): Promise<BlogCollection> {
  return await getCollection('blog');
}

export async function getLiveBlogEntries(): Promise<BlogCollection> {
  return await getCollection('blog', ({data}) => data.draft !== true);
}

export function sort(entries: BlogCollection): void {
  entries.sort((a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf());
}

export async function getStaticPaths() {
  const blogEntries = await getLiveBlogEntries();
  return blogEntries.map(entry => ({
    params: { slug: entry.slug }, props: { entry },
  }));
};
