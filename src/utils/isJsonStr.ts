/*
 * @Descripttion: 判断一个字符串是否是JSON格式字符串
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-09 14:09:12
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-09 14:10:58
 */

/**
 * 判断一个字符串是否是JSON格式字符串
 * @param  {string} str
 * @returns 通过返回值来判断：如果true 则是JSON格式，否则，不是JSON格式
 */
export function isJsonStr(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
