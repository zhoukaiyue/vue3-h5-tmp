/*
 * @Descripttion: 在代码中获取这些以 VITE_ 为前缀的用户自定义环境变量的 TypeScript 智能提示。
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-20 13:53:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:01:42
 */

/// <reference types="vite/client" />
/**
 * 在代码中获取这些以 VITE_ 为前缀的用户自定义环境变量的 TypeScript 智能提示。
 * @param VITE_APP_ROUTER_BASE  配置单页应用的基路径 Router base属性
 * @param VITE_APP_PUBLIC_URL  静态文件打包存放的目录 (vite.base属性)
 * @param VITE_APP_AXIOS_BASEURL   请求地址
 * @param VITE_APP_ENABLE_VCONSOLE 启用vconsole
 */
interface ImportMetaEnv {
    readonly VITE_APP_ROUTER_BASE: string;
    readonly VITE_APP_PUBLIC_URL: string;
    readonly VITE_APP_AXIOS_BASEURL: string;
    readonly VITE_APP_ENABLE_VCONSOLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
