import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), checker({}), tsconfigPaths(), svgr()],
  server: {
    port: 3000,
  },
});
