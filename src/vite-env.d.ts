/// <reference types="vite/client" />
declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module "js-cookie";
declare module "nprogress";
declare module "lunar-javascript"
declare module "vue3-json-viewer"