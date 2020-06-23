import * as types from './types'
import { ActionsType } from './actions'

const initialState = {
    pageSize: 10,
    portionSize: 3,
    currentPage: 1,
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case types.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }
        default:
            return state
    }
}
