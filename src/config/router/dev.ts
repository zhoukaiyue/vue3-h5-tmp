/*
 * @Descripttion: dev模块的 router配置文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 16:28:54
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-01 15:25:51
 */
const routes = [
    {
        path: '/dev',
        name: 'dev',
        meta: {
            title: '开发者中心'
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/dev/index.vue')
    },
    {
        path: '/dev/layOut',
        meta: {
            title: 'layOut 布局组件的使用'
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/dev/components/layOut/index.vue')
    },
    {
        path: '/dev/pinia',
        meta: {
            title: 'pinia状态管理的使用'
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/dev/components/pinia/index.vue')
    },
    {
        path: '/dev/tabbar',
        meta: {
            title: 'tabbar 底部标签栏'
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/dev/components/tabbar/index.vue')
    },
    {
        path: '/dev/tool',
        meta: {
            title: '脚手架已经集成的工具库'
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/dev/components/tool/index.vue')
    },
    {
        path: '/dev/tool/copy',
        meta: {
            title: 'JavaScript | 文本复制工具'
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/dev/components/tool/components/copy.vue')
    },
    {
        path: '/dev/tool/lodashjs',
        meta: {
            title: 'JavaScript | lodashjs库的使用'
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/dev/components/tool/components/lodashjs.vue')
    }
];
export default routes;
