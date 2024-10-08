import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", ({data}) => data.draft !== true);
  return rss({
    title: 'Nick Howes',
    description: 'Blog posts',
    site: context.site as URL,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-gb</language>`,
  })
}