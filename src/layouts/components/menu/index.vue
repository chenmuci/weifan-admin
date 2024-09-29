<template>
    <a-layout-sider :collapsed="appConfig.collapsed" :theme="appConfig.theme" class="x-side z-11"
                    :style="{ overflow: 'auto', height: '100vh'}">
        <div class="flex items-center gap-2 justify-center h-[60px]">
            <img src="../../../assets/images/logo.png" alt="logo" class="h-10 w-10">
        </div>
        <LayoutMenu :routes="getMenuList" />
    </a-layout-sider>
</template>

<script lang="ts" setup>
    import MenuData from '@/api/menu.ts'

    const LayoutMenu = defineAsyncComponent(() => import('@/layouts/components/menu/menu.vue'))

    const appStore = useAppStore()
    const { appConfig } = storeToRefs(appStore)

    const getMenuList = computed(() => {
        return MenuData
    })
</script>

<style lang="less" scoped>

</style>