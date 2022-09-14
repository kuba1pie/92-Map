import { defineConfig } from 'vitest/config'; import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    include: ['./test/**/*', './store/*.test.ts', './database/*.test.ts', './src/*.test.ts'],
    testTimeout: 15000,
  },
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/head'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    Pages({
      dirs: [{ dir: 'src/pages', baseRoute: '' }],
    }),
    Unocss({ /* options */ }),
  ],

})
