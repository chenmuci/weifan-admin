<template>
    <a-card>
        <a-form :model="queryForm" layout="inline">
            <a-form-item label="用户名称" name="username">
                <a-input v-model:value="queryForm.username" placeholder="用户名称" allow-clear />
            </a-form-item>
            <a-form-item label="状态" name="status">
                <a-select v-model:value="queryForm.status" placeholder="状态" style="width: 200px;" allow-clear>
                    <a-select-option value="1">登录成功</a-select-option>
                    <a-select-option value="2">登录失败</a-select-option>
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
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'status'">
                    <a-tag color="success" v-if="record.status === '1'">
                        <template #icon><my-icon name="CheckCircleOutlined" /></template>
                        登录成功
                    </a-tag>
                    <a-tag color="error" v-if="record.status === '0'">
                        <template #icon><my-icon name="CloseCircleOutlined" /></template>
                        登录失败
                    </a-tag>
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
</template>

<script setup lang="ts">
    import { Modal, message } from "ant-design-vue";

    const loading = ref(false)
    const queryForm = reactive({
        username: '',
        status: '',
        createTime: null,
        pageNum: 1,
        pageSize: 10
    })
    const columns = [
        {
            title: '用户名称',
            dataIndex: 'username',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '登录地址',
            dataIndex: 'ipaddr',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '登录地点',
            dataIndex: 'location',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '浏览器',
            dataIndex: 'browser',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '操作系统',
            dataIndex: 'os',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '登录状态',
            dataIndex: 'status',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '操作信息',
            dataIndex: 'msg',
            ellipsis: true,
            align: 'center'
        },
        {
            title: '登录日期',
            dataIndex: 'createTime',
            ellipsis: true,
            align: 'center'
        }
    ]
    const tableData = ref([
        {
            id: 1,
            username: 'super_admin',
            ipaddr: '127.0.0.1',
            location: '上海市|闵行区',
            browser: 'Chrome',
            os: 'Windows 11',
            status: '0',
            msg: '超级管理员',
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

    onMounted(() => {
        handleSelect()
    })

</script>