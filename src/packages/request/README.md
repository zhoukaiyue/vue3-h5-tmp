<!--
 * @Descripttion: 请求库使用说明
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-02 16:58:59
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-02 17:39:50
-->

## 基于 axios 二次封装的简约版请求库，该请求库默认支持一下功能：

-   取消重复请求
-   Loading (使用 Vant Toast.loading 实现)

### 引入

```ts
import { $post } from '@/packages/request';
```

## 代码演示

```ts
// 普通用法
export const getListDev = (params: any): Promise<any> => {
    return $post('/mock/14/demo/getList', params);
};

// 自定义配置
export const getListDev = (params: any): Promise<any> => {
    return $post('/mock/14/demo/getList', params, {
        enableCancelModel: false //针对该接口关闭 取消重复请求模式
    });
};
```

## 请求库 API

| 参数   | 说明                                                 | 类型   | 默认值 |
| ------ | ---------------------------------------------------- | ------ | ------ |
| url    | 是用于请求的服务器 URL (必传)                        | string | -      |
| params | 是作为请求主体被发送的数据(结合自己实际业务，非必传) | object | -      |
| config | 指定的配置(结合自己实际业务，非必传)                 | object | {}     |