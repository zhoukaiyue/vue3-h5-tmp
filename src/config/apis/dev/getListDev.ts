/*
 * @Descripttion: dev模块的接口配置
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 17:02:54
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-09-22 16:10:01
 */
import { $post } from '@/packages/request';

import type { getListDevValidator } from './validation/getListDev';

export const getListDev = (params: getListDevValidator.ParamType): Promise<getListDevValidator.ReturnType> => {
    return $post('/mock/14/demo/getList', params, {
        retryDelay: 4000, //当前请求重试间隔设置为4秒
        retryFrequency: 2 //当前请求重试次数（重试频率）2次
    });
};
