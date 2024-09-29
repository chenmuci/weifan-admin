<template>
    <a-dropdown :trigger="['click']">
        <span class="user-space-item">
            <my-icon name="HomeOutlined" />
        </span>
        <template #overlay>
            <a-menu>
                <a-menu-item key="zh-CN">
                    <template #icon>
                        <span>
                          🇨🇳
                        </span>
                    </template>
                    简体中文
                </a-menu-item>
                <a-menu-item key="en-US">
                    <template #icon>
                        <span>
                          🇺🇸
                        </span>
                    </template>
                    English
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script setup lang="ts">
    // const{ locale, setLocale } = useI18Locale()
    // const handleClick = ({ key }: any) => {
    //     setLocale(key)
    // }
</script>