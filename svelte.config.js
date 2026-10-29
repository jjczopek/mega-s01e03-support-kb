import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
export default { extensions: ['.svelte', '.svx'], preprocess: [mdsvex({ extensions: ['.svx'], layout: { runbook: new URL('./src/lib/layouts/runbook.svelte', import.meta.url).pathname } })], kit: { adapter: adapter(), alias: { '#lib': './src/lib' } } };
