import type { RouteRecordRaw } from 'vue-router'

export default [
    {
        path: '/',
        component: () => import('@/layouts/index.vue'),
        redirect: "/home",
        children: [
            {
                path: "/home",
                component: () => import("@/views/home/index.vue"),
                meta: {
                    title: '首页'
                }
            },
            {
                path: "/system",
                redirect: "/system/setting",
                meta: {
                    title: '系统管理'
                },
                children: [
                    {
                        path: "/system/setting",
                        component: () => import("@/views/system/setting/index.vue"),
                        meta: {
                            title: '系统配置'
                        }
                    }
                ]
            }
        ]
    }
] as RouteRecordRaw[]