/*
 * @Descripttion:err类 router配置文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 11:03:13
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:14:54
 */

const routes = [
    {
        path: '/404',
        name: 'err404',
        // 路由级代码拆分
        // 这会为此路由生成一个单独的块 (errPage.[hash].js)
        // 访问路由时延迟加载。
        component: () => import('@/views/errPage/err404/index.vue')
    }
];
export default routes;
