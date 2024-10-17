<template>
    <a-modal v-model:open="open" width="700px" title="更新日志" @cancel="handleCancel">
        <div>
            <pre>{{ content }}</pre>
        </div>
        <template #footer>
            <a-button type="primary" @click="handleCancel">关 闭</a-button>
        </template>
    </a-modal>
</template>

<script setup lang="ts">
    const open = ref(false)
    const content = ref('');

    const handleOpen = (data: any) => {
        open.value = true
        content.value = data
    }

    const handleCancel = () => {
        open.value = false
    }

    defineExpose({
        handleOpen
    })
</script>