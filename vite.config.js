import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	base: '/grabbelton-nieuwjaar', // Replace with YOUR repository name
	plugins: [react()],
});