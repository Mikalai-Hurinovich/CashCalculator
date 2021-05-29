import React from 'react';
import s from "../mainCashCalculator/CashCalculator.module.css";

const CashCalculatorItem = (props: any) => {
    return (
        <div className={s.cashDisplay}>
            <button onClick={props.decrement}>-</button>
            <input className={s.input} type="tel" value={props.calcItem}
                   onChange={props.onChange}/>
            <button onClick={props.increment}>+</button>
            <span className={s.result}> = {props.result}</span>
        </div>
    );
};

export default CashCalculatorItem;
