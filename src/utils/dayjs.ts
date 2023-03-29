/*
 * @Descripttion: dayjs 二次封装api
 * @version:
 * @Author: zhoukai
 * @Date: 2023-03-28 19:13:45
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-28 19:27:27
 */
import dayjs, { Dayjs } from 'dayjs';

interface Options {
    date?: string | Date | Dayjs;
    format?: string;
}

/**
 * 一个使用 Day.js 格式化指定日期的函数。如果没有提供日期，该函数将使用当前日期和时间。
 * @param {Object} param 格式 {date:new Date(),format:'YYYY-MM-DD HH:mm:ss'}
 * @param {string | Date | Dayjs} param.date 非必传，默认当前系统时间
 * @param {string} param.format 非必传，默认'YYYY-MM-DD HH:mm:ss'
 * @returns
 */
export const formatDate = ({ date = new Date(), format = 'YYYY-MM-DD HH:mm:ss' }: Options = {}): string => {
    return dayjs(date).format(format);
};
