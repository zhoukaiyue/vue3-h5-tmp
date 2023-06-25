<!--
 * @Descripttion: 顶级routerView
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-20 11:14:19
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-25 16:05:54
-->

<template>
    <div id="root-router-view" class="top-safe-area bottom-safe-area">
        <router-view v-slot="{ Component, route }">
            <!-- 缓存的视图 -->
            <keep-alive>
                <component v-if="route.meta.keepAlive" :key="route.name || route.fullPath" :is="Component" />
            </keep-alive>
            <!-- 不缓存的视图 -->
            <component v-if="!route.meta.keepAlive" :is="Component" />
        </router-view>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {};
    }
});
</script>

<style lang="scss" scoped>
#root-router-view {
    background-color: #f4f5f6;
    height: 100%;
    overflow-y: auto;
}

.top-safe-area {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
}

.bottom-safe-area {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
</style>
