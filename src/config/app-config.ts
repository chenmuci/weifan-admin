import { AppConfig } from "@/types/config";

/**
 * 应用默认配置
 */
export const appDefaultConfig: AppConfig = {
    // i18n 语言选择
    language: 'zh_CN',
    // 布局: side 或者 side-expand 或者 top
    layout: 'side',
    // 菜单主题
    theme: 'light',
    // 主题颜色
    primaryColor: '#1677ff',
    // 菜单隐藏/显示
    collapsed: false,
    // 固定Header
    fixedHeader: true,
    // 面包屑
    breadCrumb: true,
    // 多页签
    multiTab: true,
    // 页脚
    footer: true,
    // 水印
    watermark: true,
    // 缓存
    keepAlive: true,
    // 紧凑
    compact: false,
    // 页面切换效果
    animation: 'slide-fadein-right',
    // 色弱模式
    colorWeak: false,
    // 灰色模式
    colorGray: false
};