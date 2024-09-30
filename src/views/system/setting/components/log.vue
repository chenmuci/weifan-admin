<template>
    <a-typography><h5>日志设置</h5></a-typography>
    <a-form layout="vertical" ref="formRef" :model="logForm">
        <a-form-item label="日志服务" name="enable" :rules="[{ required: true }]">
            <a-switch v-model:checked="logForm.enable" checked-children="启用" un-checked-children="禁用" />
        </a-form-item>
        <a-form-item label="登录日志保存限制" name="loginLog">
            <a-select v-model:value="logForm.loginLog" :options="options" allow-clear :disabled="!logForm.enable"
                      style="width: 120px; margin-right: 10px;" /> 天
        </a-form-item>
        <a-form-item label="操作日志保存限制" name="actionLog">
            <a-select v-model:value="logForm.actionLog" :options="options" allow-clear :disabled="!logForm.enable"
                      style="width: 120px; margin-right: 10px;" /> 天
        </a-form-item>
        <a-form-item label="定时任务日志保存限制" name="tasksLog">
            <a-select v-model:value="logForm.tasksLog" :options="options" allow-clear :disabled="!logForm.enable"
                      style="width: 120px; margin-right: 10px;" /> 天
        </a-form-item>
        <a-form-item>
            <a-form-item>
                <a-space>
                    <a-button>重置</a-button>
                    <a-button type="primary">提交</a-button>
                </a-space>
            </a-form-item>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
    const logForm = reactive({
        enable: false,
        loginLog: 30,
        actionLog: 30,
        tasksLog: 30
    })
    const options = [
        {
            label: '♾️',
            value: 0
        },
        {
            label: '30',
            value: 30
        },
        {
            label: '60',
            value: 60
        },
        {
            label: '180',
            value: 180
        },
        {
            label: '360',
            value: 360
        }
    ]
</script>