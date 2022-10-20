/*
 * @Descripttion: dev模块的 router配置文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 16:28:54
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:15:17
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
        path: '/dev/lodashjs',
        meta: {
            title: 'lodashjs 库的使用规范'
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/dev/components/lodashjs/index.vue')
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
        path: '/dev/request',
        meta: {
            title: 'axios库的使用案列'
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/dev/components/request/index.vue')
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
    }
];
export default routes;
