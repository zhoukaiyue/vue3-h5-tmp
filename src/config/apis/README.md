<!--
 * @Descripttion: 接口创建规范
 * @version:
 * @Author: zhoukai
 * @Date: 2022-10-18 17:41:55
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-27 17:00:58
-->

## 接口创建规范

🚀 项目中使用到的接口都应当在该文件夹下，根据功能或者模块名称创建接口切片文件。
🚀 接口验证器统一放到该切片下的 validation/modeule 中，每个接口的验证器尽量独立成一个.ts 文件。
🚀 每一个接口验证器应该是一个空间，空间名称以 接口名称+Validator 命名，如 接口名称 getListDev，则空间名称应该是 getListDevValidator，这样就可以尽量减少变量命名重复。
🚀 接口验证器最终需要在文件下的 validation 中的 index.ts 文件中导出。

注： 具体可参考 dev 模块的相关接口创建规范。

### 使用方法

```ts
// app.vue
// 导入功能接口函数
import { getListDev } from '@/config/apis/dev';
// 导入接口验证器
import type { getListDevValidator } from '@/config/apis/dev/validation';
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
│  ├─ dev.ts                                     //模块或同一功能依赖的相关接口
│  ├─ README.md                                  //描述文件
│  └─ validation                                 //接口验证器
│     ├─ getListDev.ts                           //getListDev接口的验证器
│     └─ index.ts                                //验证器出口文件
```
