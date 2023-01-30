<!--
 * @Descripttion: pinia使用demo
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-17 16:16:39
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-01-30 10:19:47
-->

<template>
    <frame-view class="dev-pinia">
        <input :value="count" :readOnly="true" />
        <br />
        <van-button aria-label="Increment value" @click="add">增加</van-button>
        <van-button aria-label="Decrement value" @click="reduce">减少</van-button>
        <van-button aria-label="Decrement value" @click="decrease">步进</van-button>
        <van-button aria-label="Decrement value" @click="resetCount">重置</van-button>
    </frame-view>
</template>

<script setup lang="ts">
import { devStore } from '@/packages/store';

// 使用store
const testStore = devStore();
const { count } = storeToRefs(testStore);

// 直接修改store修改数据

// 递加
const add = () => {
    count.value++;
};

// 递减
const reduce = () => {
    count.value--;
};

// 步进
const decrease = () => {
    count.value += 10;
};

// 重置回初始数据
const resetCount = () => {
    testStore.$reset();
};

// // 调用action修改store
// const action = () => {
//     testStore.saveCountData(2);
// };
</script>

<style scoped lang="scss">
.dev-pinia {
    :deep(.frame-view-content) {
        background-color: #fff;
        color: '#333';
        font-size: 32px;
        padding: 40px;
    }
}
</style>
