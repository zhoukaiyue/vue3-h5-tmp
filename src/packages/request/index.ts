/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-08-08 10:53:58
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-18 17:32:16
 */
import axios from 'axios';
import QS from 'qs';

// 请求库laoding
import laoding from './loading';
// axios 基础配置
//  将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
axios.defaults.baseURL = import.meta.env.VITE_APP_AXIOS_BASEURL;
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true;
// 请求超时时间设定
axios.defaults.timeout = 10000;

// 拦截器
// 添加请求拦截器
axios.interceptors.request.use(
    function (config) {
        laoding.show();
        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        laoding.hide();
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        laoding.hide();
        // 对响应数据做点什么
        return response;
    },
    function (error) {
        laoding.hide();
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
