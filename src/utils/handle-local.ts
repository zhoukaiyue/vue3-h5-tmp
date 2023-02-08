/*
 * @Descripttion: 操作本地 localStorage
 * @version:
 * @Author: zhoukai
 * @Date: 2023-02-07 17:29:30
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-02-08 09:38:57
 */
export const handleLocalStorage = {
    /**
     * 设置localStorage
     * @param {string} key 键name
     * @param {*} value 值
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * 获取localStorage
     * @param {string} key 键name
     * @returns {*}
     */
    get(key: string) {
        return JSON.parse(localStorage.getItem(key) as string);
    },

    /**
     * 删除localStorage
     * @param {string} key 键name
     */
    remove(key: string) {
        localStorage.removeItem(key);
    }
};
