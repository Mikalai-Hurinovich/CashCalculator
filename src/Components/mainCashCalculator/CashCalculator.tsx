import React from 'react';
import s from './CashCalculator.module.css'
import CashCalculatorItem from "../cashCalculatorItem/CashCalculatorItem";

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
            <CashCalculatorItem
                decrement={() => props.setThousands(props.thousands - 1)}
                increment={() => props.setThousands(props.thousands + 1)}
                calcItem={props.thousands}
                onChange={(e: { currentTarget: { value: any } }) => {
                    props.setThousands(+(e.currentTarget.value))
                }}
                result={props.thousandsResult}
            />
            <CashCalculatorItem
                decrement={() => props.setFiveHundred(props.fiveHundred - 1)}
                increment={() => props.setFiveHundred(props.fiveHundred + 1)}
                calcItem={props.fiveHundred}
                onChange={(e: { currentTarget: { value: any } }) => {
                    props.setFiveHundred(+(e.currentTarget.value))
                }}
                result={props.fiveHundredResult}
            />
            <CashCalculatorItem
                decrement={() => props.setTwoHundred(props.twoHundred - 1)}
                increment={() => props.setTwoHundred(props.twoHundred + 1)}
                calcItem={props.twoHundred}
                onChange={(e: { currentTarget: { value: any } }) => {
                    props.setTwoHundred(+e.currentTarget.value)
                }}
                result={props.twoHundredResult}
            />
            <CashCalculatorItem
                decrement={() => props.setOneHundred(props.oneHundred - 1)}
                increment={() => props.setOneHundred(props.oneHundred + 1)}
                calcItem={props.oneHundred}
                onChange={(e: { currentTarget: { value: any } }) => {
                    props.setOneHundred(+e.currentTarget.value)
                }}
                result={props.oneHundredResult}
            />
            <div>Result: {props.thousandsResult + props.fiveHundredResult + props.twoHundredResult + props.oneHundredResult}</div>
        </div>
    );
};

export default CashCalculator;
