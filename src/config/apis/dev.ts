/*
 * @Descripttion: dev模块的接口配置
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 17:02:54
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 15:39:16
 */
import { $post } from '@/packages/request';

import type { getListDevValidator } from './validation';

export const getListDev = (params: getListDevValidator.ParamType): Promise<getListDevValidator.ReturnType> => {
    return $post('/mock/14/demo/getList', params);
};
