import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});


// export default defineConfig(({ command, mode }) => {
//     const env = loadEnv(mode, process.cwd(), '');
//     return {
//         define: {
//             'process.env.NODE_ENV': 'production',
//         },
//         plugins: [react()]
//     };
// });