<template>
    <a-layout>
        <LayoutMenu />
        <a-layout>
            <LayoutHeader />
            <a-layout-content class="p-4" :style="{ overflow: 'auto', height: 'calc(100vh - 86px)'}">
                <RouterView />
            </a-layout-content>
            <LayoutFooter v-if="appConfig.footer" />
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
    const LayoutMenu = defineAsyncComponent(() => import('@/layouts/components/menu/index.vue'))
    const LayoutHeader = defineAsyncComponent(() => import('@/layouts/components/header/index.vue'))
    const LayoutFooter = defineAsyncComponent(() => import('@/layouts/components/footer/index.vue'))

    const appStore = useAppStore()
    const { appConfig } = storeToRefs(appStore)
</script>