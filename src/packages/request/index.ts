/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 10:53:58
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-18 17:32:16
 */
import axios from 'axios';
import type { AxiosRequestConfigNew } from './type';

import QS from 'qs';

// 请求库laoding
import laoding from './loading';
// 取消重复请求
import { addPendingMap, removePendingRequest } from './cancel';

// axios 基础配置
//  将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
axios.defaults.baseURL = import.meta.env.VITE_APP_AXIOS_BASEURL;
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true;
// 请求超时时间设定
axios.defaults.timeout = 10000;

/**
 * 是否开启取消重复请求模式, 默认为 true。
 * 开启该功能则意味着同一个请求如果你发起多次，而且都是pending，则只会保持最后一次该请求，前面的都会被cancel掉。
 * 注意：该属性设置的是全局的，如果你想在某一个请求上面禁掉该功能，则需要在请求配置中设置 enableCancelModel:false
 */
const enableCancelModel = true;

// 拦截器
// 添加请求拦截器
axios.interceptors.request.use(
    function (config: AxiosRequestConfigNew) {
        // 显示loading
        laoding.show();

        // 取消重复请求模式开启
        if (enableCancelModel) {
            // 先删除重复请求
            removePendingRequest(config);
            // 如果全局开启了取消重复请求模式并且保证你的配置值没设置enableCancelModel=false，则将该请求加入pending队列
            if (config.enableCancelModel !== false) addPendingMap(config);
        }

        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 隐藏loading
        laoding.hide();

        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        // 隐藏loading
        laoding.hide();

        // 响应完成，及时将该请求从队列清除
        enableCancelModel && removePendingRequest(response.config);

        // 对响应数据做点什么
        return response;
    },
    function (error) {
        // 隐藏loading
        laoding.hide();

        // 如果是超时或者断网情况下，及时将该请求从队列清除
        enableCancelModel && error.config && removePendingRequest(error.config);

        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

/**
 * post请求
 * 使用场景：适用于你的请求类型是post，入参格式是formData类型的
 * @param {*} url 接口地址
 * @param {*} params 入参
 * @param {*} config 其他配置项，默认为{}
 * @returns {Promise}
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const $post = (url: string, params: any, config = {}): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, QS.stringify(params), config)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

/**
 * post请求
 * 使用场景：适用于你的请求类型是post，入参格式是json类型的
 * @param {*} url 接口地址
 * @param {*} params 入参
 * @param {*} config 其他配置项，默认为{}
 * @returns {Promise}
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const $http = (url: string, params: any, config = {}): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, config)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
