/*
 * @Descripttion: dev模块的接口配置
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 17:02:54
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:16:10
 */
import { $post } from '@/packages/request';

import type { GetListDevParamType, GetListDevReturnType } from './validation';

export const getListDev = (params: GetListDevParamType): Promise<GetListDevReturnType> => {
    return $post('/mock/14/demo/getList', params);
};
