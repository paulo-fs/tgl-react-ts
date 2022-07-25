import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@assets' : path.resolve(__dirname, './src/assets'),
			'@components' : path.resolve(__dirname, './src/components'),
			'@pages' : path.resolve(__dirname, './src/pages'),
			'@store' : path.resolve(__dirname, './src/store'),
			'@styles' : path.resolve(__dirname, './src/styles'),
			'@layouts' : path.resolve(__dirname, './src/layouts')
		}
	},
	plugins: [react()]
});
