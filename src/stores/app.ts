import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import { theme as antdTheme } from 'ant-design-vue/es'
import { appDefaultConfig } from '@/config/app-config'

export const useAppStore = defineStore('app', () => {
    // const { darkAlgorithm, compactAlgorithm, defaultAlgorithm } = antdTheme
    const appConfig = reactive(appDefaultConfig)
    const themeConfig = reactive<ThemeConfig>({
        algorithm: antdTheme.defaultAlgorithm,
        token: {
            colorBgContainer: '#fff',
            colorPrimary: appDefaultConfig.primaryColor
        },
        components: {}
    })

    const toggleCollapsed = (collapsed: boolean) => {
        appConfig.collapsed = collapsed
    }

    return {
        appConfig,
        theme: themeConfig,
        toggleCollapsed
    }
})