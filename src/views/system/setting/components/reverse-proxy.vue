<template>
    <a-typography><h5>反向代理服务器</h5></a-typography>
    <a-alert message="开启后，将会在本地监听一个端口，可以将http/https服务映射到本机。" type="info" mb-10px />
    <a-form layout="vertical" ref="formRef" :model="proxyForm">
        <a-form-item label="反向代理服务" name="enable" :rules="[{ required: true }]">
            <a-switch v-model:checked="proxyForm.enable" checked-children="启用" un-checked-children="禁用" />
        </a-form-item>
        <div flex flex-col gap-2>
            <div p-6 pb-0 border rounded-md>
                <a-row>
                    <a-col :span="2" pl8px pr8px>
                        <a-form-item label="HTTP" name="http">
                            <a-checkbox v-model:checked="proxyForm.http" :disabled="!proxyForm.enable">启用</a-checkbox>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6" pl8px pr8px>
                        <a-form-item label="监听地址" name="httpPort" :rules="[{ required: proxyForm.enable, message: '请输入监听地址' }]">
                            <a-input v-model:value="proxyForm.httpPort" allow-clear :disabled="!proxyForm.enable" />
                        </a-form-item>
                    </a-col>
                    <a-col pl8px pr8px>
                        <a-form-item label="自动重定向到HTTPS">
                            <a-checkbox v-model:checked="proxyForm.httpRedirect" :disabled="!proxyForm.enable" />
                        </a-form-item>
                    </a-col>
                </a-row>
            </div>
            <div p-6 pb-0 border rounded-md>
                <a-row>
                    <a-col :span="2" pl8px pr8px>
                        <a-form-item label="HTTPS">
                            <a-checkbox v-model:checked="proxyForm.https" :disabled="!proxyForm.enable">启用</a-checkbox>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6" pl8px pr8px>
                        <a-form-item label="监听地址" name="httpsPort" :rules="[{ required: proxyForm.enable, message: '请输入监听地址' }]">
                            <a-input v-model:value="proxyForm.httpsPort" allow-clear :disabled="!proxyForm.enable" />
                        </a-form-item>
                    </a-col>
                    <a-col pl8px pr8px>
                        <a-form-item label="自动申请HTTPS证书">
                            <a-checkbox v-model:checked="proxyForm.httpsSSL" :disabled="!proxyForm.enable" />
                        </a-form-item>
                    </a-col>
                </a-row>
            </div>
            <div p-6 border rounded-md>
                <a-row>
                    <a-col :span="2" pl8px pr8px>
                        <a-form-item label="代理自身系统">
                            <a-checkbox v-model:checked="proxyForm.local" :disabled="!proxyForm.enable">启用</a-checkbox>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6" pl8px pr8px>
                        <a-form-item label="域名" name="domain" :rules="[{ required: proxyForm.enable, message: '请输入域名' }]">
                            <a-input v-model:value="proxyForm.domain" allow-clear :disabled="!proxyForm.enable" />
                        </a-form-item>
                    </a-col>
                </a-row>
            </div>
            <div mb-6></div>
        </div>
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
    const proxyForm = reactive({
        enable: false,
        http: true,
        httpPort: '80',
        httpRedirect: true,
        https: true,
        httpsPort: '443',
        httpsSSL: true,
        local: true,
        domain: ''
    })
</script>