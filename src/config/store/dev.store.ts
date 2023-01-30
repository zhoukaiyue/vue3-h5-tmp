/*
 * @Descripttion: pinia切片文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 12:32:36
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-01-30 10:17:18
 */

// 第一个参数是应用程序中 store 的唯一 id
export const devStore = defineStore('devStore', {
    // 推荐使用 完整类型推断的箭头函数
    // state属性
    state: () => {
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
