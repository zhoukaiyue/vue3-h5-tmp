/*
 * @Descripttion: 取消请求。
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-09 15:28:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-09 17:46:53
 * @名词解释：
 * 1、如何判定重复请求?
 * 答：如果请求地址、请求方式、请求参数一样，那么我们就能认为是同一个请求。
 */

import axios from 'axios';
import type { AxiosRequestConfigNew } from '../type';

// 根据当前请求的信息，生成请求 Key
import { generateReqKey } from '../utils/generateReqKey';

// Map对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
const pendingMap = new Map();

/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
function addPendingMap(config: AxiosRequestConfigNew) {
    const pendingKey = generateReqKey(config);
    config.cancelToken = new axios.CancelToken((cancel) => {
        if (!pendingMap.has(pendingKey)) {
            pendingMap.set(pendingKey, cancel);
        }
    });
}

/**
 * 删除重复的请求
 * @param {*} config
 */
function removePendingRequest(config: AxiosRequestConfigNew) {
    const pendingKey = generateReqKey(config);

    if (pendingMap.has(pendingKey)) {
        const cancelToken = pendingMap.get(pendingKey);
        cancelToken(pendingKey);
        pendingMap.delete(pendingKey);
    }
}

export { addPendingMap, removePendingRequest };
