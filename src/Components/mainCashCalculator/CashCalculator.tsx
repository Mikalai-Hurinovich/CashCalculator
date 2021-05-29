import React from 'react';
import s from './CashCalculator.module.css'

type cashCalcPropsType = {
    thousands: number
    fiveHundred: number
    twoHundred: number
    oneHundred: number
    setThousands: (thousands: number) => void
    setFiveHundred: (thousands: number) => void
    setTwoHundred: (thousands: number) => void
    setOneHundred: (thousands: number) => void
    thousandsResult: number
    fiveHundredResult: number
    twoHundredResult: number
    oneHundredResult: number
}

const CashCalculator = (props: cashCalcPropsType) => {
    return (
        <div className={s.container}>
            <div className={s.cashDisplay}>
                <button onClick={() => props.setThousands(props.thousands - 1)}>-</button>
                <input className={s.input} type="tel" value={props.thousands}
                       onChange={e => {
                           props.setThousands(+(e.currentTarget.value))
                       }}/>
                <button onClick={() => props.setThousands(props.thousands + 1)}>+</button>
                <span className={s.result}> = {props.thousandsResult}</span>
            </div>
            <div className={s.cashDisplay}>
                <button onClick={() => props.setFiveHundred(props.fiveHundred - 1)}>-</button>
                <input className={s.input} type="tel" value={props.fiveHundred}
                       onChange={e => props.setFiveHundred(+e.currentTarget.value)}/>
                <button onClick={() => props.setFiveHundred(props.fiveHundred + 1)}>+</button>
                <span className={s.result}> = {props.fiveHundredResult}</span>
            </div>
            <div className={s.cashDisplay}>
                <button onClick={() => props.setTwoHundred(props.twoHundred - 1)}>-</button>
                <input className={s.input} type="tel" value={props.twoHundred}
                       onChange={e => props.setTwoHundred(+e.currentTarget.value)}/>
                <button onClick={() => props.setTwoHundred(props.twoHundred + 1)}>+</button>
                <span className={s.result}> = {props.twoHundredResult}</span>
            </div>
            <div className={s.cashDisplay}>
                <button onClick={() => props.setOneHundred(props.oneHundred - 1)}>-</button>
                <input className={s.input} type="tel" value={props.oneHundred}
                       onChange={e => props.setOneHundred(+e.currentTarget.value)}/>
                <button onClick={() => props.setOneHundred(props.oneHundred + 1)}>+</button>
                <span className={s.result}> = {props.oneHundredResult}</span>
            </div>
            <div>Result: {props.thousandsResult + props.fiveHundredResult + props.twoHundredResult + props.oneHundredResult}</div>
        </div>
    );
};

export default CashCalculator;
