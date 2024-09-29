import { createRouter, createWebHistory } from "vue-router";
import staticRoutes from "@/router/static-routes.ts";
import dynamicRoutes from "@/router/dynamic-routes.ts"
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { setRouteEmitter } from "@/utils/route-listener.ts";
import { clearLocal, getToken, removeToken } from "@/utils/storage.ts";

const allowList = ['/login', '/error', '/401', '/404', '/403']
const loginPath = '/login'
const router = createRouter({
    history: createWebHistory(),
    routes: [ ...staticRoutes, ...dynamicRoutes ]
})

// 路由加载前
router.beforeEach((to, _, next) => {
    nProgress.start()
    setRouteEmitter(to)
    const token = getToken()
    // if (!token) {
    //     if (!allowList.includes(to.path) && !to.path.startsWith('/redirect')) {
    //         removeToken()
    //         clearLocal()
    //         next({
    //             path: loginPath,
    //             query: { redirect: encodeURIComponent(to.fullPath) }
    //         })
    //         return
    //     }
    // }
    next()
})

// 路由加载后
router.afterEach(() => {
    nProgress.done();
})

export default router