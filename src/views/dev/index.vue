<!--
 * @Descripttion: demo页
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-19 14:09:12
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-01 15:50:49
-->

<template>
    <frame-view class="dev text-[30px] bg-[#fff]">
        <div>
            <van-tag>vue3-h5-tmp</van-tag>
            基于 Vue3.x setup + TypeScript + Vite + Pinia + Vant3 + sass + tailwindcss + Rem 布局适配 + axios（封装）+
            Eslint + Prettier + dayjs 等流行技术栈构建移动端模板脚手架，开箱即用。
        </div>
        <div class="pt-[12px] pb-[12px]">下面是一些基础组件的使用demo，可以点进去试一试</div>
        <div class="mt-[20px]">
            <div class="nav-card" v-for="(item, index) in findRouterList" :key="index" @click="goPage(item)">
                <span>{{ item.label }}</span>
                <van-icon name="arrow" size="16" color="#B6C3D2" />
            </div>
        </div>
    </frame-view>
</template>

<script setup lang="ts">
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
        path: '/dev/tabbar',
        label: 'tabbar 底部标签栏'
    },
    {
        path: '/dev/pinia',
        label: 'pinia状态管理的使用'
    },
    {
        path: '/dev/tool',
        label: '脚手架已经集成的工具库'
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
        padding: 46px 20px 20px;

        // 使用 @apply 抽取组件类
        .nav-card {
            @apply flex
            flex-nowrap
            justify-between
            items-center
            mb-[24px]
            pl-[40px]
            pr-[40px]
            text-[#323233]
            font-bold
            text-[28px]
            h-[80px]
            leading-[80px]
            bg-[#f7f8fa]
            rounded-[99px];
        }
    }
}
</style>
