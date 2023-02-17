import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rollupReplace from '@rollup/plugin-replace';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    manifest: true
  },
  publicDir: 'public',
  plugins: [
    react(),
    tsconfigPaths(),
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('development')
      }
    }),
    EnvironmentPlugin([
      'NODE_ENV',
      'REACT_APP_NAME',
      'REACT_APP_PUBLIC_URL',
      'REACT_APP_API_URI',
      'REACT_APP_JWT_STORAGE_KEY'
    ])
  ]
});
