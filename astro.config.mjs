// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import critters from 'astro-critters';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://stolarzwsol.pl/',
  integrations: [react(), markdoc(), keystatic(), critters(), sitemap()],

  vite: {
      // @ts-expect-error - brak typów w @tailwindcss/vite
      plugins: [tailwindcss()],
  },

  adapter: netlify(),
});