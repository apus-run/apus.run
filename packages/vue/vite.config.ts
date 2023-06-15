import { resolve } from 'node:path';

import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
	build: {
		lib: {
			entry: {
				index: resolve(root, 'src/index.ts'),
			},
			formats: ['es', 'cjs'],
			name: 'ReactHooks',
		},
		rollupOptions: {
			external: [
				"vue",
			]
		}
	},
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
	],
});
