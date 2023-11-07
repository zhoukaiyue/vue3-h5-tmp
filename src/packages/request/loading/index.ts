/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-10-18 13:53:26
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-25 17:27:33
 */
import Loading from './components/loading.js';

// 计数
let COUNT = 0;

const loading = {
    show() {
        if (COUNT === 0) {
            Loading.open();
        }
        COUNT++;
    },
    hide() {
        if (COUNT <= 0) return;
        COUNT--;
        if (COUNT === 0) Loading.close();
    }
};

export default loading;
