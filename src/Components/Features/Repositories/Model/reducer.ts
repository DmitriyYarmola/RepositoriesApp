import { RepositoryType } from '../../../API'
import { GET_REPOSITORIES } from './actions'
import * as types from '.'

const initialState = {
    repositories: null as RepositoryType[] | null,
}

type InitialStateType = typeof initialState

export const Reducer = (
    state = initialState,
    action: types.RepositoriesActionsType
): InitialStateType => {
    switch (action.type) {
        case GET_REPOSITORIES:
            return {
                repositories: action.payload,
            }
        default:
            return state
    }
}
