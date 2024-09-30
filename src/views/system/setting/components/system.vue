<template>
    <a-typography><h5>系统设置</h5></a-typography>
    <a-form layout="vertical" ref="formRef" :model="systemForm">
        <a-form-item label="系统图标" name="logo" :rules="[{ required: true, message: '请上传系统图标' }]">
            <a-upload v-model:file-list="systemForm.logo" list-type="picture-card" class="system-logo">
                <div v-if="systemForm.background.length < 1">
                    <my-icon name="LoadingOutlined" v-if="loading" />
                    <my-icon name="PlusOutlined" v-else />
                </div>
            </a-upload>
        </a-form-item>
        <a-form-item label="系统名称" name="title" :rules="[{ required: true, message: '请输入系统名称' }]">
            <a-input v-model:value="systemForm.title" />
        </a-form-item>
        <a-form-item label="备案号" name="record">
            <a-input v-model:value="systemForm.record" />
        </a-form-item>
        <a-form-item label="系统版权" name="copyright" :rules="[{ required: true, message: '请输入系统版权' }]">
            <a-input v-model:value="systemForm.copyright" />
        </a-form-item>
        <a-form-item label="登录背景图片" name="background" :rules="[{ required: true, message: '请上传登录背景图片' }]">
            <a-upload v-model:file-list="systemForm.background" list-type="picture-card" class="login-background">
                <div v-if="systemForm.background.length < 1">
                    <my-icon name="LoadingOutlined" v-if="loading" />
                    <my-icon name="PlusOutlined" v-else />
                </div>
            </a-upload>
        </a-form-item>
    </a-form>
</template>

<script setup lang="ts">
    const loading = ref(false)
    const systemForm = reactive({
        logo: [],
        title: '',
        record: '',
        copyright: '',
        background: []
    })
</script>

<style scoped lang="less">
.system-logo :deep(.ant-upload.ant-upload-select-picture-card) {
    width: 60px;
    height: 60px;
}
.system-logo :deep(.ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-container) {
    width: 60px;
    height: 60px;
}
.login-background :deep(.ant-upload.ant-upload-select-picture-card) {
    width: 200px;
    height: 200px;
}
.login-background :deep(.ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-container) {
    width: 200px;
    height: 200px;
}
</style>