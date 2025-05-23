import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import yaml from "@rollup/plugin-yaml"

export default defineConfig({
    plugins: [sveltekit(), yaml()],
    assetsInclude: ['**/*.svg']
});
