import { readFileSync } from 'fs';

function getIcon(name: string): string {
  return readFileSync(`./node_modules/@fortawesome/fontawesome-free/svgs/${name}.svg`, 'utf8');
}

export const twitter = getIcon('brands/twitter');
export const github = getIcon('brands/github');
export const linkedIn = getIcon('brands/linkedin');
export const email = getIcon('regular/envelope');