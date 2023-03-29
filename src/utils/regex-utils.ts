/*
 * @Descripttion:正则工具函数
 * @version:
 * @Author: zhoukai
 * @Date: 2023-03-29 11:21:20
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-29 11:21:34
 */

export const RegexUtils = {
    /**
     * 验证手机号码格式是否正确
     * @param phone 手机号码
     * @returns 返回是否符合手机号码格式的布尔值
     */
    isPhoneValid(phone: string): boolean {
        const regExp = /^1[3-9]\d{9}$/;
        return regExp.test(phone);
    },

    /**
     * 验证邮箱格式是否正确
     * @param email 邮箱
     * @returns 返回是否符合邮箱格式的布尔值
     */
    isEmailValid(email: string): boolean {
        const regExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/;
        return regExp.test(email);
    },

    /**
     * 验证身份证号码格式是否正确
     * @param idCard 身份证号码
     * @returns 返回是否符合身份证号码格式的布尔值
     */
    isIdCardValid(idCard: string): boolean {
        const regExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return regExp.test(idCard);
    }
};
