import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ReduxRootState} from "../../redux/store";
import {fiveHundredAC, initialStateType, oneHundredAC, thousandsAC, twoHundredAC} from "../../redux/calclulatorReducer";
import CashCalculator from "./CashCalculator";

const CashCalculatorContainer = () => {
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
        <div>
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
            />
        </div>
    );
};

export default CashCalculatorContainer;
