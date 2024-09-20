import { defineConfig } from 'unocss'

export default defineConfig({
    rules: [[/^p-(\d+)$/, (match) => ({ padding: `${match[1]}px` })]]
})