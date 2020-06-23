import { ActionsType } from './actions'
import * as types from './types'

const initialState = {
    error: false as boolean,
    textError: '' as string,
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case types.SET_ERROR:
            return {
                ...state,
                error: action.payload.error,
                textError: action.payload.textError,
            }
        default:
            return state
    }
}
