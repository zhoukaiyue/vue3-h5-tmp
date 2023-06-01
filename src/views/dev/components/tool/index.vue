<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-05-22 14:13:42
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-01 15:07:11
-->
<script setup lang="ts">
const findRouterList = ref([
    {
        path: '/dev/tool/copy',
        label: 'JavaScript | 文本复制工具'
    },
    {
        path: '/dev/tool/lodashjs',
        label: 'JavaScript | lodashjs库的使用'
    }
]);

const router = useRouter();
function goPage({ path }: { path: string; label: string }) {
    router.push({ path });
}
</script>
<template>
    <frame-view class="dev-tool">
        <van-notice-bar left-icon="volume-o" text="脚手架已经集成的工具库" />
        <div class="mt-[20px]">
            <div class="nav-card" v-for="(item, index) in findRouterList" :key="index" @click="goPage(item)">
                <span>{{ item.label }}</span>
                <van-icon name="arrow" size="16" color="#B6C3D2" />
            </div>
        </div>
    </frame-view>
</template>

<style scoped lang="scss">
.dev-tool {
    :deep(.frame-view-content) {
        background-color: #ffffff;
        padding: 20px;

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
