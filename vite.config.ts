import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import cssInjected from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [react(), cssInjected()],
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'NerdyLib',
            fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        outDir: 'dist',
        sourcemap: true
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
    },
});