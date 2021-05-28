import {combineReducers, createStore} from "redux";
import CashReducer from "./calclulatorReducer";

const reducer = combineReducers({
    cashCalculator: CashReducer
})
export type ReduxRootState = ReturnType<typeof reducer>


let store = createStore(reducer)
export default store;

// @ts-ignore
window.store = store
