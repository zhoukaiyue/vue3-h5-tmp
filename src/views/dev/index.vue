<!--
 * @Descripttion: demo页
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-19 14:09:12
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:06:49
-->

<template>
    <frame-view class="dev">
        <div>
            <van-tag>vue3-h5-tmp</van-tag>&nbsp; 是基于&nbsp; create-vue（它是 Vue 官方的项目脚手架工具）。&nbsp;
            创建的基于 Vite 的项目。使用&nbsp; vant3+&nbsp; 作为 UI 组件库的一个移动端脚手架，开箱即用。
        </div>
        <div style="padding: 12px 0">下面是一些基础组件的使用demo，可以点进去试一试</div>
        <div class="nav">
            <div class="nav__block" v-for="(item, index) in findRouterList" :key="index" @click="goPage(item)">
                <span> {{ item.label }}</span>
                <van-icon name="arrow" size="16" color="#B6C3D2" />
            </div>
        </div>
    </frame-view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 定义 goPage 函数入参类型声明
export interface Gptype {
    path: string;
    label: string;
}

const findRouterList = ref([
    {
        path: '/dev/layOut',
        label: 'layOut 布局组件的使用'
    },
    {
        path: '/dev/list',
        label: 'list 下拉刷新滚动加载列表'
    },
    {
        path: '/dev/lodashjs',
        label: 'lodashjs 库的使用规范'
    },
    {
        path: '/dev/tabbar',
        label: 'tabbar 底部标签栏'
    },
    {
        path: '/dev/pinia',
        label: 'pinia状态管理的使用'
    },
    {
        path: '/dev/request',
        label: 'axios库的使用案列'
    }
]);

const router = useRouter();

function goPage({ path }: Gptype) {
    router.push({ path });
}
</script>

<style scoped lang="scss">
.dev {
    :deep(.frame-view-content) {
        font-size: 30px;
        background-color: #fff;
        padding: 46px 20px 20px;
        .nav {
            margin-top: 20px;
            .nav__block {
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                margin: 0 0 24px;
                padding: 0 40px;
                color: #323233;
                font-weight: bold;
                font-size: 28px;
                height: 80px;
                line-height: 80px;
                background: #f7f8fa;
                border-radius: 99px;
                transition: background 0.3s;
            }
        }
    }
}
</style>
