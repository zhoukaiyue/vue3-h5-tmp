<!--
 * @Descripttion: 404页面
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-14 15:48:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:06:30
-->

<template>
    <frame-view class="err404">
        <div class="bg"></div>
        <p class="text">抱歉，您访问的内容不存在～</p>
    </frame-view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.err404 {
    :deep(.frame-view-content) {
        background-color: #fff;
        .bg {
            width: 270px;
            height: 270px;
            background-image: url('@/assets/img/base/empty.png');
            background-repeat: no-repeat;
            background-position: 100%;
            background-color: #fff;
            background-size: 100%;
            margin: 300px auto auto;
        }
        .text {
            font-size: 30px;
            color: #666;
            text-align: center;
            line-height: 48px;
            margin-top: 15px;
        }
    }
}
</style>
