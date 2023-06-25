/* eslint-disable @typescript-eslint/no-explicit-any */
export function createPageScrollGuard(router: any) {
    const scrollPositions = ref<Record<string, number>>({}); //定义一个空对象用于保存每个页面的滚动位置
    router.beforeEach(async (to: any, from: any) => {
        if (from.meta?.keepAlive) {
            await nextTick();
            const $content = document.querySelector('.frame-view-content');
            const scrollTop = $content?.scrollTop || 0;
            scrollPositions.value[from.path] = scrollTop;
        }
        return;
    });

    router.afterEach(async (to: any) => {
        await nextTick();
        const $content = document.querySelector('.frame-view-content');
        if ($content) $content.scrollTop = scrollPositions.value[to.path] || 0;
    });
}
