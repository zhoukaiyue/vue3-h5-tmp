<!--
 * @Descripttion: 404页面
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-14 15:48:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-20 13:43:57
-->

<template>
    <frame-view class="err404">
        <div class="bg mt-[300px] mx-[auto] w-[270px] h-[270px]"></div>
        <p class="mt-[15px] text-[30px] text-[#666] text-center leading-[48px]">抱歉，您访问的内容不存在～</p>
    </frame-view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.err404 {
    :deep(.frame-view-content) {
        background-color: #fff;
        .bg {
            background-image: url('@/assets/img/base/empty.png');
            background-repeat: no-repeat;
            background-position: 100%;
            background-color: #fff;
            background-size: 100%;
        }
    }
}
</style>
