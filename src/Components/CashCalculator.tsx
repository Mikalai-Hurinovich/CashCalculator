import React from 'react';
import s from './CashCalculator.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReduxRootState} from "../redux/store";
import {fiveHundredAC, initialStateType, oneHundredAC, thousandsAC, twoHundredAC} from "../redux/calclulatorReducer";

const CashCalculator = () => {
    const dispatch = useDispatch();
    const {
        thousands,
        fiveHundred,
        twoHundred,
        oneHundred
    } = useSelector<ReduxRootState, initialStateType>(state => state.cashCalculator)
    const setThousands = (thousands: number) => dispatch(thousandsAC(thousands))
    const setFiveHundred = (fiveHundred: number) => dispatch(fiveHundredAC(fiveHundred))
    const setTwoHundred = (twoHundred: number) => dispatch(twoHundredAC(twoHundred))
    const setOneHundred = (oneHundred: number) => dispatch(oneHundredAC(oneHundred))

    let thousandsResult = thousands * 1000
    let fiveHundredResult = fiveHundred * 500
    let twoHundredResult = twoHundred * 200
    let oneHundredResult = oneHundred * 100

    return (
        <div className={s.container}>
            <div className={s.cashDisplay}>
                <button onClick={() => setThousands(thousands - 1)}>-</button>
                <input className={s.input} type="number" value={thousands}
                       onChange={e => setThousands(+e.currentTarget.value)}/>
                <button onClick={() => setThousands(thousands + 1)}>+</button>
                <span className={s.result}> = {thousandsResult}</span>
            </div>
            <div className={s.cashDisplay}>
                <button onClick={() => setFiveHundred(fiveHundred - 1)}>-</button>
                <input className={s.input} type="number" value={fiveHundred}
                       onChange={e => setFiveHundred(+e.currentTarget.value)}/>
                <button onClick={() => setFiveHundred(fiveHundred + 1)}>+</button>
                <span className={s.result}> = {fiveHundredResult}</span>
            </div>
            <div className={s.cashDisplay}>
                <button onClick={() => setTwoHundred(twoHundred - 1)}>-</button>
                <input className={s.input} type="number" value={twoHundred}
                       onChange={e => setTwoHundred(+e.currentTarget.value)}/>
                <button onClick={() => setTwoHundred(twoHundred + 1)}>+</button>
                <span className={s.result}> = {twoHundredResult}</span>
            </div>
            <div className={s.cashDisplay}>
                <button onClick={() => setOneHundred(oneHundred - 1)}>-</button>
                <input className={s.input} type="number" value={oneHundred}
                       onChange={e => setOneHundred(+e.currentTarget.value)}/>
                <button onClick={() => setOneHundred(oneHundred + 1)}>+</button>
                <span className={s.result}> = {oneHundredResult}</span>
            </div>
            <div>Result: {thousandsResult + fiveHundredResult + twoHundredResult + oneHundredResult}</div>
        </div>
    );
};

export default CashCalculator;
