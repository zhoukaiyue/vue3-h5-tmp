/*
 * @Descripttion:首页 router配置文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:14:21
 */

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        meta: {
            title: '首页',
            keepAlive: true
        },
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (index.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/index/index.vue')
    }
];
export default routes;
