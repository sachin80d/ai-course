import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		chunkSizeWarningLimit: 1600, // Avoid chunk warnings
		minify: false, // Disable minification for faster builds
	  }
});
