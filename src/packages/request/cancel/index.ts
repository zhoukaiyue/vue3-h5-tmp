/**
 * 取消重复的正在请求中的接口。
 * 1、如何判定重复请求?
 * 答：如果请求地址、请求方式、请求参数一样，那么我们就能认为是同一个请求。
 */

import axios from 'axios';
import type { AxiosRequestConfigNew } from '../type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pendingMap = new Map();
/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function setPendingKey(config: AxiosRequestConfigNew) {
    // eslint-disable-next-line prefer-const
    let { url, method, params, data } = config;
    return [url, method, JSON.stringify(params), typeof data === 'string' ? data : JSON.stringify(data)].join('&');
}

/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
function addPendingMap(config: AxiosRequestConfigNew) {
    const pendingKey = setPendingKey(config);
    config.cancelToken =
        config.cancelToken ||
        new axios.CancelToken((cancel) => {
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
    const pendingKey = setPendingKey(config);
    if (pendingMap.has(pendingKey)) {
        const cancelToken = pendingMap.get(pendingKey);
        cancelToken(pendingKey);
        pendingMap.delete(pendingKey);
    }
}

export { addPendingMap, removePendingRequest };
