/*
 * @Descripttion:用于根据当前请求的信息，生成请求 Key；
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-09 14:21:38
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-09 14:23:00
 */
import type { AxiosRequestConfigNew } from '../type';
// 工具函数之判断字符串是否是json字符串
import { isJsonStr } from '@/utils/isJsonStr';
// QS 模块
import QS from 'qs';

export function generateReqKey(config: AxiosRequestConfigNew) {
    // 响应的时候，response.config 中的data 是一个JSON字符串，所以需要转换一下
    if (config && config.data && isJsonStr(config.data)) {
        config.data = JSON.parse(config.data);
    }
    const { method, url, params, data } = config; // 请求方式，参数，请求地址，
    return [method, url, QS.stringify(params), QS.stringify(data)].join('&'); // 拼接
}
