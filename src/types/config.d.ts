/**
 *  语言 i18n
 */
export type LanguageType = 'zh_CN' | 'en';

/**
 * 三种布局: 左侧、顶部、混合
 */
export type LayoutType = 'side' | 'top' | 'fix';

/**
 * 主题： 亮色、暗色
 */
export type ThemeType = 'light' | 'dark';

/**
 * 动画效果
 */
export type AnimationType = 'none' | 'slide-fadein-up' | 'slide-fadein-right' | 'zoom-fadein' | 'fadein'

/**
 * 应用信息配置
 */
export interface AppConfig {
    // i18n 语言选择
    language: LanguageType;
    // 布局
    layout: LayoutType;
    // 主题
    theme: ThemeType;
    // 主题颜色
    primaryColor: string;
    // 菜单隐藏/显示
    collapsed: boolean,
    // 固定Header
    fixedHeader: boolean;
    // 面包屑
    breadCrumb: boolean;
    // 多页签
    multiTab: boolean;
    // 页脚
    footer: boolean;
    // 水印
    watermark: boolean;
    // 缓存
    keepAlive: boolean;
    // 紧凑模式
    compact: boolean;
    // 页面切换效果
    animation: AnimationType;
    // 色弱模式
    colorWeak: boolean;
    // 灰色模式
    colorGray: boolean;
}