import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'dotenv/config';
import { defineConfig as vitestConfig } from 'vitest/config';

export default defineConfig({
    base: process.env.VITE_BASE_PATH,
    plugins: [react()],
    test: {
        globals: true, // Enables globals like `describe`, `it`, `expect`
        environment: 'jsdom', // Set the environment to jsdom for simulating the browser
        setupFiles: './src/setupTests.ts', // Optional: Global setup file for jest-dom and other configurations
        include: ['src/**/*.{test,spec}.{ts,tsx}'], // Specify test file pattern
    },
});
