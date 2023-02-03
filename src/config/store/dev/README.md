## store 模块使用说明

### 代码演示

#### 组合式 API

```html
<script lang="ts">
    // import 导入store
    import { useDevStore } from '@/config/store/dev';

    export default {
        setup() {
            /**
             * 获取store
             * 直接解构会失去响应式: 但是可以通过以下两种方式获取
             * 方式1: 通过计算属性获取
             * 方式2: 通过pinia 内置方法storeToRefs()解构
             */
            const store = useDevStore();

            /**
             * 错误写法：
             * 直接结构，这样写会失去响应。
             * const { count } = store;
             */

            // ---------------  正确写法至通过计算属性获取 START------------------
            /**
             * 通过计算属性获取
             */
            const count1 = computed({
                get: () => store.count,
                set: (val) => {
                    store.count = val;
                }
            });

            // methods ↓
            // 递加
            const add1 = () => {
                count1.value++;
            };
            // 递减
            const reduce1 = () => {
                count1.value--;
            };
            // 步进
            const decrease1 = () => {
                count1.value += 10;
            };
            // 重置，通过调用 store 的 $reset() 方法将 state 重置为初始值。
            const resetCount1 = () => {
                store.$reset();
            };
            // ---------------   END  ------------------

            // ---------------  正确写法之通过pinia 内置方法storeToRefs()解构 START------------------
            /**
             * 通过计算属性获取
             */
            const { count } = storeToRefs(store);

            // methods ↓
            // 递加
            const add2 = () => {
                count.value++;
            };
            // 递减
            const reduce2 = () => {
                count.value--;
            };
            // 步进
            const decrease2 = () => {
                count.value += 10;
            };
            // 重置，通过调用 store 的 $reset() 方法将 state 重置为初始值。
            const resetCount2 = () => {
                store.$reset();
            };
            // ---------------   END  ------------------

            // 返回值会暴露给模板和其他的选项式 API 钩子
            return {
                store,
                count1,
                add1,
                reduce1,
                decrease1,
                resetCount1,
                count,
                add2,
                reduce2,
                decrease2,
                resetCount2
            };
        }
    };
</script>
```

#### 单文件 \(<script setup>\)

```html
<script setup lang="ts">
    import { useDevStore } from '@/config/store/dev';
    /**
     * 获取store
     * 直接解构会失去响应式: 但是可以通过以下两种方式获取
     * 方式1: 通过计算属性获取
     * 方式2: 通过pinia 内置方法storeToRefs()解构
     */
    const store = useDevStore();

    /**
     * 错误写法：
     * 直接结构，这样写会失去响应。
     * const { count } = store;
     */

    // ---------------  正确写法至通过计算属性获取 START------------------
    /**
     * 通过计算属性获取
     */
    const count1 = computed({
        get: () => store.count,
        set: (val) => {
            store.count = val;
        }
    });

    // methods ↓
    // 递加
    const add1 = () => {
        count1.value++;
    };
    // 递减
    const reduce1 = () => {
        count1.value--;
    };
    // 步进
    const decrease1 = () => {
        count1.value += 10;
    };
    // 重置，通过调用 store 的 $reset() 方法将 state 重置为初始值。
    const resetCount1 = () => {
        store.$reset();
    };
    // ---------------   END  ------------------

    // ---------------  正确写法之通过pinia 内置方法storeToRefs()解构 START------------------
    /**
     * 通过计算属性获取
     */
    const { count } = storeToRefs(store);

    // methods ↓
    // 递加
    const add2 = () => {
        count.value++;
    };
    // 递减
    const reduce2 = () => {
        count.value--;
    };
    // 步进
    const decrease2 = () => {
        count.value += 10;
    };
    // 重置，通过调用 store 的 $reset() 方法将 state 重置为初始值。
    const resetCount2 = () => {
        store.$reset();
    };
    // ---------------   END  ------------------
</script>
```

### 常见问题

1、store 失去响应式

原因：直接解构会失去响应式: 但是可以通过以下两种方式获取

解决方法：

-   方式 1: 通过计算属性获取
-   方式 2: 通过 pinia 内置方法 storeToRefs()解构

### 目录说明

```
dev
├─ index.ts     // store核心代码
├─ README.md    // store 模块使用说明
└─ validation   // ts 校验器
   └─ index.ts
```
