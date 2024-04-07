<template>
    <!-- 用于渲染富文本内容的子组件 -->
    <RichTextEllipsis v-if="isRichText" :content="content" v-bind="$attrs" />
    <!-- 用于渲染普通字符串内容的子组件 -->
    <PlainTextEllipsis v-else :content="content" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import RichTextEllipsis from './components/RichTextEllipsis.vue';
import PlainTextEllipsis from './components/PlainTextEllipsis.vue';

const props = defineProps({
    content: {
        type: String
    }
});

const isRichText = computed(() => {
    return props.content && props.content.includes('<');
});
</script>
