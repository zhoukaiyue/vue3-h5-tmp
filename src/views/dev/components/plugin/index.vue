<script setup lang="ts">
import copy from './components/copy.vue';
</script>
<template>
    <frame-view class="dev-plugin">
        <van-notice-bar left-icon="volume-o" text="cli自带的一些特色插件。" />
        <!-- 使用 clipboard.js 轻松复制到 Vue 3 (composition-api) 中的剪贴板📋 -->
        <van-divider content-position="left">copy</van-divider>
        <copy></copy>
    </frame-view>
</template>

<style scoped lang="scss">
.dev-plugin {
    :deep(.frame-view-content) {
        background-color: #ffffff;
    }
}
</style>
