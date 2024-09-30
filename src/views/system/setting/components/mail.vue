<template>
    <a-typography><h5>邮箱设置</h5></a-typography>
    <a-row style="margin: 0 -8px;">
        <a-col :span="12" pl8px pr8px>
            <a-card>
                <a-form layout="vertical" ref="mailFormRef" :model="mailForm">
                    <a-form-item label="邮件服务" name="enable" :rules="[{ required: true }]">
                        <a-switch v-model:checked="mailForm.enable" checked-children="启用" un-checked-children="禁用" />
                    </a-form-item>
                    <a-form-item label="邮箱服务器" name="host" :rules="[{ required: mailForm.enable, message: '请输入' }]">
                        <a-input v-model:value="mailForm.host" allow-clear :disabled="!mailForm.enable" />
                    </a-form-item>
                    <a-form-item label="邮箱端口" name="port" :rules="[{ required: mailForm.enable, message: '请输入' }]">
                        <a-input v-model:value="mailForm.port" allow-clear :disabled="!mailForm.enable" />
                    </a-form-item>
                    <a-form-item label="邮箱账号" name="username" :rules="[{ required: mailForm.enable, message: '请输入' }]">
                        <a-input v-model:value="mailForm.username" allow-clear :disabled="!mailForm.enable" />
                    </a-form-item>
                    <a-form-item label="邮箱密码" name="password" :rules="[{ required: mailForm.enable, message: '请输入' }]">
                        <a-input-password v-model:value="mailForm.password" allow-clear :disabled="!mailForm.enable" />
                    </a-form-item>
                    <a-form-item label="SSL" name="ssl">
                        <a-switch v-model:checked="mailForm.ssl" checked-children="启用" un-checked-children="禁用" :disabled="!mailForm.enable" />
                    </a-form-item>
                    <a-form-item>
                        <a-space>
                            <a-button>重置</a-button>
                            <a-button type="primary">提交</a-button>
                        </a-space>
                    </a-form-item>
                </a-form>
            </a-card>
        </a-col>
        <a-col :span="12" pl8px pr8px>
            <a-card>
                <a-alert message="您需要开启邮箱后才可以发送测试邮件。" type="warning" mb-10px />
                <a-form layout="vertical" ref="sendFormRef" :model="sendForm">
                    <a-form-item label="邮件地址" :rules="[{ required: true, message: '请输入' }]">
                        <a-input v-model:value="sendForm.address" allow-clear />
                    </a-form-item>
                    <a-form-item label="邮箱标题" :rules="[{ required: true, message: '请输入' }]">
                        <a-input v-model:value="sendForm.title" allow-clear />
                    </a-form-item>
                    <a-form-item label="邮箱正文" :rules="[{ required: true, message: '请输入' }]">
                        <a-textarea v-model:value="sendForm.content" :rows="4" allow-clear />
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary">发送</a-button>
                    </a-form-item>
                </a-form>
            </a-card>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
    const mailFormRef = ref()
    const sendFormRef = ref()
    const mailForm = reactive({
        enable: false,
        host: '',
        port: '',
        username: '',
        password: '',
        ssl: false
    })
    const sendForm = reactive({
        address: '',
        title: '',
        content: ''
    })
</script>