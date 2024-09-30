<template>
    <a-typography><h5>授权许可</h5></a-typography>
    <a-card>
        <a-descriptions title="许可证信息" :column="{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }">
            <template v-for="item in licenses">
                <a-descriptions-item>
                    <template #label><span style="color: rgba(0,0,0,0.45)">{{ item.label }}</span></template>
                    <a-typography>
                        <strong>{{ item.value }}</strong>
                    </a-typography>
                </a-descriptions-item>
            </template>
        </a-descriptions>
        <a-space>
            <a-button type="primary">导入授权</a-button>
            <a-button type="dashed" danger>在线授权</a-button>
        </a-space>
    </a-card>
</template>

<script setup lang="ts">
    const licenses = reactive([
        {
            label: '许可类型',
            value: '企业版'
        },
        {
            label: '机器码',
            value: '83AC8A9372CD8466A77F065F7032A297'
        },
        {
            label: '最大资产数',
            value: '无限制'
        },
        {
            label: '最大并发数',
            value: '无限制'
        },
        {
            label: '最大用户数',
            value: '无限制'
        },
        {
            label: '许可到期时间',
            value: '-'
        }
    ])
</script>