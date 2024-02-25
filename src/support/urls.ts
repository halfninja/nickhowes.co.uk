import type { AstroGlobal } from 'astro';

export function urlTo(config: AstroGlobal, path: string) {
  return (config.site?.href ?? '/') + path;
}