<template>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" @select="handleSelect"
            :mode="appConfig.layout === 'top' ? 'horizontal' : 'inline'" :theme="appConfig.theme"
            :collapsed="appConfig.collapsed" @openChange="handleOpenKey">
        <template v-for="item in props.routes">
            <a-sub-menu v-if="item.children && item.children.length > 0" :key="item.path">
                <template #icon>
                    <my-icon :name="item.icon" />
                </template>
                <template #title>
                    <span>{{ item?.title }}</span>
                </template>
                <SubMenu :routes="item.children" />
            </a-sub-menu>
            <template v-else>
                <a-menu-item :key="item.path">
                    <template #icon>
                        <my-icon :name="item.icon" />
                    </template>
                    <span>{{ item?.title }}</span>
                </a-menu-item>
            </template>
        </template>
    </a-menu>
</template>

<script setup lang="ts">
    const SubMenu = defineAsyncComponent(() => import('@/layouts/components/menu/sub-menu.vue'))

    const route = useRoute()
    const router = useRouter()
    const appStore = useAppStore()
    const { appConfig } = storeToRefs(appStore)
    const selectedKeys = ref([route.path]);
    const openKeys = ref();
    const props = defineProps(["routes"])

    const handleOpenKey = (keys: any) => {
        return openKeys.value = keys.length ? [keys[keys.length - 1]] : []
    }

    const handleSelect = (item: any) => {
        router.push(item.key)
    }

    watch(
        () => route.fullPath,
        () => {
            selectedKeys.value = [route.meta?.activeMenu ?? route.path] as string[]
            openKeys.value = [route.fullPath]
        },
        {
            immediate: true
        }
    )
</script>

<style lang="less" scoped>
.ant-menu-light.ant-menu-root.ant-menu-inline,.ant-menu-light.ant-menu-root.ant-menu-vertical {
    border-inline-end:unset!important
}
</style>