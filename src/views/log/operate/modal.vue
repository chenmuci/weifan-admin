<template>
    <a-modal v-model:open="open" width="850px" title="日志详情" :footer="null" @cancel="handleCancel">
        <div class="info-box">
            <a-row>
                <a-col :span="16">
                    <a-row class="detail-info">
                        <a-col :span="12"> 所属模块： {{ detail.title }}</a-col>
                        <a-col :span="12"> 请求地址： {{ detail.url }}</a-col>
                    </a-row>
                    <a-row class="detail-info">
                        <a-col :span="12"> 登录信息： {{ detail.operator }} / {{ detail.ipaddr }}</a-col>
                        <a-col :span="12"> 请求方式： {{ detail.action }}</a-col>
                    </a-row>
                    <a-row class="detail-info">
                        <a-col> 操作方法： {{ detail.method }}</a-col>
                    </a-row>
                    <a-row class="detail-info">
                        <a-col :span="12"> 消耗时间： {{ detail.costTime }} ms</a-col>
                        <a-col :span="12"> 操作时间： {{ detail.createTime }}</a-col>
                    </a-row>
                </a-col>
                <a-col :span="8">
                    <p class="detail-right-title">请求状态</p>
                    <p :class="['detail-right', detail.status === '1' ? 'success' : 'error']">
                        {{ detail.status === '1' ? '成功' : '失败' }}
                    </p>
                </a-col>
            </a-row>
        </div>
        <div class="info-box1">
            <h4>请求参数：</h4>
            <JsonViewer :value="detail.params ? JSON.parse(detail.params) : ''" boxed copyable theme="jv-light" />
        </div>
        <div class="info-box1" v-if="detail.status === '0'">
            <h4>错误信息：</h4>
            <JsonViewer :value="detail.error ? JSON.parse(detail.error) : ''" boxed copyable theme="jv-light" />
        </div>
    </a-modal>
</template>

<script setup lang="ts">
    import JsonViewer from 'vue3-json-viewer';
    import 'vue3-json-viewer/dist/index.css';

    const open = ref(false)
    const detail = ref({
        title: '',
        operator: '',
        ipaddr: '',
        url: '',
        action: '',
        method: '',
        params: '',
        result: '',
        status: '',
        costTime: '',
        createTime: '',
        error: ''
    })

    const handleOpen = (data: any) => {
        open.value = true
        detail.value = data
    }

    const handleCancel = () => {
        open.value = false
    }

    defineExpose({
        handleOpen
    })
</script>

<style scoped lang="less">
.info-box {
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 8px;
}
.info-box1 {
    padding: 10px 8px;
}
.detail-info {
    .ant-col {
        line-height: 1.46;
        margin-bottom: 12px;
        padding-right: 5px;
    }
}
.detail-right-title {
    text-align: right;
    color: grey;
}
:deep(.ant-modal-body) {
    padding: 10px !important;
}
.detail-right {
    padding-left: 5px;
    font-size: 20px;
    font-weight: bold;
    text-align: right;
}
.success {
    color: #52c41a;
}
.error {
    color: #ff4d4f;
}
</style>