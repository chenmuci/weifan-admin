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
                path: "/log",
                redirect: "/log/change",
                meta: {
                    title: '日志管理'
                },
                children: [
                    {
                        path: "/log/change",
                        component: () => import("@/views/log/change/index.vue"),
                        meta: {
                            title: '更新日志'
                        }
                    },
                    {
                        path: "/log/login",
                        component: () => import("@/views/log/login/index.vue"),
                        meta: {
                            title: '登录日志'
                        }
                    },
                    {
                        path: "/log/operate",
                        component: () => import("@/views/log/operate/index.vue"),
                        meta: {
                            title: '操作日志'
                        }
                    }
                ]
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