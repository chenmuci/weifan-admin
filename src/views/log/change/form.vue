<template>
    <a-modal v-model:open="open" :title="form.id ? '编辑' : '新增'" @cancel="handleCancel" :maskClosable="false" :destroyOnClose="true">
        <a-form ref="formRef" :model="form" :rules="rules" :label-col="{ span: 4 }">
            <a-form-item label="版本" name="version">
                <a-input v-model:value="form.version" placeholder="版本" allow-clear />
            </a-form-item>
            <a-form-item label="更新类型" name="type">
                <a-select v-model:value="form.type" placeholder="更新类型" allow-clear>
                    <a-select-option value="1">重大更新</a-select-option>
                    <a-select-option value="2">功能更新</a-select-option>
                    <a-select-option value="3">Bug修复</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="发布人" name="createBy">
                <a-input v-model:value="form.createBy" placeholder="发布人" allow-clear />
            </a-form-item>
            <a-form-item label="发布日期" name="createTime">
                <a-date-picker v-model:value="form.createTime" placeholder="发布日期" value-format="YYYY-MM-DD" style="width: 100%" />
            </a-form-item>
            <a-form-item label="更新内容" name="content">
                <a-textarea v-model:value="form.content" placeholder="更新内容" :rows="15" />
            </a-form-item>
        </a-form>
        <template #footer>
            <a-button @click="handleCancel">关闭</a-button>
            <a-button type="primary" :loading="loading" @click="handleSubmit">保存</a-button>
        </template>
    </a-modal>
</template>

<script setup lang="ts">
    import _ from "lodash"
    import { message } from "ant-design-vue";

    const emits = defineEmits(['reload'])

    const formRef = ref()
    const loading = ref(false)
    const open = ref(false)
    const modalForm = reactive({
        id: undefined,
        version: undefined,
        type: undefined,
        content: undefined,
        createBy: undefined,
        createTime: undefined
    })
    let form = reactive({ ...modalForm })

    const rules = {
        version: [{ required: true, message: '版本 必填' }],
        type: [{ required: true, message: '更新类型:[1:重大更新;2:功能更新;3:bug修复] 必填' }],
        createBy: [{ required: true, message: '发布人 必填' }],
        createTime: [{ required: true, message: '发布日期 必填' }],
        content: [{ required: true, message: '更新内容 必填' }]
    }

    const handleOpen = (row: any) => {
        Object.assign(form, modalForm)
        if (row && !_.isEmpty(row)) {
            console.log(row);
            Object.assign(form, row)
        }
        open.value = true
        nextTick(() => {
            formRef.value.clearValidate()
        })
    }

    const handleCancel = () => {
        formRef.value.resetFields()
        open.value = false
    }

    const handleSubmit = async () => {
        try {
            await formRef.value.validateFields()
            emits('reload')
        } catch (err) {
            message.error('参数验证错误，请仔细填写表单数据!')
        }
    }

    defineExpose({
        handleOpen
    })
</script>