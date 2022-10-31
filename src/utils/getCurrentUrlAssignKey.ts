import Qs from 'qs';
/**
 * 获取 当前url 指定参数的值
 * @param {string} name 参数名
 * @returns {string} 出参 如：当前uri：http://www.xxx.com/page?id=0   name传入id则返回0
 */
export const getCurrentUrlAssignKey = (name: string): string => {
    const index = location.href.indexOf('?');
    if (index === -1) return '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const o: any = Qs.parse(location.href.slice(index + 1));
    return o && o[name] && o[name] !== undefined ? o[name] : '';
};
