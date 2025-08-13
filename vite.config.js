import { fileURLToPath, URL } from 'node:url'

import path from 'node:path'

import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // entry: path.resolve(__dirname, 'auto-translator/src/main.js'),
      entry: 'src/main.js',
      name: 'auto-translator',
      fileName: (format) => `auto-translator.${format}.js`
    }
  },
  plugins: [
    nodePolyfills({
      // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      // include: ['path'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      fs: require.resolve('rollup-plugin-node-builtins'),
    }
  }
})
