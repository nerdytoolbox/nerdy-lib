import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
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
});