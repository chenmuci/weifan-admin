<template>
    <a-layout-header class="layout-header x-side z-10">
        <LayoutHeaderUser />
    </a-layout-header>
</template>

<script setup lang="ts">
    const LayoutHeaderUser = defineAsyncComponent(() => import("@/layouts/components/header/user.vue"))
</script>

<style lang="less" scoped>
.layout-header {
    height: auto;
    background: #fff;
    padding: 0;
}
</style>