import React, {ChangeEventHandler} from 'react';
import s from "../CashCalculator.module.css";

type CashCalculatorItemType = {
    decrement: () => void
    increment: () => void
    calcItem: number
    onChange: ChangeEventHandler<HTMLInputElement>
    result: number
    currentCurrency: number
}
const CashCalculatorItem = (props: CashCalculatorItemType) => {
    console.log('CashCalculatorItem render')
    return (
        <>
            <div className={s.cashDisplay}>
                <div className={s.currentCurrency}>{props.currentCurrency}</div>
                <button disabled={props.calcItem <= 0} onClick={props.decrement}>-</button>
                <input className={s.input} type="tel"
                       value={props.calcItem}
                       onChange={props.onChange}
                />
                <button onClick={props.increment}>+</button>
                <span className={s.result}> = {props.result}</span>
            </div>
        </>
    );
};

export default React.memo(CashCalculatorItem, (prevProps, nextProps) => {
    return prevProps.calcItem === nextProps.calcItem
});
