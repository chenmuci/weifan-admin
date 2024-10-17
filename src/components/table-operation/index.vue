<template>
    <a-space>
        <a-tooltip title="刷新">
            <a-button type="text" @click="props.refresh">
                <template #icon><my-icon name="RedoOutlined" /></template>
            </a-button>
        </a-tooltip>
        <a-tooltip title="列设置">
            <a-button type="text">
                <template #icon><my-icon name="SettingOutlined" /></template>
            </a-button>
        </a-tooltip>
    </a-space>
</template>

<script setup lang="ts">
    const emit = defineEmits(['update:modelValue']);
    const props = defineProps({
        modelValue: {
            type: Array,
            default: []
        },
        refresh: {
            type: Function,
            required: true
        },
        tableId: {
            type: Number,
            require: true
        }
    })
</script>