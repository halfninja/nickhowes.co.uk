import { defineConfig, squooshImageService } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://nickhowes.co.uk/',
  integrations: [
    mdx(), 
    svelte()
  ],
  image: {
    // sharp doesn't work on WSL2, so we'll use Squoosh instead
    service: squooshImageService(),
  },
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: ['remark-gfm', 'remark-smartypants'],
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
        },
      ],
    ],
  },
})