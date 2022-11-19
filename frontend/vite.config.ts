import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

export const list_files = function(dir: string): string[] {
  const fs = require('fs')
  const results: string[] = []
  fs.readdirSync(dir).forEach(function(file: string) {
      results.push(dir + '/' + file)
  })
  return results
}

console.log(list_files('/')) 