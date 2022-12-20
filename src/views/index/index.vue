<!--
 * @Descripttion: 首页
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-14 14:33:05
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-20 13:38:39
-->

<template>
    <frame-view class="index text-[28px]">
        <van-button type="primary" :to="{ path: '/dev' }">开发者中心</van-button>
    </frame-view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.index {
    :deep(.frame-view-content) {
        padding: 20px;
    }
}
</style>
