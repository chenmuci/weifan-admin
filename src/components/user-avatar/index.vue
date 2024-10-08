<template>
    <a-dropdown :trigger="['click']">
        <span class="user-space-item">
            <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" mr-8px size="small" />
            <span class="anticon">超级管理员</span>
        </span>
        <template #overlay>
            <a-menu @click="handleClick">
                <a-menu-item key="0">
                    <template #icon>
                        <my-icon name="UserOutlined" />
                    </template>
                    <RouterLink to="/account/center">
                        个人中心
                    </RouterLink>
                </a-menu-item>
                <a-menu-item key="1">
                    <template #icon>
                        <my-icon name="EditOutlined" />
                    </template>
                    <RouterLink to="/account/editPwd">
                        修改密码
                    </RouterLink>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="logout">
                    <template #icon>
                        <my-icon name="LogoutOutlined" />
                    </template>
                    退出登录
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script setup lang="ts">
    import { message } from "ant-design-vue"
    const router = useRouter()

    const handleClick = ({ key }: any) => {
        if (key === 'logout') {
            const hide = message.loading("退出登录...", 10)
            try {

            } finally {
                hide()
                message.success("已退出登录", 3)
                router.push({ path: '/login' })
            }
        }
    }
</script>