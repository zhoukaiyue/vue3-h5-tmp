/*
 * @Descripttion: router构造
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 15:52:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:11:35
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_ROUTER_BASE),
    routes
});

router.beforeEach(
    async (
        to: {
            meta?: {
                title?: string;
                keepAlive?: boolean;
            };
        },
        from,
        next
    ) => {
        // 设置 doc.title
        if (to.meta && to.meta.title) {
            document.title = to.meta.title.toString();
            if (to.meta.keepAlive) {
                //
            }
        }

        //滚动行为
        // if (from.meta && from.meta.keepAlive) {
        //     Vue.nextTick(() => {
        //         const $content = document.querySelector('.frame-view-content');
        //         const scrollTop = ($content && $content.scrollTop) || 0;
        //         store.commit('SET_VUE_KEEP_SCROLL', scrollTop);
        //     });
        // }

        //显示router切换loading
        document.getElementById('toggle-loading')?.setAttribute('style', 'display:auto');
        next();
    }
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to) => {
    // 隐藏router切换loading
    document.getElementById('toggle-loading')?.setAttribute('style', 'display:none');

    //滚动行为
    // if (to.meta?.keepAlive) {
    //     Vue.nextTick(() => {
    //         const $content = document.querySelector('.frame-view-content');
    //         if ($content) {
    //             $content.scrollTop = store.state.vueKeepScroll;
    //         }
    //     });
    // }
});

export default router;
