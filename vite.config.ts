import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'dotenv/config';
export default defineConfig({
    base: process.env.VITE_BASE_PATH,
    plugins: [react()],
});
