const SET_THOUSANDS = 'SET_THOUSANDS'
const SET_FIVE_HUNDRED = 'SET_FIVE_HUNDRED'
const SET_TWO_HUNDRED = 'SET_TWO_HUNDRED'
const SET_ONE_HUNDRED = 'SET_ONE_HUNDRED'
const SET_FIFTY = 'SET_FIFTY'
const SET_TWENTY = 'SET_TWENTY'
const SET_TEN = 'SET_TEN'
const SET_FIVE = 'SET_FIVE'
const SET_TWO = 'SET_TWO'
const SET_ONE = 'SET_ONE'
const SET_FIFTY_CENTS = 'SET_FIFTY_CENTS'
const SET_TWENTY_CENTS = 'SET_TWENTY_CENTS'
const SET_TEN_CENTS = 'SET_TEN_CENTS'
const SET_FIVE_CENTS = 'SET_FIVE_CENTS'
const SET_TWO_CENTS = 'SET_TWO_CENTS'
const SET_ONE_CENT = 'SET_ONE_CENT'
const RESET_ALL_TO_DEFAULTS = 'RESET_ALL_TO_DEFAULTS'
const SUM_ALL_VALUES = 'SUM_ALL_VALUES'

// Initial State
export type initialStateType = {
    thousands: number,
    fiveHundred: number,
    twoHundred: number,
    oneHundred: number,
    fifty: number,
    twenty: number,
    ten: number,
    five: number,
    two: number,
    one: number,
    fiftyCents: number,
    twentyCents: number,
    tenCents: number,
    fiveCents: number,
    twoCents: number,
    oneCent: number,
    allValues: number
}
let initialState: initialStateType = {
    thousands: 0,
    fiveHundred: 0,
    twoHundred: 0,
    oneHundred: 0,
    fifty: 0,
    twenty: 0,
    ten: 0,
    five: 0,
    two: 0,
    one: 0,
    fiftyCents: 0,
    twentyCents: 0,
    tenCents: 0,
    fiveCents: 0,
    twoCents: 0,
    oneCent: 0,
    allValues: 0
}
// Action Creators Types
type thousandsACType = ({ type: typeof SET_THOUSANDS, payload: { thousands: number } })
type fiveHundredACType = ({ type: typeof SET_FIVE_HUNDRED, payload: { fiveHundred: number } })
type twoHundredACType = ({ type: typeof SET_TWO_HUNDRED, payload: { twoHundred: number } })
type oneHundredACType = ({ type: typeof SET_ONE_HUNDRED, payload: { oneHundred: number } })
type fiftyACType = ({ type: typeof SET_FIFTY, payload: { fifty: number } })
type twentyACType = ({ type: typeof SET_TWENTY, payload: { twenty: number } })
type tenACType = ({ type: typeof SET_TEN, payload: { ten: number } })
type fiveACType = ({ type: typeof SET_FIVE, payload: { five: number } })
type twoACType = ({ type: typeof SET_TWO, payload: { two: number } })
type oneACType = ({ type: typeof SET_ONE, payload: { one: number } })
type fiftyCentsACType = ({ type: typeof SET_FIFTY_CENTS, payload: { fiftyCents: number } })
type twentyCentsACType = ({ type: typeof SET_TWENTY_CENTS, payload: { twentyCents: number } })
type tenCentsACType = ({ type: typeof SET_TEN_CENTS, payload: { tenCents: number } })
type fiveCentsACType = ({ type: typeof SET_FIVE_CENTS, payload: { fiveCents: number } })
type twoCentsACType = ({ type: typeof SET_TWO_CENTS, payload: { twoCents: number } })
type oneCentACType = ({ type: typeof SET_ONE_CENT, payload: { oneCent: number } })
type ResetAllToDefaultsType = ({ type: typeof RESET_ALL_TO_DEFAULTS })
type sumAllValuesType = ({ type: typeof SUM_ALL_VALUES, allValues: number })

// Action Creators
export const thousandsAC = (thousands: number) => ({type: SET_THOUSANDS, payload: {thousands}})
export const fiveHundredAC = (fiveHundred: number) => ({type: SET_FIVE_HUNDRED, payload: {fiveHundred}})
export const twoHundredAC = (twoHundred: number) => ({type: SET_TWO_HUNDRED, payload: {twoHundred}})
export const oneHundredAC = (oneHundred: number) => ({type: SET_ONE_HUNDRED, payload: {oneHundred}})
export const fiftyAC = (fifty: number) => ({type: SET_FIFTY, payload: {fifty}})
export const twentyAC = (twenty: number) => ({type: SET_TWENTY, payload: {twenty}})
export const tenAC = (ten: number) => ({type: SET_TEN, payload: {ten}})
export const fiveAC = (five: number) => ({type: SET_FIVE, payload: {five}})
export const twoAC = (two: number) => ({type: SET_TWO, payload: {two}})
export const oneAC = (one: number) => ({type: SET_ONE, payload: {one}})
export const fiftyCentsAC = (fiftyCents: number) => ({type: SET_FIFTY_CENTS, payload: {fiftyCents}})
export const twentyCentsAC = (twentyCents: number) => ({type: SET_TWENTY_CENTS, payload: {twentyCents}})
export const tenCentsAC = (tenCents: number) => ({type: SET_TEN_CENTS, payload: {tenCents}})
export const fiveCentsAC = (fiveCents: number) => ({type: SET_FIVE_CENTS, payload: {fiveCents}})
export const twoCentsAC = (twoCents: number) => ({type: SET_TWO_CENTS, payload: {twoCents}})
export const oneCentAC = (oneCent: number) => ({type: SET_ONE_CENT, payload: {oneCent}})
export const ResetAllToDefaultsAC = () => ({type: RESET_ALL_TO_DEFAULTS})
export const sumAllValues = (allValues: number) => ({type: SUM_ALL_VALUES, allValues})

// Main Type
type ActionsType = thousandsACType
    | fiveHundredACType
    | twoHundredACType
    | oneHundredACType
    | fiftyACType
    | twentyACType
    | tenACType
    | fiveACType
    | twoACType
    | oneACType
    | fiftyCentsACType
    | twentyCentsACType
    | tenCentsACType
    | fiveCentsACType
    | twoCentsACType
    | oneCentACType
    | ResetAllToDefaultsType
    | sumAllValuesType

const CashReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_THOUSANDS":
        case "SET_FIVE_HUNDRED":
        case "SET_TWO_HUNDRED":
        case "SET_ONE_HUNDRED":
        case "SET_FIFTY":
        case "SET_TWENTY":
        case "SET_TEN":
        case "SET_FIVE":
        case "SET_TWO":
        case "SET_ONE":
        case "SET_FIFTY_CENTS":
        case "SET_TWENTY_CENTS":
        case "SET_TEN_CENTS":
        case "SET_FIVE_CENTS":
        case "SET_TWO_CENTS":
        case "SET_ONE_CENT":
            return {...state, ...action.payload};
        case "RESET_ALL_TO_DEFAULTS":
            return initialState;
        case "SUM_ALL_VALUES": {
            return {...state, allValues: action.allValues}
        }
        default:
            return state;
    }
}
export default CashReducer;
