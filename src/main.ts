/*
 * @Descripttion: 入口js文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-14 15:48:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-01-30 10:17:11
 */

import App from './App.vue';
// 导入router配置
import router from './packages/router';
// 导入pinia配置
import './packages/store';
// 全局基础样式
import 'tailwindcss/tailwind.css';
import './assets/css/index.scss';
// 导入全局插件
import '@/resources/plugin';
// 导入 vconsoel
import '@/packages/vConsole';

const app = createApp(App);

// 状态机初始化
app.use(createPinia());
// router初始化
app.use(router);

app.mount('#app');
