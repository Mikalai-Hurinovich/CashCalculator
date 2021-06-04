import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ReduxRootState} from "../../redux/store";
import s from './CashCalculatorContainer.module.css'
import {
    fiveHundredAC,
    initialStateType,
    oneHundredAC,
    ResetAllToDefaultsAC,
    thousandsAC,
    twoHundredAC
} from "../../redux/calclulatorReducer";
import CashCalculator from "./CashCalculator";
import InnerCalculator from "../InnerCalculator/InnerCalculator";

const CashCalculatorContainer = () => {
    console.log('CashCalculatorContainer render')
    const dispatch = useDispatch();
    const {
        thousands,
        fiveHundred,
        twoHundred,
        oneHundred
    } = useSelector<ReduxRootState, initialStateType>(state => state.cashCalculator)

    const setThousands = useCallback((thousands: number) => dispatch(thousandsAC(thousands)), [dispatch])
    const setFiveHundred = useCallback((fiveHundred: number) => dispatch(fiveHundredAC(fiveHundred)), [dispatch])
    const setTwoHundred = useCallback((twoHundred: number) => dispatch(twoHundredAC(twoHundred)), [dispatch])
    const setOneHundred = useCallback((oneHundred: number) => dispatch(oneHundredAC(oneHundred)), [dispatch])
    const resetAll = useCallback(() => dispatch(ResetAllToDefaultsAC()), [dispatch])

    let thousandsResult = thousands * 1000
    let fiveHundredResult = fiveHundred * 500
    let twoHundredResult = twoHundred * 200
    let oneHundredResult = oneHundred * 100
    let mainResult = thousandsResult + fiveHundredResult + twoHundredResult + oneHundredResult
    return (
        <div className={s.mainContainer}>
            <CashCalculator
                thousands={thousands}
                fiveHundred={fiveHundred}
                twoHundred={twoHundred}
                oneHundred={oneHundred}
                setThousands={setThousands}
                setFiveHundred={setFiveHundred}
                setTwoHundred={setTwoHundred}
                setOneHundred={setOneHundred}
                thousandsResult={thousandsResult}
                fiveHundredResult={fiveHundredResult}
                twoHundredResult={twoHundredResult}
                oneHundredResult={oneHundredResult}
                mainResult={mainResult}
                resetAll={resetAll}
            />
            <InnerCalculator
                mainResult={mainResult}/>
        </div>
    );
};

export default React.memo(CashCalculatorContainer);
