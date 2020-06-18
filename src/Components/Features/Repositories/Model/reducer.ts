import { RepositoryType } from '../../../API'
import { GET_REPOSITORIES, ActionsType as RepositoriesActions } from './actions'

const initialState = {
    repositories: null as RepositoryType[] | null,
}

type InitialStateType = typeof initialState

export const Reducer = (
    state = initialState,
    action: RepositoriesActions
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
