import axios from "axios";
import { notification } from "ant-design-vue"
import { ContentTypeEnum } from "@/enums/http-enum.ts";
import router from "@/router";

const request = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 60000,
    headers: { 'Content-Type': ContentTypeEnum.JSON },
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            const { data, status, statusText } = error.response;
            if (status === 401) {
                notification?.error({
                    message: '401',
                    description: data?.msg || statusText,
                    duration: 3
                })
                router.push({path: '/login'}).then(() => {})
            } else if (status === 403) {
                notification?.error({
                    message: '403',
                    description: data?.msg || statusText,
                    duration: 3
                })
            } else if (status === 500) {
                notification?.error({
                    message: '500',
                    description: data?.msg || statusText,
                    duration: 3
                })
            } else {
                notification?.error({
                    message: '服务器内部错误，请联系管理员',
                    description: data?.msg || statusText,
                    duration: 3
                })
            }
        }
        return Promise.reject(error);
    }
)