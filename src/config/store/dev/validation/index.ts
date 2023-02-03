/**
 * 通过接口定义 state，并添加 state() 的返回值的类型。
 * 注：Pinia 会自动推断出你的 state 的类型，但在一些情况下，你得用一些方法来帮它一把。
 */
export interface StateValidator {
    count: number;
}
