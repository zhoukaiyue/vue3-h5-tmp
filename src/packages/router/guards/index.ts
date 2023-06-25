/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPageLoadingGuard } from './page-loading-guard';
import { createPageTitleGuard } from './page-title-guard';
import { createPageScrollGuard } from './page-scroll-guard';
export function createGuardSlice(router: any) {
    createPageLoadingGuard(router);
    createPageTitleGuard(router);
    createPageScrollGuard(router);
}
