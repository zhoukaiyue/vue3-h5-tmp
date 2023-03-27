/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Descripttion: 操作本地 localStorage
 * @version:
 * @Author: zhoukai
 * @Date: 2023-02-07 17:29:30
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-27 16:31:43
 */

interface LocalStorageItem {
    value: any;
    expiredAt?: number;
}

export const handleLocalStorage = {
    /**
     * 设置localStorage
     * @param {string} key 键name
     * @param {*} value 值
     * @param {*} expiredAt 过期时间，如：1分钟 = 60 * 1000
     */
    set(key: string, value: any, expiredAt?: number) {
        const item: LocalStorageItem = {
            value
        };

        if (expiredAt) {
            item.expiredAt = new Date().getTime() + expiredAt;
        }

        localStorage.setItem(key, JSON.stringify(item));
    },

    /**
     * 获取localStorage
     * @param {string} key 键name
     * @returns {*}
     */
    get(key: string) {
        const itemString = localStorage.getItem(key);
        if (!itemString) {
            return null;
        }
        const item: LocalStorageItem = JSON.parse(itemString);
        if (item.expiredAt && new Date().getTime() > item.expiredAt) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    },

    /**
     * 删除localStorage
     * @param {string} key 键name
     */
    remove(key: string) {
        localStorage.removeItem(key);
    }
};
