import Cookies from 'js-cookie';

// 获取本地存储的key
export const getLocal = (key: string) => {
    return JSON.parse(<string>window.localStorage.getItem(key));
}

// 保存key, value到本地存储
export const setLocal = (key: string, val: string) => {
    return window.localStorage.setItem(key, JSON.stringify(val));
}

// 删除本地存储的key
export const removeLocal = (key: string) => {
    return window.localStorage.removeItem(key);
}

// 清空本地存储
export const clearLocal = () => {
    return window.localStorage.clear();
}

// 获取Cookie的token
export const getToken = (): string | undefined => {
    return Cookies.get("token")
}

// 保存token到Cookie
export const setToken = (token: string): void => {
    Cookies.set("token", token, { expires: 30 / (24 * 60) })
}

// 清除Cookie的token
export const removeToken = (): void => {
    Cookies.remove("token")
}