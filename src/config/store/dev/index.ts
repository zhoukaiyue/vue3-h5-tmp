/*
 * @Descripttion: pinia切片文件-dev
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-11-28 12:32:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-02-02 17:02:10
 */

// state的接口定义，更好的Typescript体验。
import type { StateValidator } from './validation';

/**
 * 创建 Store
 * 你可以对 Store进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
 * (比如 `useUserStore`，`useCartStore`，`useProductStore`)
 */
export const useDevStore = defineStore({
    id: 'dev', //这个是你的应用中 Store 的唯一 ID。
    // 推荐使用 完整类型推断的箭头函数
    // state属性
    state: (): StateValidator => {
        return {
            count: 0
        };
    },
    // getters
    getters: {
        getCountData: (state) => {
            return '获取到count' + state.count;
        }
    },
    // actions
    actions: {
        saveCountData(count: number) {
            this.count = count;
        }
    }
});
