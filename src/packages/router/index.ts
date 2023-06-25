/*
 * @Descripttion: router构造
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 15:52:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-11 23:40:35
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { createGuardSlice } from './guards';

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_ROUTER_BASE),
    routes
});

createGuardSlice(router);
export default router;
