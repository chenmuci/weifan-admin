import type { RouteRecordRaw } from "vue-router";

export default [
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: { title: "登录" }
    },
    {
        path: "/401",
        component: () => import("@/views/exception/401.vue"),
        meta: { title: "未授权" }
    },
    {
        path: "/:pathMatch(.*)",
        component: () => import("@/views/exception/404.vue"),
        meta: { title: "找不到页面" }
    }
] as RouteRecordRaw[]