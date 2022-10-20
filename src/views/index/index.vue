<!--
 * @Descripttion: 首页
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-14 14:33:05
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:06:12
-->

<template>
    <frame-view class="index">
        <van-button type="primary" :to="{ path: '/dev' }">开发者中心</van-button>
    </frame-view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.index {
    display: flex;
    font-size: 28px;
    :deep(.frame-view-content) {
        padding: 20px;
    }
}
</style>
