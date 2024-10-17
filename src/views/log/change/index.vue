<template>
    <a-card>
        <a-form :model="queryForm" layout="inline">
            <a-form-item label="更新类型" name="type">
                <a-select v-model:value="queryForm.type" placeholder="更新类型" style="width: 200px;" allow-clear>
                    <a-select-option value="1">重大更新</a-select-option>
                    <a-select-option value="2">功能更新</a-select-option>
                    <a-select-option value="3">Bug修复</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="发布日期" name="createTime">
                <a-range-picker v-model:value="queryForm.createTime" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="handleSelect">查询</a-button>
            </a-form-item>
        </a-form>
        <div mt20px mb20px flex justify-between flex-row>
            <a-space>
                <a-button type="primary" @click="handleOpenForm">新增</a-button>
                <a-button danger :disabled="selectedRowKeyList.length === 0" @click="handleBatchDelete">批量删除</a-button>
            </a-space>
            <TableOperation v-model="columns" :refresh="handleSelect" />
        </div>
        <a-table size="small" row-key="id" :data-source="tableData" :columns="columns" :loading="loading" :pagination="false"
                 :row-selection="{ selectedRowKeys: selectedRowKeyList, onChange: onSelectChange }">
            <template #bodyCell="{ text, column, record }">
                <template v-if="column.key === 'version'">
                    <a-button @click="handleOpenModal(record.content)" type="link">{{ text }}</a-button>
                </template>
                <template v-if="column.key === 'type'">
                    <a-tag color="processing" v-if="record.type === '1'">
                        <template #icon><my-icon name="CheckCircleOutlined" /></template>
                        重大更新
                    </a-tag>
                    <a-tag color="success" v-if="record.type === '2'">
                        <template #icon><my-icon name="CheckCircleOutlined" /></template>
                        功能更新
                    </a-tag>
                    <a-tag color="warning" v-if="record.type === '3'">
                        <template #icon><my-icon name="CheckCircleOutlined" /></template>
                        Bug修复
                    </a-tag>
                </template>
                <template v-if="column.key === 'operation'">
                        <a-button type="link" @click="handleOpenForm(record)">编辑</a-button>
                        <a-button type="link" danger @click="handleDelete(record.id)">删除</a-button>
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
    <ChangeLogForm ref="formRef" />
    <ChangeLogModal ref="modalRef" />
</template>

<script setup lang="ts">
    import { Modal, message } from "ant-design-vue";

    const ChangeLogForm = defineAsyncComponent(() => import('@/views/log/change/form.vue'))
    const ChangeLogModal = defineAsyncComponent(() => import('@/views/log/change/modal.vue'))

    const formRef = ref()
    const modalRef = ref()
    const loading = ref(false)
    const queryForm = reactive({
        type: '',
        createTime: null,
        pageNum: 1,
        pageSize: 10
    })
    const columns = [
        {
            key: 'version',
            title: '版本',
            dataIndex: 'version',
            ellipsis: true,
            align: 'center'
        },
        {
            key: 'type',
            title: '更新类型',
            dataIndex: 'type',
            ellipsis: true,
            align: 'center'
        },
        {
            key: 'content',
            title: '更新内容',
            dataIndex: 'content',
            ellipsis: true,
            align: 'center'
        },
        {
            key: 'createBy',
            title: '发布人',
            dataIndex: 'createBy',
            ellipsis: true,
            align: 'center'
        },
        {
            key: 'createTime',
            title: '发布时间',
            dataIndex: 'createTime',
            ellipsis: true,
            align: 'center'
        },
        {
            key: 'operation',
            title: '操作',
            dataIndex: 'operation',
            align: 'center',
            width: '160px'
        }
    ]
    const tableData = ref([
        {
            id: 1,
            version: 'v1.0.0',
            type: '1',
            content: '微凡管理后台系统 v1.0.0 版本（2024-12-22）正式更新上线 \n' +
                    '\n' +
                    '1.【新增】人员管理\n' +
                    '2.【新增】系统设置\n' +
                    '3.【新增】缓存策略\n',
            createBy: '超级管理员',
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

    const handleOpenForm = (data: any) => {
        formRef.value.handleOpen(data)
    }

    const handleOpenModal = (data: any) => {
        modalRef.value.handleOpen(data)
    }

    const handleDelete = async (id: any) => {
        Modal.confirm({
            title: '提示',
            content: '确定要删除该数据吗?',
            okText: '删除',
            okType: 'danger',
            onOk() {
                try {
                    loading.value = true
                    console.log(id)
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

    const handleBatchDelete = async () => {
        Modal.confirm({
            title: '提示',
            content: '确定要批量删除这些数据吗?',
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

    onMounted(() => {
        handleSelect()
    })

</script>