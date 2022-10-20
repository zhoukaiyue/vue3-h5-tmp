/*
 * @Descripttion: vConsole初始化
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 11:50:34
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:11:25
 */
import VConsole from 'vconsole';

const enable_vConsole = import.meta.env.VITE_APP_ENABLE_VCONSOLE;
enable_vConsole === '1' && new VConsole();
