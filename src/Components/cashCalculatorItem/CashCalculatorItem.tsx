import React from 'react';
import s from "../mainCashCalculator/CashCalculator.module.css";

const CashCalculatorItem = (props: any) => {
    return (
        <div className={s.cashDisplay}>
            <button onClick={() => props.setThousands(props.thousands - 1)}>-</button>
            <input className={s.input} type="tel" value={props.thousands}
                   onChange={e => {
                       props.setThousands(+(e.currentTarget.value))
                   }}/>
            <button onClick={() => props.setThousands(props.thousands + 1)}>+</button>
            <span className={s.result}> = {props.thousandsResult}</span>
        </div>
    );
};

export default CashCalculatorItem;
