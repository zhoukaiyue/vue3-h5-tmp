<!--
 * @Descripttion: 项目组axios使用说明文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 17:41:55
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 15:43:55
-->

## axios 库使用案列

### 引入 axios 库

```ts
//dev.ts
import { $post } from '@/packages/request';
```

### 定义接口

```ts
//dev.ts
// 导入接口验证器，主要是对接口入参、回参类型定义，方便后期维护
import type { getListDevValidator } from './validation';
// 功能接口
export const getListDev = (params: getListDevValidator.ParamType): Promise<getListDevValidator.ReturnType> => {
    return $post('/mock/14/demo/getList', params);
};
```

### 使用方法

```ts
// app.vue
// 导入功能接口函数
import { getListDev } from '@/config/apis/dev';
// 导入接口验证器
import type { getListDevValidator } from '@/config/apis/validation';
export default {
    name: 'dev-request',
    props: [],
    setup() {
        const state = reactive({});
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount');
        });
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted');
            // 请求参数
            const params: getListDevValidator.ParamType = {
                id: 1
            };
            // 加载加快
            getListDev(params)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    //
                });
        });
        const refState = toRefs(state);
        return {
            ...refState
        };
    }
};
```

## 目录说明

```
├─ apis
│  ├─ dev.ts                                     //模块对应的接口，为了方便维护与开发，建议接口文件命名与对应的模块或页面文件命名保持一致，尽量简洁明了。
│  ├─ README.md                                  //描述文件
│  └─ validation                                 //验证器
│     ├─ getListDev.ts                           //对应接口的验证器，为了方便维护与开发，建议接口验证器文件命名与对应的接口命名保持一致，尽量简洁明了。另：建议命名空间名称以 接口名称+Validator 规范命名，如 getListDevValidator。
│     └─ index.ts                                //统一导出验证器（需要在这里将所有的接口验证器统一导出）
```
