/* eslint-disable @typescript-eslint/no-explicit-any */
export function createPageTitleGuard(router: any) {
    router.afterEach((to: { meta: any }) => {
        const { title = null } = to.meta || {};
        if (title) {
            document.title = title;
        }
    });
}
