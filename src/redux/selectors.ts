import {cashDividersObj, CashKeyType, TypedState} from "./calclulatorReducer-modified";

export const totalCashSelector = (state: TypedState): number => {
    let res = 0;
    Object.keys(cashDividersObj).forEach((k: string) => {
        let key = k as CashKeyType;
        if (state[key]) {
            res = res + (state[key] * cashDividersObj[key])
        }
    })
    return res;
}
