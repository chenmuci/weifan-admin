<template>
    <a-row class="layout-header-user" justify="space-between">
        <a-col v-if="appConfig.layout === 'side'" style="height: 50px; display: flex">
            <span class="cursor-pointer flex items-center">
                <my-icon name="MenuUnfoldOutlined" :size="20" v-if="collapsed" @click="handleCollapsed" />
                <my-icon name="MenuFoldOutlined" :size="20" v-else @click="handleCollapsed" />
            </span>
            <span class="ml-6 cursor-pointer flex items-center">
                <a-breadcrumb>
                    <template v-for="item in breadCrumbList" :key="item.name">
                        <a-breadcrumb-item>{{ item.meta.title }}</a-breadcrumb-item>
                    </template>
                </a-breadcrumb>
            </span>
        </a-col>
        <a-col style="height: 50px; display: flex">
            <div v-if="appConfig.layout === 'top'" style="line-height: 50px;">
                <LayoutMenu :routes="getMenuList" />
            </div>
            <span class="cursor-pointer flex items-center">
                <a-space :size="10">
                    <my-icon name="SettingOutlined" class="user-space-item" />
                    <my-icon name="ExpandOutlined" class="user-space-item" />
                    <SelectLang />
                    <UserAvatar />
                </a-space>
            </span>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
    import MenuData from '@/api/menu.ts'

    const LayoutMenu = defineAsyncComponent(() => import('@/layouts/components/menu/menu.vue'))

    let route = useRoute()
    const appStore = useAppStore()
    const { appConfig } = storeToRefs(appStore)
    const collapsed = computed(() => appConfig.value.collapsed)

    //根据路由监听面包屑
    const breadCrumbList = computed(() => {
        return route.matched.filter(item => item.path !== '/')
    })

    const getMenuList = computed(() => {
        return MenuData
    })

    // 左侧路由展开/收起
    const handleCollapsed = () => {
        appConfig.value.collapsed = !appConfig.value.collapsed
    }
</script>

<style lang="less">
.layout-header-user {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #f6f6f6;
}
.user-space-item {
    height: 50px;
    display: flex;
    padding: 0 12px;
    cursor: pointer;
    align-items: center;
    a {
        color: inherit;
    }
}
.user-space-item:hover {
    background: rgba(0, 0, 0, 0.075);
}
</style>