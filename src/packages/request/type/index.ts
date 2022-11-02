import type { AxiosRequestConfig } from 'axios';

// 扩展 AxiosRequestConfig 类型
export interface AxiosRequestConfigNew extends AxiosRequestConfig {
    enableCancelModel?: boolean; //开启该功能则意味着同一个请求如果你发起多次，而且都是pending，则只会保持最后一次该请求，前面的都会被cancel掉。
}
