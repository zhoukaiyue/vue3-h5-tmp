/* eslint-disable @typescript-eslint/no-explicit-any */

export function createPageLoadingGuard(router: any) {
    router.beforeEach(() => {
        document.getElementById('toggle-loading')?.setAttribute('style', 'display:auto');
    });

    router.afterEach(() => {
        document.getElementById('toggle-loading')?.setAttribute('style', 'display:none');
    });

    router.onError(() => {
        document.getElementById('toggle-loading')?.setAttribute('style', 'display:none');
    });
}
