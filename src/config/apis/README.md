<!--
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2023-03-27 17:50:05
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-01-22 09:47:04
-->

## 接口创建规范

🚀 项目中使用到的接口都应当在该文件夹下，根据功能或者模块名称创建接口切片文件。
🚀 接口验证器统一放到该切片下的 validation/modeule 中，每个接口的验证器尽量独立成一个.d.ts 文件。
🚀 每一个接口验证器应该是一个空间，空间名称以 接口名称+Validator 命名，如 接口名称 getListDev，则空间名称应该是 getListDevValidator，这样就可以尽量减少变量命名重复。

注： 具体可参考 dev 模块的相关接口创建规范。

### 使用方法

```ts
// app.vue
// 导入功能接口函数
import { getListDev } from '@/config/apis/dev/getListDev';
// 导入接口验证器
import type { getListDevValidator } from '@/config/apis/dev/validation/getListDev';
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
│  ├─ dev                           // 接口切片
│  │  ├─ getListDev.ts              // 接口创建文件
│  │  │  └─ validation              // 接口验证器相关
│  │  │     └─ getListDev.d.ts      // 接口验证器核心文件
│  └─ README.md                     // 接口创建说明文档
```
