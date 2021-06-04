import React, {useState} from 'react';
import s from './InnerCalculator.module.css'
import {useSelector} from "react-redux";
import {ReduxRootState} from "../../redux/store";
import {initialStateType} from "../../redux/calclulatorReducer";

type InnerCalculatorType = {
    mainResult: number
}
const InnerCalculator = (props: InnerCalculatorType) => {
    const [result, setResult] = useState('')
    // const cashCalcResult = useSelector<ReduxRootState, initialStateType>(state => state.cashCalculator)
    // const sumValues = (value: initialStateType) => Object.values(value).reduce((a, b) => a + b);
    // console.log(sumValues(cashCalcResult))
    const mainResult = () => {
        setResult(String(props.mainResult))
    }
    const handleClick = (e: React.ChangeEvent<any>) => {
        setResult(`${result + e.target.name}`)
    }
    const clear = () => {
        setResult('')
    }
    const backspace = () => {
        setResult(result.slice(0, -1))
    }
    const calculate = () => {
        try {
            setResult(eval(result).toFixed(2))
        } catch (e) {
            setResult('Error')
        }
    }
    return (
        <div className={s.container}>
            <form>
                <input onChange={() => console.log('onchange')} className={s.input} type="text" value={result}/>
            </form>
            <div className={s.keypad}>
                <button onClick={clear}>Clear</button>
                <button onClick={backspace}>C</button>
                <button onClick={mainResult}>⚡</button>
                <button onClick={handleClick} name={'/'}>/</button>
                <button onClick={handleClick} name={'7'}>7</button>
                <button onClick={handleClick} name={'8'}>8</button>
                <button onClick={handleClick} name={'9'}>9</button>
                <button onClick={handleClick} name={'*'}>&times;</button>
                <button onClick={handleClick} name={'4'}>4</button>
                <button onClick={handleClick} name={'5'}>5</button>
                <button onClick={handleClick} name={'6'}>6</button>
                <button onClick={handleClick} name={'-'}>&ndash;</button>
                <button onClick={handleClick} name={'1'}>1</button>
                <button onClick={handleClick} name={'2'}>2</button>
                <button onClick={handleClick} name={'3'}>3</button>
                <button onClick={handleClick} name={'+'}>+</button>
                <button onClick={handleClick} name={'0'}>0</button>
                <button onClick={handleClick} name={'.'}>.</button>
                <button className={s.equal} onClick={calculate}>=</button>
            </div>
        </div>
    );
};

export default InnerCalculator;
