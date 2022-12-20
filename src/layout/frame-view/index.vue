<!--
 * @Descripttion: frameView布局组件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 14:48:41
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-20 12:37:07
-->

<template>
    <div :class="[props.showTabbar ? 'h-tabbar' : '', 'frame-view w-full h-full']">
        <!-- 内容 -->
        <div class="frame-view-content w-full h-full">
            <!-- 默认插槽 -->
            <slot name="default"></slot>
            <!-- tabbar -->
            <tabbar v-if="props.showTabbar" class="layout-tabbar w-screen h-[100px] text-[26px]"></tabbar>
        </div>
    </div>
</template>

<script setup lang="ts">
// 导入tabbar组件
import tabbar from '../tabbar/index.vue';

// props
const props = defineProps({
    showTabbar: {
        type: Boolean,
        default: false
    }
});
</script>

<script lang="ts">
export default {
    name: 'FrameView'
};
</script>

<style scoped lang="scss">
.frame-view {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    &-content {
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .layout-tabbar {
        box-sizing: content-box;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fff;
    }
    &.h-tabbar {
        .frame-view-content {
            height: calc(100% - 100px);
        }
    }
}
</style>
