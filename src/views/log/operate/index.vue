<template>
    <a-card>
        <a-form :model="queryForm" layout="inline">
            <a-form-item label="所属模块" name="title">
                <a-input v-model:value="queryForm.title" placeholder="所属模块" allow-clear />
            </a-form-item>
            <a-form-item label="状态" name="status">
                <a-select v-model:value="queryForm.status" placeholder="状态" style="width: 200px;" allow-clear>
                    <a-select-option value="1">成功</a-select-option>
                    <a-select-option value="2">失败</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="登录时间" name="createTime">
                <a-range-picker v-model:value="queryForm.createTime" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="handleSelect">查询</a-button>
            </a-form-item>
        </a-form>
        <div mt20px mb20px flex justify-between flex-row>
            <a-space>
                <a-button danger :disabled="selectedRowKeyList.length === 0" @click="handleBatchDelete">删除</a-button>
                <a-button danger @click="handleRemove">清空</a-button>
            </a-space>
            <TableOperation v-model="columns" :refresh="handleSelect" />
        </div>
        <a-table size="small" row-key="id" :data-source="tableData" :columns="columns" :loading="loading" :pagination="false"
                 :row-selection="{ selectedRowKeys: selectedRowKeyList, onChange: onSelectChange }">
            <template #bodyCell="{ text, column, record }">
                <template v-if="column.dataIndex === 'status'">
                    <a-tag color="success" v-if="record.status === '1'">
                        <template #icon><my-icon name="CheckCircleOutlined" /></template>
                        成功
                    </a-tag>
                    <a-tag color="error" v-if="record.status === '0'">
                        <template #icon><my-icon name="CloseCircleOutlined" /></template>
                        失败
                    </a-tag>
                </template>
                <template v-if="column.dataIndex === 'costTime'">
                    {{ text }} ms
                </template>
                <template v-if="column.dataIndex === 'operation'">
                    <a-button type="link" @click="handlePreview(record)">详情</a-button>
                </template>
            </template>
        </a-table>
        <div mt20px flex justify-end>
            <a-pagination show-size-changer :page-size-options="['10', '20', '30', '40', '50']"
                          v-model:current="queryForm.pageNum"
                          v-model:page-size="queryForm.pageSize"
                          :total="total"
                          @change="handleSelect"
                          @showSizeChange="handleSelect"
                          :show-total="() => `共${total}条`"
            >
                <template #buildOptionText="props">
                    <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
                    <span v-else>全部</span>
                </template>
            </a-pagination>
        </div>
    </a-card>
    <OperateLogModal ref="modalRef" />
</template>

<script setup lang="ts">
    import { Modal, message } from "ant-design-vue";

    const OperateLogModal = defineAsyncComponent(() => import('@/views/log/operate/modal.vue'))

    const modalRef = ref()
    const loading = ref(false)
    const queryForm = reactive({
        title: '',
        status: '',
        createTime: null,
        pageNum: 1,
        pageSize: 10
    })
    const columns = [
        {
            title: '所属模块',
            dataIndex: 'title',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '操作人员',
            dataIndex: 'operator',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '操作地点',
            dataIndex: 'ipaddr',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '请求地址',
            dataIndex: 'url',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '操作状态',
            dataIndex: 'status',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '消耗时间',
            dataIndex: 'costTime',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '登录日期',
            dataIndex: 'createTime',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '操作',
            dataIndex: 'operation',
            align: 'center',
            width: '160px'
        }
    ]
    const tableData = ref([
        {
            id: 1,
            title: '代码生成',
            operator: 'super_admin',
            ipaddr: '127.0.0.1',
            url: 'http://localhost:8080/gen',
            params: '',
            status: '1',
            costTime: '20',
            createTime: '2024-12-22',
        }
    ])
    const total = ref(0);
    const selectedRowKeyList = ref([])

    function onSelectChange(selectedRowKeys: any) {
        selectedRowKeyList.value = selectedRowKeys
    }

    const handleSelect = async () => {
        loading.value = true
        try {
            total.value = tableData.value.length
            console.log(queryForm);
        } catch (err: any) {
            message.error(err)
        } finally {
            loading.value = false
        }
    }

    const handleRemove = async () => {
        Modal.confirm({
            title: '提示',
            content: '确定要清空吗?',
            okText: '清空',
            okType: 'danger',
            onOk() {
                try {
                    loading.value = true
                    message.success('清空成功')
                    handleSelect()
                } catch (err: any) {
                    message.error(err)
                } finally {
                    loading.value = false
                }
            },
            cancelText: '取消',
            onCancel() {}
        })
    }

    const handleBatchDelete = async () => {
        Modal.confirm({
            title: '提示',
            content: '确定要删除这些数据吗?',
            okText: '删除',
            okType: 'danger',
            onOk() {
                try {
                    loading.value = true
                    console.log(selectedRowKeyList.value)
                    message.success('删除成功')
                    handleSelect()
                } catch (err: any) {
                    message.error(err)
                } finally {
                    loading.value = false
                }
            },
            cancelText: '取消',
            onCancel() {}
        })
    }

    const handlePreview = (data: any) => {
        modalRef.value.handleOpen(data)
    }

    onMounted(() => {
        handleSelect()
    })

</script>