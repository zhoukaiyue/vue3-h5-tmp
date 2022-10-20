/*
 * @Descripttion: .vue文件的类型说明文件，为了让typescript识别.vue文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-09-29 15:01:45
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:05:15
 */

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
