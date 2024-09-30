<template>
    <a-card>
        <a-tabs v-model:activeKey="activeKey" tab-position="left" animated>
            <a-tab-pane key="1" tab="系统设置"><SystemSetting /></a-tab-pane>
            <a-tab-pane key="2" tab="登录设置"><LoginSetting /></a-tab-pane>
            <a-tab-pane key="3" tab="反向代理服务器"><ReverseProxy /></a-tab-pane>
            <a-tab-pane key="4" tab="邮箱设置"><MailSetting /></a-tab-pane>
            <a-tab-pane key="5" tab="日志设置"><logSetting /></a-tab-pane>
            <a-tab-pane key="6" tab="备份与恢复"><Backup /></a-tab-pane>
            <a-tab-pane key="7" tab="授权许可"><License /></a-tab-pane>
            <a-tab-pane key="8" tab="关于"><About /></a-tab-pane>
        </a-tabs>
    </a-card>
</template>

<script setup lang="ts">
    const activeKey = ref('1')

    const SystemSetting = defineAsyncComponent(() => import("./components/system.vue"))
    const LoginSetting = defineAsyncComponent(() => import("./components/login.vue"))
    const ReverseProxy = defineAsyncComponent(() => import("./components/reverse-proxy.vue"))
    const MailSetting = defineAsyncComponent(() => import("./components/mail.vue"))
    const logSetting = defineAsyncComponent(() => import("./components/log.vue"))
    const Backup = defineAsyncComponent(() => import("./components/backup.vue"))
    const License = defineAsyncComponent(() => import("./components/license.vue"))
    const About = defineAsyncComponent(() => import("./components/about.vue"))
</script>