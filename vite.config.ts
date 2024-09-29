import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'vue-i18n',
                '@vueuse/core',
                'pinia'
            ],
            dts: 'src/types/auto-imports.d.ts',
            dirs: ['src/stores', 'src/hooks'],
        }),
        Components({
            dts: 'src/types/components.d.ts',
            dirs: ['src/components']
        }),
        Unocss()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
})
