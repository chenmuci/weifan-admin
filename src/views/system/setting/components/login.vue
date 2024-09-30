<template>
    <a-typography><h5>登录设置</h5></a-typography>
    <a-form layout="vertical" ref="formRef" :model="loginForm">
        <a-divider orientation="left">登录保护</a-divider>
        <a-row style="margin: 0 -8px;">
            <a-col :span="6" pl8px pr8px>
                <a-form-item label="图形验证码" name="captchaEnable" :rules="[{ required: true }]">
                    <a-switch v-model:checked="loginForm.captchaEnable" checked-children="启用" un-checked-children="禁用" />
                </a-form-item>
            </a-col>
            <a-col :span="6" pl8px pr8px>
                <a-form-item label="强制双因素认证" name="totpEnable" :rules="[{ required: true }]">
                    <a-switch v-model:checked="loginForm.totpEnable" checked-children="启用" un-checked-children="禁用" />
                </a-form-item>
            </a-col>
        </a-row>
        <a-row style="margin: 0 -8px;">
            <a-col :span="6" pl8px pr8px>
                <div flex items-center flex-wrap>
                    <a-form-item label="登录会话有效时长" name="sessionDuration">
                        <a-input-number v-model:value="loginForm.sessionDuration" style="width: 100%" />
                    </a-form-item>
                    <div style="margin-inline-start: 8px;">分钟</div>
                </div>
            </a-col>
            <a-col :span="6" pl8px pr8px>
                <a-form-item label="自定义登录会话有效数量" name="sessionCountEnable" :rules="[{ required: true }]">
                    <a-switch v-model:checked="loginForm.sessionCountEnable" checked-children="启用" un-checked-children="禁用" />
                </a-form-item>
            </a-col>
            <a-col :span="6" pl8px pr8px>
                <div flex items-center flex-wrap>
                    <a-form-item label="登录会话有效数量" name="sessionCount" :rules="[{ required: loginForm.sessionCountEnable }]">
                        <a-input-number v-model:value="loginForm.sessionCount" :disabled="!loginForm.sessionCountEnable" style="width: 100%" />
                    </a-form-item>
                    <div style="margin-inline-start: 8px;">设备</div>
                </div>
            </a-col>
        </a-row>
        <a-divider orientation="left">登录锁定</a-divider>
        <a-alert message="开启后，在指定时间内连续登录失败时，账号或IP将会被限制登录，解除限制请联系管理员。" type="info" mb-10px />
        <a-row style="margin: 0 -8px;">
            <a-col :span="6" pl8px pr8px>
                <a-form-item label="登录失败锁定" name="lockEnable" :rules="[{ required: true }]">
                    <a-switch v-model:checked="loginForm.lockEnable" checked-children="启用" un-checked-children="禁用" />
                </a-form-item>
            </a-col>
            <a-col :span="6" pl8px pr8px>
                <div flex items-center flex-wrap>
                    <a-form-item label="登录失败统计时长" name="lockDuration" :rules="[{ required: loginForm.lockEnable }]">
                        <a-input-number v-model:value="loginForm.lockDuration" :disabled="!loginForm.lockEnable" style="width: 100%" />
                    </a-form-item>
                    <div style="margin-inline-start: 8px;">分钟</div>
                </div>
            </a-col>
            <a-col :span="6" pl8px pr8px>
                <div flex items-center flex-wrap>
                    <a-form-item label="登录失败统计次数" name="lockCount" :rules="[{ required: loginForm.lockEnable }]">
                        <a-input-number v-model:value="loginForm.lockCount" :disabled="!loginForm.lockEnable" style="width: 100%" />
                    </a-form-item>
                    <div style="margin-inline-start: 8px;">次数</div>
                </div>
            </a-col>
        </a-row>
        <a-row style="margin: 0 -8px;">
            <a-col :span="6" pl8px pr8px>
                <div flex items-center flex-wrap>
                    <a-form-item label="账号锁定持续时间" name="accountLock" :rules="[{ required: loginForm.lockEnable }]">
                        <a-input-number v-model:value="loginForm.accountLock" :disabled="!loginForm.lockEnable" style="width: 100%" />
                    </a-form-item>
                    <div style="margin-inline-start: 8px;">分钟</div>
                </div>
            </a-col>
            <a-col :span="6" pl8px pr8px>
                <div flex items-center flex-wrap>
                    <a-form-item label="IP地址锁定持续时间" name="ipLock" :rules="[{ required: loginForm.lockEnable }]">
                        <a-input-number v-model:value="loginForm.ipLock" :disabled="!loginForm.lockEnable" style="width: 100%" />
                    </a-form-item>
                    <div style="margin-inline-start: 8px;">分钟</div>
                </div>
            </a-col>
        </a-row>
        <a-form-item>
            <a-space>
                <a-button>重置</a-button>
                <a-button type="primary">提交</a-button>
            </a-space>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
    const loginForm = reactive({
        captchaEnable: true,
        totpEnable: false,
        sessionDuration: 30,
        sessionCountEnable: true,
        sessionCount: 20,
        lockEnable: true,
        lockDuration: 40,
        lockCount: 3,
        accountLock: 30,
        ipLock: 30
    })
</script>