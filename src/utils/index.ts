/**
 * 该文件本质上只是一个透传的作用。
 * 如果需要使用utils下面的方法，则只需要引入该文件。
 * 注: utils下的除index.ts 文件外的.ts 文件，应该以 命名导出 方式导出
 *
 * 使用案例：
 * 需求：使用 getCurrentUrlAssignKey api
 * 第一步： import { getCurrentUrlAssignKey } from '@/utils';
 * 第二步： getCurrentUrlAssignKey('id')
 */

/**
 * api名称：获取当前url指定参数;
 * */
export * from './getCurrentUrlAssignKey';
