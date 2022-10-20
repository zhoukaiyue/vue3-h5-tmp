/*
 * @Descripttion: 入口js文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-14 15:48:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:05:30
 */

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
// 导入基础布局组件
import FrameView from '@/layout';
// 导入router配置
import router from './packages/router';
// 导入pinia配置
import './packages/store';
// 全局基础样式
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

/**
 * 将基础布局组件注册为全局组件
 * 意味着在模板中你可以通过 <FrameView> 或 <frame-view> 引用。
 */
app.component('FrameView', FrameView);

app.mount('#app');
