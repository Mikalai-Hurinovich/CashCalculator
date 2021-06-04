import React from 'react';
import s from './CashCalculator.module.css'
import CashCalculatorItem from "./cashCalculatorItem/CashCalculatorItem";

type cashCalcPropsType = {
    thousands: number
    fiveHundred: number
    twoHundred: number
    oneHundred: number
    setThousands: (thousands: number) => void
    setFiveHundred: (fiveHundred: number) => void
    setTwoHundred: (twoHundred: number) => void
    setOneHundred: (oneHundred: number) => void
    thousandsResult: number
    fiveHundredResult: number
    twoHundredResult: number
    oneHundredResult: number
    mainResult: number
    resetAll: () => void
}

const CashCalculator = (props: cashCalcPropsType) => {
    console.log('CashCalculator render')
    const onChangeCreator = (callback: (n: number) => void, value: number) => (e: React.FormEvent<HTMLInputElement>) => {
        callback(isNaN(+e.currentTarget.value) ? value : +e.currentTarget.value)
    }
    return (
        <div className={s.container}>
            <CashCalculatorItem
                currentCurrency={1000}
                decrement={() => props.setThousands(props.thousands - 1)}
                increment={() => props.setThousands(props.thousands + 1)}
                calcItem={props.thousands}
                onChange={onChangeCreator(props.setThousands, props.thousands)}
                result={props.thousandsResult}
            />
            <CashCalculatorItem
                currentCurrency={500}
                decrement={() => props.setFiveHundred(props.fiveHundred - 1)}
                increment={() => props.setFiveHundred(props.fiveHundred + 1)}
                calcItem={props.fiveHundred}
                onChange={onChangeCreator(props.setFiveHundred, props.fiveHundred)}
                result={props.fiveHundredResult}
            />
            <CashCalculatorItem
                currentCurrency={200}
                decrement={() => props.setTwoHundred(props.twoHundred - 1)}
                increment={() => props.setTwoHundred(props.twoHundred + 1)}
                calcItem={props.twoHundred}
                onChange={onChangeCreator(props.setTwoHundred, props.twoHundred)}
                result={props.twoHundredResult}
            />
            <CashCalculatorItem
                currentCurrency={100}
                decrement={() => props.setOneHundred(props.oneHundred - 1)}
                increment={() => props.setOneHundred(props.oneHundred + 1)}
                calcItem={props.oneHundred}
                onChange={onChangeCreator(props.setOneHundred, props.oneHundred)}
                result={props.oneHundredResult}
            />
            <div>Result: {props.mainResult}</div>
            <button onClick={props.resetAll}>Reset All</button>
        </div>
    );
};

export default React.memo(CashCalculator);
