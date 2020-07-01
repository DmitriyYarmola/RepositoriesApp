import { RepositoryType, UserType } from '../../../API'
import * as types from './types'
import { ActionsType } from './actions'

const initialState = {
    repositories: null as RepositoryType[] | null,
    totalCount: 10,
    contributorsOfActiveRepository: null as UserType[] | null,
    activeRepositoryId: null as number | null,
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case types.SET_REPOSITORIES:
            console.log(action)
            return {
                ...state,
                repositories: action.payload,
            }
        case types.SET_TOTAL_COUNT_REPOSITORIES:
            return {
                ...state,
                totalCount: action.payload,
            }
        case types.SET_ACTIVE_REPOSITORY:
            return {
                ...state,
                activeRepositoryId: action.payload,
            }
        case types.SET_CONTRIBUTES_OF_ACTIVE_REPOSITORY:
            return {
                ...state,
                contributorsOfActiveRepository: action.payload,
            }
        default:
            return state
    }
}
