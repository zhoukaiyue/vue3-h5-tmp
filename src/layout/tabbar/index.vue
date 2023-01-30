<!--
 * @Descripttion: tabbar组件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-19 09:50:04
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-01-30 10:07:27
-->
<!-- <script setup lang='ts'></script> -->
<template>
    <van-tabbar route :fixed="true" class="frame-view-tabbar" :placeholder="true">
        <van-tabbar-item :to="item.router" :icon="item.icon" v-for="(item, index) in tabs" :key="index">
            {{ item.label }}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts">
export default {
    name: 'frame-view-tabbar',
    props: [],
    setup() {
        const state = reactive({
            active: 'home',
            tabs: [
                {
                    label: '首页',
                    icon: 'wap-home-o',
                    router: {
                        path: '/index'
                    }
                },
                {
                    label: '开发者中心',
                    icon: 'question-o',
                    router: {
                        path: '/dev'
                    }
                }
            ]
        });
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount');
        });
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted');
        });
        const refState = toRefs(state);
        return {
            ...refState
        };
    }
};
</script>

<style scoped lang="scss"></style>
