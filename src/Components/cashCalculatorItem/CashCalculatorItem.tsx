import React from 'react';
import s from "../mainCashCalculator/CashCalculator.module.css";

const CashCalculatorItem = (props: any) => {
    console.log('CashCalculatorItem render')
    return (
        <div className={s.cashDisplay}>
            <button disabled={props.calcItem <= 0} onClick={props.decrement}>-</button>

            <input className={s.input} type="tel"
                   value={props.calcItem}
                   onChange={props.onChange}
            />
            <button onClick={props.increment}>+</button>
            <span className={s.result}> = {props.result}</span>
        </div>
    );
};

export default React.memo(CashCalculatorItem, (prevProps, nextProps) => {
    return prevProps.calcItem === nextProps.calcItem
});
