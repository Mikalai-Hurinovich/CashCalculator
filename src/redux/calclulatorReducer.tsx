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
    oneCent: number
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
    oneCent: 0
}
// Action Creators
type thousandsACType = ({ type: typeof SET_THOUSANDS, thousands: number })
type fiveHundredACType = ({ type: typeof SET_FIVE_HUNDRED, fiveHundred: number })
type twoHundredACType = ({ type: typeof SET_TWO_HUNDRED, twoHundred: number })
type oneHundredACType = ({ type: typeof SET_ONE_HUNDRED, oneHundred: number })
type fiftyACType = ({ type: typeof SET_FIFTY, fifty: number })
type twentyACType = ({ type: typeof SET_TWENTY, twenty: number })
type tenACType = ({ type: typeof SET_TEN, ten: number })
type fiveACType = ({ type: typeof SET_FIVE, five: number })
type twoACType = ({ type: typeof SET_TWO, two: number })
type oneACType = ({ type: typeof SET_ONE, one: number })
type fiftyCentsACType = ({ type: typeof SET_FIFTY_CENTS, fiftyCents: number })
type twentyCentsACType = ({ type: typeof SET_TWENTY_CENTS, twentyCents: number })
type tenCentsACType = ({ type: typeof SET_TEN_CENTS, tenCents: number })
type fiveCentsACType = ({ type: typeof SET_FIVE_CENTS, fiveCents: number })
type twoCentsACType = ({ type: typeof SET_TWO_CENTS, twoCents: number })
type oneCentACType = ({ type: typeof SET_ONE_CENT, oneCent: number })

// Actions
export const thousandsAC = (thousands: number) => ({type: SET_THOUSANDS, thousands})
export const fiveHundredAC = (fiveHundred: number) => ({type: SET_FIVE_HUNDRED, fiveHundred})
export const twoHundredAC = (twoHundred: number) => ({type: SET_TWO_HUNDRED, twoHundred})
export const oneHundredAC = (oneHundred: number) => ({type: SET_ONE_HUNDRED, oneHundred})
export const fiftyAC = (fifty: number) => ({type: SET_FIFTY, fifty})
export const twentyAC = (twenty: number) => ({type: SET_TWENTY, twenty})
export const tenAC = (ten: number) => ({type: SET_TEN, ten})
export const fiveAC = (five: number) => ({type: SET_FIVE, five})
export const twoAC = (two: number) => ({type: SET_TWO, two})
export const oneAC = (one: number) => ({type: SET_ONE, one})
export const fiftyCentsAC = (fiftyCents: number) => ({type: SET_FIFTY_CENTS, fiftyCents})
export const twentyCentsAC = (twentyCents: number) => ({type: SET_TWENTY_CENTS, twentyCents})
export const tenCentsAC = (tenCents: number) => ({type: SET_TEN_CENTS, tenCents})
export const fiveCentsAC = (fiveCents: number) => ({type: SET_FIVE_CENTS, fiveCents})
export const twoCentsAC = (twoCents: number) => ({type: SET_TWO_CENTS, twoCents})
export const oneCentAC = (oneCent: number) => ({type: SET_ONE_CENT, oneCent})

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

const CashReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_THOUSANDS":
            return {...state, thousands: action.thousands}
        case "SET_FIVE_HUNDRED":
            return {...state, fiveHundred: action.fiveHundred}
        case "SET_TWO_HUNDRED":
            return {...state, twoHundred: action.twoHundred}
        case "SET_ONE_HUNDRED":
            return {...state, oneHundred: action.oneHundred}
        case "SET_FIFTY":
            return {...state, fifty: action.fifty}
        case "SET_TWENTY":
            return {...state, twenty: action.twenty}
        case "SET_TEN":
            return {...state, ten: action.ten}
        case "SET_FIVE":
            return {...state, five: action.five}
        case "SET_TWO":
            return {...state, two: action.two}
        case "SET_ONE":
            return {...state, one: action.one}
        case "SET_FIFTY_CENTS":
            return {...state, fiftyCents: action.fiftyCents}
        case "SET_TWENTY_CENTS":
            return {...state, twentyCents: action.twentyCents}
        case "SET_TEN_CENTS":
            return {...state, tenCents: action.tenCents}
        case "SET_FIVE_CENTS":
            return {...state, fiveCents: action.fiveCents}
        case "SET_TWO_CENTS":
            return {...state, twoCents: action.twoCents}
        case "SET_ONE_CENT":
            return {...state, oneCent: action.oneCent}
        default:
            return state;
    }
}
export default CashReducer;
